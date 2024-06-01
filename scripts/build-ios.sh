#!/bin/sh

echo "Initiating copy from habit-tracker folder to cordova folder"

cp -R ~/Documents/coding-practice/habit-tracker/src ~/Documents/coding-practice/cordova-test/habit-tracker-beta

echo "Copied src"
cp -R ~/Documents/coding-practice/habit-tracker/public ~/Documents/coding-practice/cordova-test/habit-tracker-beta

echo "Copied public"
cd ~/Documents/coding-practice/cordova-test/habit-tracker-beta && npm install && cordova build ios

echo "Done!"
