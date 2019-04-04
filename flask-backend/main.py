from flask import Flask, request, render_template
import json


app = Flask("__main__")
@app.route("/")
def my_index() :
    return render_template("index.html", token="Hello Flask + React")

@app.route("/user/12345", methods=['POST'])
def ajax_post(request):
    json = request.get_json()  
    print (json)



if __name__ == "__main__":
    app.run(host='0.0.0.0')
