FROM node:latest as builder

# Install app dependencies
COPY package.json yarn.lock ./

RUN yarn install

# Bundle app source
COPY . .

RUN yarn build

# Production
#FROM nginx:stable-alpine as production

#COPY --from=builder dist/* /var/www/html/

#EXPOSE 3000
#CMD [ "nginx", "-g", "daemon off;" ]

EXPOSE 3000
CMD [ "yarn", "preview", "--host"]
#CMD [ "yarn", "dev", "--host"]
