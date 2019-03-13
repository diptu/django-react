from leads.models import Lead
from .serializers import LeadSerializer
from rest_framework import viewsets, permissions


class LeadViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Lead instances.
    """
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeadSerializer
    queryset = Lead.objects.all()