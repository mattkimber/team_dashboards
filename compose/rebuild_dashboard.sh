#!/bin/bash
cd ../dashboard/
./build.sh
cd ../compose/
./redeploy.sh dashboard_dashboard
