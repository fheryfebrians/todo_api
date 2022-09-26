FROM mysql:latest

EXPOSE 3306

# ENV MYSQL_ROOT_PASSWORD=secret

COPY ./initdb.sql /docker-entrypoint-initdb.d
