from django.db import models
from products.models import Product


class SlideOnMainPage(models.Model):
    products = models.ManyToManyField(to=Product,verbose_name='товары для слайдера')


class PopularProducts(models.Model):
    products = models.ManyToManyField(to=Product,verbose_name='популярные товары')


class YouWatched(models.Model):
    products = models.ManyToManyField(to=Product,verbose_name='популярные товары')
