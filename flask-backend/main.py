from flask import Flask, render_template, request, make_response
from flask_wtf.csrf import CsrfProtect
import json

app = Flask(__name__, static_folder="./static", template_folder="./templates")
csrf = CsrfProtect()
csrf.init_app(app)
app.config['SECRET_KEY'] = 'any secret string'

#@app.route("/")
#def index():
#    return render_template('index.html')

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/test')
def test():
    return render_template('index.html')

@app.route('/post', methods=['POST'])
def post():
    value = request.form['test']
    return value
    
if __name__ == "__main__":
    app.run(host='0.0.0.0',debug=True)