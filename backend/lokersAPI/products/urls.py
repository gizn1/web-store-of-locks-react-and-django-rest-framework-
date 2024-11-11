from django.urls import path
from .views import ViewProductsList, ViewProductCategoryList

app_name = 'product'

urlpatterns = [
    path('product-list/<int:pk>', ViewProductsList.as_view(),name='products'),
    path('category-list', ViewProductCategoryList.as_view(),name='category'),
]