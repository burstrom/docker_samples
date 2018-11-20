# This module is a simple webserver which runs with Node-10.x

To build the docker container run:

``` 
	docker build -t [NAME_OF_IMAGE] .
´´´

Then to run it later on


``` 
	docker run -p 8000:8000 --name [NAME_OF_CONTAINER] [NAME_OF_IMAGE]
´´´