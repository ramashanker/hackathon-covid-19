#!/usr/bin/env bash

#####
# This script will start necessary applications for our development environment
#####

printf "Starting necessary containers...\n"


sudo iptables -N DOCKER

if [ "$(sudo docker inspect --format="{{ .State.Running }}" fast-data-dev)" != "true" ]; then
  sudo docker rm -f fast-data-dev
  sudo docker run -d --name fast-data-dev -p 2181:2181 -p 3030:3030 -p 8081-8083:8081-8083 \
    -p 9581-9585:9581-9585 -p 9092:9092 -e ADV_HOST=localhost \
	-e SAMPLEDATA=0 \
	-e RUNNING_SAMPLEDATA=1 \
    landoop/fast-data-dev:latest
fi
