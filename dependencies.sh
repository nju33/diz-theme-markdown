#!/bin/bash

set -eu

stylepath='./src/styles/modules'

normalize='https://raw.githubusercontent.com/necolas/normalize.css/master/normalize.css'

if [ ! -e ${stylepath}/normalize.css ]; then
  wget $normalize -P $stylepath
fi
