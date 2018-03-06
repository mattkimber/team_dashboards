#!/bin/bash
read -p "Please enter a passphrase: " KEYGEN_PASSPHRASE
echo "Your passphrase is: $KEYGEN_PASSPHRASE"
echo "Do not forget it!"
ssh-keygen -t rsa -N "$KEYGEN_PASSPHRASE" -f ./id_rsa
ssh-keygen -e -m pem -f ./id_rsa.pub > ./id_rsa.pub.pem

# Remove any existing secrets
if [ $(docker secret ls | grep dashboard_private_key | wc -l) -ne 0 ];
    then docker secret rm dashboard_private_key;
fi

if [ $(docker secret ls | grep dashboard_passphrase | wc -l) -ne 0 ];
    then docker secret rm dashboard_passphrase;
fi

if [ $(docker secret ls | grep dashboard_public_key | wc -l) -ne 0 ];
    then docker secret rm dashboard_public_key;
fi

docker secret create dashboard_private_key id_rsa
echo $KEYGEN_PASSPHRASE | docker secret create dashboard_passphrase -
docker secret create dashboard_public_key id_rsa.pub.pem
rm id_rsa id_rsa.pub id_rsa.pub.pem
