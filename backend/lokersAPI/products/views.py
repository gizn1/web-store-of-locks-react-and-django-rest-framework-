from rest_framework.generics import ListAPIView
from .serializers import ProductSerializer, ProductCategorySerializer
from .models import Product,ProductCategory


class ViewProductsList(ListAPIView):

    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(category=self.kwargs['pk'])


class ViewProductCategoryList(ListAPIView):
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategorySerializer
