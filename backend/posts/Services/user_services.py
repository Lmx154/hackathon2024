from posts.models import user, CreditScore, FinancialSituation, UserOpportunity

def get_user_profile(user_id):
    try:
        user = user.objects.get(id=user_id)
        credit_score= CreditScore.object.filter(user=user).order_by('-date_updated').first()
        financial_situation = FinancialSituation.objects.filter(user=user).first()
        user_opportunities = UserOpportunity.objects.filter(user=user)
    
        profile_data= {
            'username': user.username,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'email':user.email,
            'is_veteran':user.is_veteran,
            'is_disabaled':user.is_disabled,
            'credit_score':credit_score.score if credit_score else None,
            'financial_situation': {
                'occupation': financial_situation.occupation if financial_situation else None,
                'annual_income': financial_situation.annual_income if financial_situation else None,
                'expenses': financial_situation.expenses if financial_situation else None,
                'savings': financial_situation.savings if financial_situation else None,
                'debt': financial_situation.debt if financial_situation else None,

            },
            'opportunities':[op.opportunity.name for op in user_opportunities],


        }
        return profile_data
    except user==None:
        return {'error': 'User not found'}
    