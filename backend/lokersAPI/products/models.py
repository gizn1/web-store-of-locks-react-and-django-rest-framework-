from django.db import models
from colorfield.fields import ColorField
from django.core.validators import MaxValueValidator, MinValueValidator

class ProductCategory(models.Model):
    title = models.CharField(max_length=50,verbose_name='название')
    image = models.ImageField(upload_to='Image-Category',verbose_name='фото')
    def __str__(self):
        return self.title


class TypeOfDoor(models.Model):
    title = models.CharField(max_length=50,verbose_name='название')
    def __str__(self):
        return self.title


class Product(models.Model):
    title = models.CharField(max_length=50,verbose_name='название')
    price = models.IntegerField(verbose_name='цена')
    oldPrice = models.IntegerField(blank=True, null=True,verbose_name='старая цена')
    category = models.ForeignKey(ProductCategory, on_delete=models.SET_NULL, null=True,verbose_name='категория')
    WorkWith = models.ManyToManyField(TypeOfDoor, null=True,verbose_name='подходит для')
    description = models.TextField(verbose_name='описание')
    pictureForDescription = models.ImageField(upload_to='Image-Description',verbose_name='фото к описанию',blank=True, null=True)
    rating = models.SmallIntegerField(verbose_name='общая оценка',default=5,validators=[
            MaxValueValidator(5),
            MinValueValidator(1)
        ])
    def __str__(self):
        return f'{self.title}'


class ProductImage(models.Model):
    product = models.ForeignKey(Product,on_delete=models.CASCADE,verbose_name='товар')
    image = models.ImageField(upload_to='Image-Product',verbose_name='фото')

    def __str__(self):
        return f'{self.product}'


class ProductColor(models.Model):
    product = models.ForeignKey(Product,on_delete=models.CASCADE,verbose_name='товар')
    color = ColorField(default='#fff',verbose_name='цвет')

    def __str__(self):
        return f'{self.product}'

class ProductEquipment(models.Model):
    product = models.ForeignKey(Product,on_delete=models.CASCADE,verbose_name='товар')
    title = models.CharField(max_length=150,verbose_name='название')
    price = models.IntegerField(verbose_name='цена')
    oldPrice = models.IntegerField(blank=True, null=True,verbose_name='старая цена')

    def __str__(self):
        return f'{self.product}-{self.title}'




class CharacteristicValue(models.Model):
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    headline = models.CharField(max_length=100,verbose_name='название поля')
    value = models.CharField(max_length=200,verbose_name='значение')

    def __str__(self):
        return f'{self.product}'


class Comment(models.Model):
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    user = models.CharField(max_length=200, verbose_name='комментатор')
    date = models.DateField(auto_now_add=True, verbose_name='дата')
    rating = models.SmallIntegerField(verbose_name="оценка",default=5, validators=[
        MaxValueValidator(5),
        MinValueValidator(1)
    ])
    email = models.EmailField(verbose_name='почта комментатора')
    text = models.TextField(verbose_name='комментарий')

    def __str__(self):
        return f'{self.user} {self.product}'

class CommentOnComment(models.Model):
    comment = models.ForeignKey(Comment,on_delete=models.CASCADE,verbose_name='кому ответ')
    user = models.CharField(max_length=200,verbose_name='Комментатор')
    date = models.DateField(auto_now_add=True,verbose_name='дата')
    email = models.EmailField(verbose_name='почта комментатора')
    text = models.TextField(verbose_name='комментарий')

    def __str__(self):
        return f'{self.user} {self.comment}'


