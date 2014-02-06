#! /bin/sh

echo "Launching MongoDB Primary"
./primary/mongod.sh

echo "Launching MongoDB Secondary"
./secondary/mongod.sh

echo "Launching MongoDB Arbitrer"
./arbitrer/mongod.sh
