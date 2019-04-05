from flask import Flask, render_template, request, make_response
from flask_wtf.csrf import CsrfProtect
import json

app = Flask(__name__, static_folder="./static", template_folder="./templates")
csrf = CSRFProtect()
csrf.init_app(app)


@app.route("/")
def index():
    #csrf_token = "12344"
    
    return render_template("index.html")
    #return render_template("index.html", csrf_token=csrf_token)


@app.route("/ajax_post", methods=['POST'])
def ajax_post():
    data = request.form['keyword']
    print(data)
    msg = "Flask got successfully ajax request!"
    response = make_response(json.dumps(msg))
    response.status_code = 200
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

if __name__ == "__main__":
    app.run(host='0.0.0.0',debug=True)