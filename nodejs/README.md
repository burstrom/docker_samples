# NODE 10.X Webserver
### With simple dockerfile

To build the docker container run:

```
docker build -t [NAME_OF_IMAGE] .
```

Then to run it later on


``` 
docker run -p 8000:8000 --name [NAME_OF_CONTAINER] [NAME_OF_IMAGE]
```
