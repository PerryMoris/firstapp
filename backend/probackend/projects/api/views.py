from rest_framework.viewsets import ModelViewSet
from ..models import Project , Stakeholders, Taskactivities
from .serializers import *
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth.models import User
from rest_framework import generics


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

class TaskCreate(generics.ListCreateAPIView):
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        usr = self.request.user
        return Taskactivities.objects.filter(user=usr)
    
    def perform_create (self, serializer):
        if serializer.is_valid():
            serializer.save(user=self.request.user)
        else:
            print(serializer.errors)


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]