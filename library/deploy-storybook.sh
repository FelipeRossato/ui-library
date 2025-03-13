#!/bin/bash

# Exit on error
set -e

echo "Installing dependencies..."

npm install

echo "Building Storybook..."

npm run build-storybook

echo "Deploying to Netlify..."

netlify deploy --dir=storybook-static --prod

echo "Deployment successful!"
