from .models import Product,ProductCategory
from rest_framework import serializers


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title', 'price', 'oldPrice', 'category',
                  'WorkWith', 'description', 'pictureForDescription','rating']


class ProductCategorySerializer(serializers.ModelSerializer):

    class Meta:

        model = ProductCategory
        fields = ['id', 'title', 'image']