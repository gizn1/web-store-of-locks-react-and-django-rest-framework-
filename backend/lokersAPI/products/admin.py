from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(ProductCategory)

admin.site.register(TypeOfDoor)


class ProductImageStacked(admin.StackedInline):
    model = ProductImage
    extra = 3


class ProductColorStacked(admin.StackedInline):
    model = ProductColor
    extra = 3


class ProductEquipmentStacked(admin.StackedInline):
    model = ProductEquipment
    extra = 3





class CharacteristicValueStacked(admin.StackedInline):
    model = CharacteristicValue
    extra = 1


class CommentStacked(admin.StackedInline):
    model = Comment
    extra = 6


class CommentOnCommentStacked(admin.StackedInline):
    model = CommentOnComment
    extra = 6


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageStacked,CharacteristicValueStacked,ProductEquipmentStacked,ProductColorStacked]
    readonly_fields = ['rating']




admin.site.register(Comment)