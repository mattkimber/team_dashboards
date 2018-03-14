# Team Dashboard System

The solution uses Docker containers. A sample Docker Compose file is included in the `/compose` directory
to get things up and running.

## Building

You can build using the Compose file. Navigate to the `/compose` directory and run it thusly:

```
cd compose
docker-compose build
```

## Running

Docker Swarm is required to run the service stack, as it relies on Docker's secret management.
In order to set up a basic Swarm on a local VM (assuming a recent version of Docker CE), run
`docker swarm init`. If you have more than one network interface, you'll need to tell it the
advertise address using `docker swarm init --advertise-addr x.x.x.x.` instead.

Before you run the stack, you will need to give it a public/private keypair for encryption
purposes. There is a script provided in the `compose` directory for this purpose. You can
run it using `./keygen.sh`. It will ask you for a pass phrase to provide 2 factor auth on
the private key.

(In most instances, you will not need the pass phrase again once the dashboard has been set up)

If you wish to supply your own private/public key pairs, the contents of this script file
will show how to add them.

Once you have set up the swarm and the secrets, deploy the stack:

`docker stack deploy --compose-file=docker-compose.yml dashboard`

This will either set up the stack for the first time or update it, depending on whether
you already have the stack running on this server.

## Accessing

There are multiple URLs available behind the main dashboard:

* `/kibana` - access Kibana for setting up custom dashboards
* `/config` - configuration panel

## Notes:

You will need to up the value for `vm.max_map_count` in order to run ElasticSearch. You can use
the following command:

`sysctl -w vm.max_map_count=262144`

Or change the value in `/etc/sysctl.conf`

## Getting Started

The stack comes with its own demo service, **ornery**, that you can use to explore creating dashboards.

To set up some sample endpoints, run the following `curl` requests:

```
curl --request PUT \
  --url http://localhost/api/endpoint/demo1 \
  --header 'content-type: application/json' \
  --data '{\n	"name": "/flaky",\n	"request": {\n "verb": "GET",\n		"uri": "http://ornery:3000/"\n }\n}'
```

```
curl --request PUT \
  --url http://localhost/api/endpoint/demo2 \
  --header 'content-type: application/json' \
  --data '{\n	"name": "/reliable",\n	"request": {\n "verb": "GET",\n		"uri": "http://ornery:3000/"\n }\n}'
```