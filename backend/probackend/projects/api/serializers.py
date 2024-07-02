from rest_framework.serializers import ModelSerializer
from ..models import Project, Stakeholders, Taskactivities


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
        fields = ('id', 'project', 'user', 'task', 'notes', 'challenges')