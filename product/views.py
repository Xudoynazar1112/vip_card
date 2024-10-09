from django.shortcuts import render
from django.views.generic import ListView
from product.models import Product


class ProductCreateView(ListView):
    model = Product
    template_name = 'main.html'
    fields = '__all__'


def about(request):
    return render(request, 'about.html')


def contact(request):
    return render(request, 'contact.html')


def products(request):
    products_list = Product.objects.all()
    context = {
        "products_list": products_list
    }
    return render(request, 'products.html', context)


def details(request, id):
    product = Product.objects.get(id=id)
    context = {
        "product": product
    }
    return render(request, 'detail.html', context)

