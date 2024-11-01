# Generated by Django 4.2.16 on 2024-10-30 12:47

import colorfield.fields
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_comment_product'),
    ]

    operations = [
        migrations.AlterField(
            model_name='characteristicvalue',
            name='headline',
            field=models.CharField(max_length=100, verbose_name='название поля'),
        ),
        migrations.AlterField(
            model_name='characteristicvalue',
            name='value',
            field=models.CharField(max_length=200, verbose_name='значение'),
        ),
        migrations.AlterField(
            model_name='comment',
            name='date',
            field=models.DateField(auto_now_add=True, verbose_name='дата'),
        ),
        migrations.AlterField(
            model_name='comment',
            name='email',
            field=models.EmailField(max_length=254, verbose_name='почта комментатора'),
        ),
        migrations.AlterField(
            model_name='comment',
            name='rating',
            field=models.SmallIntegerField(default=5, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(1)], verbose_name='оценка'),
        ),
        migrations.AlterField(
            model_name='comment',
            name='text',
            field=models.TextField(verbose_name='комментарий'),
        ),
        migrations.AlterField(
            model_name='comment',
            name='user',
            field=models.CharField(max_length=200, verbose_name='комментатор'),
        ),
        migrations.AlterField(
            model_name='commentoncomment',
            name='comment',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.comment', verbose_name='кому ответ'),
        ),
        migrations.AlterField(
            model_name='commentoncomment',
            name='date',
            field=models.DateField(auto_now_add=True, verbose_name='дата'),
        ),
        migrations.AlterField(
            model_name='commentoncomment',
            name='email',
            field=models.EmailField(max_length=254, verbose_name='почта комментатора'),
        ),
        migrations.AlterField(
            model_name='commentoncomment',
            name='text',
            field=models.TextField(verbose_name='комментарий'),
        ),
        migrations.AlterField(
            model_name='commentoncomment',
            name='user',
            field=models.CharField(max_length=200, verbose_name='Комментатор'),
        ),
        migrations.AlterField(
            model_name='product',
            name='WorkWith',
            field=models.ManyToManyField(null=True, to='products.typeofdoor', verbose_name='подходит для'),
        ),
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='products.productcategory', verbose_name='категория'),
        ),
        migrations.AlterField(
            model_name='product',
            name='description',
            field=models.TextField(verbose_name='описание'),
        ),
        migrations.AlterField(
            model_name='product',
            name='oldPrice',
            field=models.IntegerField(blank=True, null=True, verbose_name='старая цена'),
        ),
        migrations.AlterField(
            model_name='product',
            name='pictureForDescription',
            field=models.ImageField(blank=True, null=True, upload_to='Image-Description', verbose_name='фото к описанию'),
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.IntegerField(verbose_name='цена'),
        ),
        migrations.AlterField(
            model_name='product',
            name='rating',
            field=models.SmallIntegerField(default=5, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(1)], verbose_name='общая оценка'),
        ),
        migrations.AlterField(
            model_name='product',
            name='title',
            field=models.CharField(max_length=50, verbose_name='название'),
        ),
        migrations.AlterField(
            model_name='productcategory',
            name='image',
            field=models.ImageField(upload_to='Image-Category', verbose_name='фото'),
        ),
        migrations.AlterField(
            model_name='productcategory',
            name='title',
            field=models.CharField(max_length=50, verbose_name='название'),
        ),
        migrations.AlterField(
            model_name='productcolor',
            name='color',
            field=colorfield.fields.ColorField(default='#fff', image_field=None, max_length=25, samples=None, verbose_name='цвет'),
        ),
        migrations.AlterField(
            model_name='productcolor',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.product', verbose_name='товар'),
        ),
        migrations.AlterField(
            model_name='productequipment',
            name='oldPrice',
            field=models.IntegerField(blank=True, null=True, verbose_name='старая цена'),
        ),
        migrations.AlterField(
            model_name='productequipment',
            name='price',
            field=models.IntegerField(verbose_name='цена'),
        ),
        migrations.AlterField(
            model_name='productequipment',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.product', verbose_name='товар'),
        ),
        migrations.AlterField(
            model_name='productequipment',
            name='title',
            field=models.CharField(max_length=150, verbose_name='название'),
        ),
        migrations.AlterField(
            model_name='productimage',
            name='image',
            field=models.ImageField(upload_to='Image-Product', verbose_name='фото'),
        ),
        migrations.AlterField(
            model_name='productimage',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.product', verbose_name='товар'),
        ),
        migrations.AlterField(
            model_name='typeofdoor',
            name='title',
            field=models.CharField(max_length=50, verbose_name='название'),
        ),
    ]
