FROM ubuntu:20.04
RUN apt-get update
RUN apt-get upgrade -y

# Install Node.js 14.x
RUN apt-get install curl -y
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

# Install git
RUN apt-get install git -y