from rest_framework.routers import DefaultRouter
from projects.api.url import *
from django.urls import path, include
from projects.api import views

router = DefaultRouter()

router.registry.extend(project_router.registry)
router.registry.extend(stakeholders_router.registry)
router.registry.extend(task_router.registry)

urlpatterns = [
    path('', include(router.urls)),
    path('api/taskdelete/<int>:pk/', TaskDelete.as_view(), name='deletetask'),
    path('api/createtask/', TaskCreate.as_view(), name='createtask')
]