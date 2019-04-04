import flask

app = flask.Flask("__main__")

@app.route("/")
def my_index() :
    return flask.render_template("index.html", token="Hello Flask + React")

if __name__ == "__main__":
    app.run(host='0.0.0.0')