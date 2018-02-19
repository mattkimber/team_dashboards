# Team Dashboard System

The solution uses Docker containers. A sample Docker Compose file is included in the `/compose` directory
to get things up and running.

## Building

You can build using the Compose file. Navigate to the `/compose` directory and run it thusly:

```
cd compose
docker-compose build
```

## Notes:

You will need to up the value for `vm.max_map_count` in order to run ElasticSearch. You can use
the following command:

`sysctl -w vm.max_map_count=262144`

Or change the value in `/etc/sysctl.conf`
