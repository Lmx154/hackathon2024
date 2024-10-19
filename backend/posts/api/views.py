from rest_framework.viewsets import ModelViewSet
from ..models import User, CreditScore, FinancialSituation, Opportunity, UserOpportunity, Advice
from .serializers import (
    UserSerializer, CreditScoreSerializer, FinancialSituationSerializer,
    OpportunitySerializer, UserOpportunitySerializer, AdviceSerializer
)

# ViewSet for User model
class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# ViewSet for CreditScore model
class CreditScoreViewSet(ModelViewSet):
    queryset = CreditScore.objects.all()
    serializer_class = CreditScoreSerializer

# ViewSet for FinancialSituation model
class FinancialSituationViewSet(ModelViewSet):
    queryset = FinancialSituation.objects.all()
    serializer_class = FinancialSituationSerializer

# ViewSet for Opportunity model
class OpportunityViewSet(ModelViewSet):
    queryset = Opportunity.objects.all()
    serializer_class = OpportunitySerializer

# ViewSet for UserOpportunity model
class UserOpportunityViewSet(ModelViewSet):
    queryset = UserOpportunity.objects.all()
    serializer_class = UserOpportunitySerializer

# ViewSet for Advice model
class AdviceViewSet(ModelViewSet):
    queryset = Advice.objects.all()
    serializer_class = AdviceSerializer
