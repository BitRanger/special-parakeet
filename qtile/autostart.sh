#!/usr/bin/env bash

xset r rate 300 50

pipewire &
pipewire-pulse &
wireplumber &

emacs --daemon &
