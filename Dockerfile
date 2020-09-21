FROM webdevops/php-apache:7.3
COPY ./dist/ /app
WORKDIR /app/
