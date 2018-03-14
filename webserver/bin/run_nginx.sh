#!/bin/bash
READY=0
ATTEMPTS=0

while [ $ATTEMPTS -lt 12 -a $READY -eq 0 ]; do
  echo "Checking for API..."
  curl -s http://api:3000/ --connect-timeout 20
  res=$?
  if [ $res -eq 0 ]; then
    READY=1
    echo "API is UP, running nginx"
  else
    let ATTEMPTS=ATTEMPTS+1
    echo "API not ready, waiting 10s..."
    sleep 10   
  fi
done

nginx
