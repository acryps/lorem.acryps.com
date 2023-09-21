FROM node:12-slim

WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN cd page && npm install && cd ..
RUN npm run build

CMD [ "node", "index.js" ]