#!/usr/bin/env bash
ENV_PROFILE=${PROFILE:=local}
if [ $ENV_PROFILE != local ]; then
  echo "Running using profile ${ENV_PROFILE}"
  java -Xmx256m -Dspring.profiles.active=${ENV_PROFILE} -jar /spring-websocket.jar
else
  echo "Running local with debug exposed"
  java -Xmx256m -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5005 -jar /spring-websocket.jar
fi