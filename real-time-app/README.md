## Build

```bash
mvn clean install
```

## Running the application
Make sure to build first, see above. Run from the `healthcare` directory.

```bash
mvn -Dspring-boot.run.profiles=local -DskipTests spring-boot:run
```

## Create docker image
Run from the `healthcare` directory.

```bash
mvn clean package docker:build -Dmaven.test.skip=true
```

## Run Docker image

```bash
docker run -p 5657:5657 healthcare:latest
```
## Run Docker-compose with splunk log monitoring image

Run from the `healthcare\docker` directory

Start Application

```bash
docker-compose up
```

Stop Application

```bash
docker-compose down
```

splunk login url:http://localhost:8000/en-US/

username:admin
password:legacy@007

## Swagger Api for the healthcare.

http://localhost:5657/swagger-ui.html#
