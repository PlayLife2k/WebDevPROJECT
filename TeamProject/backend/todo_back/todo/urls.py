from django.urls import path
from .views import *
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('auth/', obtain_jwt_token),

    path('category/', CategoryView.as_view()),
    path('category/<int:category_id>', CategoryDetailView.as_view()),
    path('category/<int:category_id>/tasks', CategoryProductView.as_view()),

    path('priority/', PriorityViews.as_view()),
    path('priority/<int:priority_id>', PriorityDetailView.as_view()),

    path('task/', TaskViews.as_view()),
    path('task/<int:task_id>', TaskDetailViews.as_view())
]