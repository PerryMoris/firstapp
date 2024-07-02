from rest_framework.viewsets import ModelViewSet
from ..models import Project 
from .serializers import ProjectSerializer


class ProjectViewSer(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer