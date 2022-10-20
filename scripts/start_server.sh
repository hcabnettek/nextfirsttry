#!/bin/bash

# navigate to app folder
cd /home/ec2-user/nodeapps/nextjs1

echo "Starting Application"
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

nvm use --lts
/home/ec2-user/.nvm/versions/node/v16.18.0/bin/npm install
/home/ec2-user/.nvm/versions/node/v16.18.0/bin/npm run build
/home/ec2-user/.nvm/versions/node/v16.18.0/bin/npm run start
