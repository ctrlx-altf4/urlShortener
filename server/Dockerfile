FROM node:12-alpine

ADD package.json /tmp/package.json

RUN rm -rf dist

RUN cd/tmp && npm install -q

RUN npm dedupe

#code base
ADD ./ /src
RUN rm -rf /src/node_modules && cp -a /tmp/node_modules /src/

#define working directory
WORKDIR /src

RUN npm run-script build

RUN npm install pm2 -g

EXPOSE 4000

#node cmd is run through env conul in envconsul-launch
CMD ["pm2-rutime", "process.json"]