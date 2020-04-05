# hackathon-covid-19
Remote health monitoring for hackathon

## Pre requisit
Installed java
Installed python
Installed docker
Installed intellij


## Running the application
Goto real-time-app folder and build the application

```bash
mvn clean install
```

## Start the kafka docker container
From folder real-time-app run the script

```bash
./setup.sh
```

## Start the application as spring boot
From folder real-time-app/healthcare/ run the following command

```bash
mvn spring-boot:run
```

## Access The ui portal
Web browser access the following url.

http://localhost:5657/
 provide the credential.
 username: admin
 password: password
 
## Run the client to send health care data
Run the client using python code

Run server from folder healthcare-client/python-client

```bash
python health_data_server.py
```

Run client from folder healthcare-client/python-client

```bash
python health_data_client.py
```

Select The case as corona and the select patient to see the data on screen```