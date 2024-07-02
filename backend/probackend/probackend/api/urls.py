from rest_framework.routers import DefaultRouter
from projects.api.url import project_router
from django.urls import path, include
from projects.api import views

router = DefaultRouter()

#projects
#router.register(r'projects', views.ProjectViewSer,  basename='projects')
router.registry.extend(project_router.registry)

urlpatterns = [
    path('', include(router.urls))
]