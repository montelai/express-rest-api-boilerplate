FROM node:12-alpine3.10
# maintainer details
MAINTAINER montelai "montelai"

ARG APP_NAME
ENV APP_NAME ${APP_NAME}
COPY . /root/${APP_NAME}
RUN ["npm", "start"]