FROM collinsongroup/nodejs:8.10.0
LABEL maintainer "Matt Kimber <matt.kimber@collinsongroup.com>"

COPY src /usr/local/bin/ornery

WORKDIR /usr/local/bin/ornery

RUN rm -rf node_modules && npm install

EXPOSE 3000

ENTRYPOINT ["node", "/usr/local/bin/ornery"]
