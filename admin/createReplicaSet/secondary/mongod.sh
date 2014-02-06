#! /bin/sh
mkdir -p /srv/mongodb/secondary/data
mkdir -p /var/log/mongodb/secondary

/root/mongodb-linux-i686-2.4.8/bin/mongod --config secondary/mongod.conf