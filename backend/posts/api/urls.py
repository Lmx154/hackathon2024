from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    UserViewSet, CreditScoreViewSet, FinancialSituationViewSet,
    OpportunityViewSet, UserOpportunityViewSet, AdviceViewSet
)

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'credit-scores', CreditScoreViewSet)
router.register(r'financial-situations', FinancialSituationViewSet)
router.register(r'opportunities', OpportunityViewSet)
router.register(r'user-opportunities', UserOpportunityViewSet)
router.register(r'advice', AdviceViewSet)

# No additional 'api/' prefix here
urlpatterns = router.urls
