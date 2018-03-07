#!/bin/bash
cd src
ng build
cd ..
docker build . -t collinsongroup/dashboard

