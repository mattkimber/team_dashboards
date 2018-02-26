FROM centos:7
LABEL maintainer "Matt Kimber <matt.kimber@collinsongroup.com>"

RUN groupadd --gid 1000 node && \
		useradd --uid 1000 --gid node --shell /bin/bash --create-home node

RUN RPM_FILE=$(mktemp) && \ 
		curl -sL -o '${RPM_FILE}' https://rpm.nodesource.com/pub_8.x/el/7/x86_64/nodejs-8.9.4-1nodesource.x86_64.rpm && \
		rpm -i --nosignature --force '${RPM_FILE}' && \
		rm -f '${RPM_FILE}'

CMD ["node"]

