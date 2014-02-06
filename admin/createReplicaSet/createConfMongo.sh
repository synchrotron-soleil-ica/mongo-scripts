#! /bin/sh

#Connnect to MongoDB Primary and initiate Mongo shell script for replica set
/root/mongodb-linux-i686-2.4.8/bin/mongo --host 172.16.5.7:27001 --shell myRsInitiate.js