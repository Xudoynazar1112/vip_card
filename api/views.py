from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import IsAuthenticated

from product.models import Product
from .serializers import ProductSerializer


class ProductListAPIView(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

