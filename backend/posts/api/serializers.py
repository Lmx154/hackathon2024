from rest_framework import serializers
from ..models import User, CreditScore, FinancialSituation, Opportunity, UserOpportunity, Advice

# Serializer for the User model
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'is_veteran', 'is_disabled', 'date_joined']

# Serializer for the CreditScore model
class CreditScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreditScore
        fields = ['id', 'user', 'score', 'date_updated']

# Serializer for the FinancialSituation model
class FinancialSituationSerializer(serializers.ModelSerializer):
    class Meta:
        model = FinancialSituation
        fields = ['id', 'user', 'occupation', 'annual_income', 'expenses', 'savings', 'debt']

# Serializer for the Opportunity model
class OpportunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Opportunity
        fields = ['id', 'name', 'description', 'type', 'eligibility_criteria', 'is_national']

# Serializer for the UserOpportunity model
class UserOpportunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = UserOpportunity
        fields = ['id', 'user', 'opportunity', 'date_recommended']

# Serializer for the Advice model
class AdviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advice
        fields = ['id', 'user', 'content', 'date_given']
