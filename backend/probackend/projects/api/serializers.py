from rest_framework.serializers import ModelSerializer, SerializerMethodField
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
    project_name = SerializerMethodField()
    class Meta:
        model = Taskactivities
        fields = ('id', 'project', 'project_name', 'user', 'task', 'notes', 'challenges', 'created_at')
        extra_kwargs = {'user': {'read_only': True}}
    
    def get_project_name(self, obj):
        return obj.project.name

class UserSerializer (ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email', 'username', 'password']
        # fields = '__all__'
        extra_kwargs = {"password": {'write_only': True}}

        def create(self, validated_data):
            user = User.objects.create_user(**validated_data)
            return user
        
class AlltaskSerializer(ModelSerializer):
    project_name = SerializerMethodField()
    user_name = SerializerMethodField()
    class Meta:
        model = Taskactivities
        fields = ('id', 'project', 'project_name', 'user_name', 'user', 'task', 'notes', 'challenges', 'created_at')
    
    def get_project_name(self, obj):
        return obj.project.name
    
    def get_user_name(self, obj):
        return obj.user.get_full_name()