#!/bin/bash

yen=$1
day=$(date)

echo $yen $day  >> out/recode.txt
cat out/recode.txt
