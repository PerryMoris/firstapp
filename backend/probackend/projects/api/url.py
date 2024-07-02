from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import *

project_router = DefaultRouter()
project_router.register(r'projects', ProjectViewSer, basename="projects")

stakeholders_router = DefaultRouter()
stakeholders_router.register(r'stakeholders', StakeholdersViewSet, basename="stakeholders")

task_router = DefaultRouter()
task_router.register(r'task', TaskViewSet, basename="task")