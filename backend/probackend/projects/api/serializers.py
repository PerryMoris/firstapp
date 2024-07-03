from rest_framework.serializers import ModelSerializer
from ..models import Project, Stakeholders, Taskactivities
from django.contrib.auth.models import User

class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'name', 'details', 'startdate', 'enddate', 'status')

class StakeholdersSerializer(ModelSerializer):
    class Meta:
        model = Stakeholders
        fields = ('id', 'project', 'name', 'email', 'position', 'activity')

class TaskSerializer(ModelSerializer):
    class Meta:
        model = Taskactivities
        fields = ('id', 'project', 'user', 'task', 'notes', 'challenges', 'created_at')
        extra_kwargs = {'user': {'read_only': True}}

class UserSerializer (ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email', 'username', 'password']
        # fields = '__all__'
        extra_kwargs = {"password": {'write_only': True}}

        def create(self, validated_data):
            user = User.objects.create_user(**validated_data)
            return user