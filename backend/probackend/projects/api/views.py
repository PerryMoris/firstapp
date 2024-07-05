from rest_framework.viewsets import ModelViewSet
from ..models import Project , Stakeholders, Taskactivities
from .serializers import *
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth.models import User
from rest_framework import generics


class ProjectViewSer(ModelViewSet):
    queryset = Project.objects.all().order_by("-id")
    serializer_class = ProjectSerializer
    permission_classes = [AllowAny]

class ProjectCreate(generics.ListCreateAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]

    def perform_create (self, serializer):
        if serializer.is_valid():
            serializer.save(created_by=self.request.user)
        else:
            print(serializer.errors)

class GetSpecificProject(generics.ListAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        iid = self.kwargs.get('iid')  # assuming 'iid' is the project ID passed in URL
        try:
            tasks = Project.objects.filter(id=iid)
            return tasks
        except Project.DoesNotExist:
            # Handle case where project with given ID does not exist
            return Project.objects.none() 


class StakeholdersViewSet(ModelViewSet):
    queryset = Stakeholders.objects.all()
    serializer_class = StakeholdersSerializer
    permission_classes = [AllowAny]

class StakeholderCreate(generics.ListCreateAPIView):
    serializer_class = StakeholdersSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Stakeholders.objects.all().order_by("-id")
    
    def perform_create (self, serializer):
        if serializer.is_valid():
            serializer.save(created_by=self.request.user)
        else:
            print(serializer.errors)

class GetSpecificStakeholder(generics.ListCreateAPIView):
    serializer_class = StakeholdersSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        iid = self.kwargs.get('iid') 
        try:
            project = Project.objects.get(id=iid)
            tasks = Stakeholders.objects.filter(project=project).order_by("-id")
            return tasks
        except Project.DoesNotExist:
            return Stakeholders.objects.none() 


class TaskViewSet(ModelViewSet):
    queryset = Taskactivities.objects.all().order_by("-id")
    serializer_class = AlltaskSerializer
    permission_classes = [AllowAny]

class TaskCreate(generics.ListCreateAPIView):
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        usr = self.request.user
        return Taskactivities.objects.filter(user=usr).order_by("-id")
    
    def perform_create (self, serializer):
        if serializer.is_valid():
            serializer.save(user=self.request.user)
        else:
            print(serializer.errors)

class GetSpecificTask(generics.ListAPIView):
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        iid = self.kwargs.get('iid')  # assuming 'iid' is the project ID passed in URL
        try:
            project = Project.objects.get(id=iid)
            tasks = Taskactivities.objects.filter(project=project).order_by("-id")
            return tasks
        except Project.DoesNotExist:
            # Handle case where project with given ID does not exist
            return Taskactivities.objects.none() 
        
class TaskDetail(generics.RetrieveUpdateAPIView):
    queryset = Taskactivities.objects.all()
    serializer_class = TaskSerializer

class TaskDelete (generics.DestroyAPIView):
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        usr = self.request.user
        return Taskactivities.objects.filter(user=usr)

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]