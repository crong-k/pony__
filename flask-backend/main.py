from flask import Flask, render_template, request, make_response
from flask_wtf.csrf import CsrfProtect

import json

app = Flask(__name__, static_folder="./static", template_folder="./templates")
csrf = CsrfProtect()
csrf.init_app(app)
app.config['SECRET_KEY'] = 'any secret string'

@app.route("/")
def index():
    return render_template("index.html")

@csrf.exempt
@app.route("/json_submit", methods=["POST"])
def submit_handler():
    # a = request.get_json(force=True)
    app.logger.log("json_submit")
    return {}

    
if __name__ == "__main__":
    app.run(host='0.0.0.0',debug=True)