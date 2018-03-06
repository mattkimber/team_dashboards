#!/bin/bash
if [ -z $1 ]; then
  echo "No service supplied"
  exit 1
fi;

docker service rm $1

# Web server will fail to forward correctly if not restarted
docker service rm dashboard_webserver

docker stack deploy dashboard --compose-file=docker-compose.yml
