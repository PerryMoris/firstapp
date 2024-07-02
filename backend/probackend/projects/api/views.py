from rest_framework.viewsets import ModelViewSet
from ..models import Project , Stakeholders, Taskactivities
from .serializers import *
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth import User

class ProjectViewSer(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [AllowAny]

class StakeholdersViewSet(ModelViewSet):
    queryset = Stakeholders.objects.all()
    serializer_class = StakeholdersSerializer
    permission_classes = [AllowAny]

class TaskViewSet(ModelViewSet):
    queryset = Taskactivities.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [AllowAny]