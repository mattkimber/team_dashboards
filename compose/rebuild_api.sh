#!/bin/bash
docker build ../api/ -t collinsongroup/dashboard_api && ./redeploy.sh dashboard_api
