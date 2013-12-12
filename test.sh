#!/bin/bash
if [ "$1" == ci ]; then
  testem ci --file ".mimosa\testemRequire\testem.json"
else
  testem --file ".mimosa\testemRequire\testem.json"
fi