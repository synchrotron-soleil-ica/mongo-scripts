#! /bin/sh
mkdir -p /srv/mongodb/arbitrer/data
mkdir -p /var/log/mongodb/arbitrer

/root/mongodb-linux-i686-2.4.8/bin/mongod --config arbitrer/mongod.conf