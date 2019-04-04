import flask

app = flask.Flask("__main__")

@app.route("/")
def my_index() :
    return flask.render_template("index.html", token="Hello Flask + React")

<<<<<<< HEAD
app.run(host='0.0.0.0')
=======
if __name__ == "__main__":
    app.run(host='0.0.0.0')
>>>>>>> 092e4a3ca084ee9fe67ba6cf531c8e98a631df68
