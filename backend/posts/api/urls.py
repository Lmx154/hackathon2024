from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    UserViewSet, CreditScoreViewSet, FinancialSituationViewSet,
    OpportunityViewSet, UserOpportunityViewSet, AdviceViewSet,
    UserRegisterView, UserLoginView
)

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'credit-scores', CreditScoreViewSet)
router.register(r'financial-situations', FinancialSituationViewSet)
router.register(r'opportunities', OpportunityViewSet)
router.register(r'user-opportunities', UserOpportunityViewSet)
router.register(r'advice', AdviceViewSet)

urlpatterns = [
    path('', include(router.urls)),  # Include existing viewsets
    path('register/', UserRegisterView.as_view(), name='user-register'),
    path('login/', UserLoginView.as_view(), name='user-login'),
]
