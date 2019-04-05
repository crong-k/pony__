from flask import Flask, render_template, request, make_response
from flask_wtf.csrf import CsrfProtect

import json

app = Flask(__name__, static_folder="./static", template_folder="./templates")
csrf = CsrfProtect()
csrf.init_app(app)
app.config['SECRET_KEY'] = 'any secret string'

@app.route('/')
@app.route('/index')
def index():
    return render_template("index.html")

@app.route('/test', methods=['GET', 'POST'])
def test():
    vars = request.data
    return ', '.join([str(i) for i in vars])
    
if __name__ == "__main__":
    app.run(host='0.0.0.0',debug=True)