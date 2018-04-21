from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
   return 'Testing 123'

@app.route('/about')
def about():
   return 'During disasters, it is hard for people to know what and where to go. We wanted to create a website that could serve as a single, clear source of information and resources for people to follow during emergencies.'

if __name__ == '__main__':
   app.run()
