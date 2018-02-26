FROM centos:7
LABEL maintainer "Matt Kimber <matt.kimber@collinsongroup.com>"

RUN yum install -y epel-release && \
    yum install -y nginx

COPY config/nginx.conf /etc/nginx/nginx.conf

WORKDIR /etc/nginx

EXPOSE 80

CMD ["nginx"]