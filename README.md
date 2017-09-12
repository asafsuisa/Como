# App creator

## Live preview:

 http://como.azurewebsites.net

# Client

## Install and run:

The client was written using angular-cli version 1.2.0.

Install and run with angular-cli:

1.Run npm install.

2.Run ng serve.

3.Enter to localhost:4200.


# Server

The server was written in ASP .NET WEB API 2 using visual studio 2015.


## Install and run:

1. copy the server folder into your computer and click on the Como.sln .

## Server Api for upload image file

1. The URL address is <server_url>/api/home/postfile

2. You must attached the file in body parameter using formData type.

3. The response body will contains array with two values of main colors in the image.

***Recommended tool to simulate - Postman.***

Request example:

	POST /api/Home/postfile HTTP/1.1
	Host: como.azurewebsites.net
	Cache-Control: no-cache
	Postman-Token: 07f230ad-f848-b488-b99b-9255efbbbd91
	Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

	------WebKitFormBoundary7MA4YWxkTrZu0gW
	Content-Disposition: form-data; name="inputFile"; filename="logo-fiverr.jpg"
	Content-Type: image/jpeg


	------WebKitFormBoundary7MA4YWxkTrZu0gW--
	
Response example:

["#FFFFFF","#00B24E"]

# Live preview:

  http://como.azurewebsites.net


