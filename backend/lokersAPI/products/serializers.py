from .models import Product
from rest_framework import serializers
class SnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title', 'code', 'linenos', 'language', 'style']