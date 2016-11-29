#!/bin/bash

# Allows us to read user input below, assigns stdin to keyboard
exec < /dev/tty

# Check if the user wants to deploy static files to gh-pages branch
read -p "Deploy to gh-pages (y/n)? " -n 1 -r
echo    # (optional) move to a new line
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
  exit # End script if user does not want to deploy
fi

# Push changes to gh-pages branch on remote
git push origin `git subtree split --prefix build master`:gh-pages --no-verify
