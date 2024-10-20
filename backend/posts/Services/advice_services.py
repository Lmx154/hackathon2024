from posts.models import User, Advice
def get_latest_financial_advice(user_id):
    try:
        user = User.object.get(id=user_id)
        latest_advice = Advice.Objects.filter(user=user).order_by('-date_given').first()

        if not latest_advice:
            return {'message': 'No financial advice available'}
        
        return{'content':latest_advice.content, ' date_given': latest_advice.date_given}
    except user == None:
        return{'error':'user not found'}