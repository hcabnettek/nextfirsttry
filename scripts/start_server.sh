#!/bin/bash

# navigate to app folder
cd /home/ec2-user/nodeapps/nextjs1

echo "Starting Application 3"
export NVM_DIR="/home/ec2-user/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

echo $NVM_DIR
nvm use --lts
npm install
npm run build

