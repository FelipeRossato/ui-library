#!/bin/bash

set -e

echo "Loading environment variables..."

if [ -f .env ]; then
  export $(cat .env | xargs)
  
  echo "Loaded environment variables:"
  
  cat .env | cut -d '=' -f 1
fi

echo "Installing dependencies..."

npm install

echo "Building Storybook..."

npm run build-storybook

echo "Deploying to Netlify..."

netlify deploy --dir=storybook-static --prod --auth "$NETLIFY_AUTH_TOKEN"

echo "Deployment successful!"
