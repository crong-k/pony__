from flask import Flask, request, render_template
from flask_wtf.csrf import CSRFProtect
import json


app = Flask("__main__")
app.config['SECRET_KEY'] = 'ASDJFAOWEFJ@)#@#)$()@#$()@#WOLDOFO'
csrf = CSRFProtect(app)
@csrf.error_handler
def csrf_error(reason):
    print (reason)

@app.route("/")
def my_index() :
    return render_template("index.html", token="Hello Flask + React")

@app.route("/ajax_post", methods=['POST'])
def ajax_post(request):
    json = request.get_json()  
    print (json)



if __name__ == "__main__":
    app.run(host='0.0.0.0')
