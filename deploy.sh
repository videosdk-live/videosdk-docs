#!/bin/bash

npm run build:zip 

scp docusaurus.zip lin_zn-prod:/home/zujo/zn-docs-website 

ssh lin_zn-prod <<EOF
cd zn-docs-website
./rm-unzip-rm.sh
EOF
