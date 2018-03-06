FROM collinsongroup/nodejs:8.9.4
LABEL maintainer "Matt Kimber <matt.kimber@collinsongroup.com>"

COPY src /usr/local/bin/api

WORKDIR /usr/local/bin/api

RUN rm -rf node_modules && npm install

EXPOSE 3000

CMD ["node", "/usr/local/bin/api"]
