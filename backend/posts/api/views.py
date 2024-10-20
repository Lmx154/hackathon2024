from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
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

# User registration view
class UserRegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered successfully!'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# User login view
class UserLoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        try:
            user = User.objects.get(username=username)
            if user.check_password(password):
                # Handle successful authentication and set cookies
                response = Response({'message': 'Login successful!'})
                response.set_cookie('sessionid', 'your_session_token', httponly=True)
                return response
            else:
                return Response({'error': 'Invalid password'}, status=status.HTTP_401_UNAUTHORIZED)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
