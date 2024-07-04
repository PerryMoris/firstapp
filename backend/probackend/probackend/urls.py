
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
    path('api/createtask/', TaskCreate.as_view(), name='createtask')

]
