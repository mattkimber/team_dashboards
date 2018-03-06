#!/bin/bash
docker build ../uptime_prospector/ -t collinsongroup/uptime_prospector && ./redeploy.sh dashboard_uptime_prospector
