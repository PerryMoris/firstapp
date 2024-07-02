from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSer

project_router = DefaultRouter()
project_router.register(r'projects', ProjectViewSer)