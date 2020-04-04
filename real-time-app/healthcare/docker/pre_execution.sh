#!/bin/bash

function decode () {
  echo "$1" > temp
  cat temp | base64 -d > "$2" 
}