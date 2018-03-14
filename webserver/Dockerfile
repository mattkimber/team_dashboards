FROM centos:7
LABEL maintainer "Matt Kimber <matt.kimber@collinsongroup.com>"

RUN yum install -y epel-release && \
    yum install -y nginx

COPY config/nginx.conf /etc/nginx/nginx.conf
COPY bin/run_nginx.sh /etc/nginx

WORKDIR /etc/nginx

EXPOSE 80

CMD ["/etc/nginx/run_nginx.sh"]
