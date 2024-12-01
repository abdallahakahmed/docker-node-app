FROM node:16 as base


FROM base as development

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
#This is just for documentation
EXPOSE 4000
CMD [ "npm", "run", "start-dev" ]

FROM base as production

WORKDIR /app
COPY package.json .
RUN npm install --only=production
COPY . .
#This is just for documentation
EXPOSE 4000
CMD [ "npm", "start" ]