#!/bin/bash

# PACKAGE - VERSION
VERSION_DOCKER_CE=17.09.0~ce-0~ubuntu
VERSION_DOCKER_COMPOSE=1.17.0
VERSION_DOCKER_MACHINE=v0.13.0

# PACKAGE - DEFINITION
apt update
apt install -y \
  apt-transport-https \
  ca-certificates \
  curl \
  software-properties-common