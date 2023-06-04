FROM node:latest as builder

# Install app dependencies
#COPY package.json yarn.lock ./

# Bundle app source
WORKDIR /app
#COPY . .

#RUN yarn install

#RUN yarn build

# Production
#FROM nginx:stable-alpine as production

#COPY --from=builder dist/* /var/www/html/

#EXPOSE 3000
#CMD [ "nginx", "-g", "daemon off;" ]

EXPOSE 3000
#CMD [ "yarn", "preview", "--host"]
CMD [ "bash", "-c", "yarn install; yarn dev --host"]
