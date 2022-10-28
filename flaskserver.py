from flask import Flask
import requests
import random
import base64
import os

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if not os.path.exists("images"):
    os.makedirs("images")

if not os.path.exists("jobIds"):
    os.makedirs("jobIds")

#Define a route to downloader function
@app.route('/<url>')
def download(url):
    # Decode string using base64
    url = base64.b64decode(url)
    print(url)
    file = requests.get(url)
    #Write to file
    file_name = str(random.randint(10000000, 99999999)) + ".webp"
    open("images/" + file_name, 'wb').write(file.content)
    open("jobIds/" + file_name + ".txt", 'w').write(file_name + "\n" + str(url))

    # Return 200 OK
    return "200 OK"

#Start flask server
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5001)
