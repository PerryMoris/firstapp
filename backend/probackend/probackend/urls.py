
from django.contrib import admin
from django.urls import path, include
from projects.api.views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView 
from projects.api.views import *


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('probackend.api.urls')),
    path('api/user/register/', CreateUserView.as_view(), name="registeruser"),
    path('api/token/', TokenObtainPairView.as_view(), name="get_token"),
    path('api/token/refresh', TokenRefreshView.as_view(), name="refresh_token"),
    
    path('api/taskdelete/<int:pk>/', TaskDelete.as_view(), name='deletetask'),
    path('api/createtask/', TaskCreate.as_view(), name='createtask'),
    path('api/createproject/', ProjectCreate.as_view(), name='createproject'),
    path('api/log/', LogDetail.as_view(), name='logging'),
    path('api/createstake/', StakeholderCreate.as_view(), name='createstakeholder'),
    path('api/updatetask/<int:pk>/', TaskDetail.as_view(), name='task-detail'),

    path('api/stasks/<int:iid>/', GetSpecificTask.as_view(), name='specifictask'),
    path('api/sstake/<int:iid>/', GetSpecificStakeholder.as_view(), name='specificstack'),
    path('api/sproject/<int:iid>/', GetSpecificProject.as_view(), name='specificproject'),


]
