#! /bin/sh
mkdir -p /srv/mongodb/primary/data
mkdir -p /var/log/mongodb/primary

/root/mongodb-linux-i686-2.4.8/bin/mongod --config primary/mongod.conf