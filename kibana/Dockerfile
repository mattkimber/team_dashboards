FROM centos:7
LABEL maintainer "Matt Kimber <matt.kimber@collinsongroup.com>"

RUN yum update -y && yum install -y fontconfig freetype && yum clean all

WORKDIR /usr/share/kibana

RUN curl -Ls https://artifacts.elastic.co/downloads/kibana/kibana-6.2.2-linux-x86_64.tar.gz  | tar --strip-components=1 -zxf - && \
	ln -s /usr/share/kibana /opt/kibana && \
	groupadd --gid 1000 kibana && \
	useradd --uid 1000 --gid 1000 --home-dir /usr/share/kibana --no-create-home kibana

COPY config/kibana.yml /usr/share/kibana/config/kibana.yml
COPY bin/kibana-docker /usr/local/bin

ENV ELASTIC_CONTAINER true
ENV PATH=/usr/share/kibana/bin:$PATH

EXPOSE 5601

USER kibana

CMD ["/bin/bash", "/usr/local/bin/kibana-docker"]

