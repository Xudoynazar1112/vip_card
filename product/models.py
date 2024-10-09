from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()
    stock = models.IntegerField()
    definition = models.TextField()
    image = models.ImageField(upload_to='product_image', default='/media/product_images/default.png')

    def __str__(self):
        return self.name
