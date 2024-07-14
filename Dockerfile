FROM node:alpine as angular
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

#with apache server
# FROM httpd:alpine3.20
# WORKDIR /usr/local/apache2/htdocs
# COPY --from=angular app/dist/todo-frontend/browser .

#with nginx serve
#for this I am also adding a nginx.conf file with some changes
FROM nginx:latest AS ngi
COPY --from=angular app/dist/todo-frontend/browser /usr/share/nginx/html
COPY --from=angular app/nginx.conf  /etc/nginx/conf.d/default.conf







