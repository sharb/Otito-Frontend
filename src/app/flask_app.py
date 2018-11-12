from flask import Flask, render_template
from globals import Globals

app = Flask(__name__, 
			template_folder=Globals.TEMPLATE_PATH,	# folder that flask will search for templates
			static_url_path=Globals.STATIC_PATH,	# path on server where static files will be exposed to client 
			static_folder=Globals.STATIC_FOLDER
		)

app.config['DEBUG'] = True






@app.route("/", methods=["GET"])
def index():
	return render_template('index.html')


@app.route("/topics", methods=["GET"])
def topics():
	return render_template('index.html')




if __name__ == "__main__":
    app.run(
    		host = '127.0.0.1',
    		port = 3004
    	)

