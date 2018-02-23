# Dockerfile based on the ElasticSearch docker file.
# https://github.com/elastic/elasticsearch-docker/blob/master/templates/Dockerfile.j2

# Bootstrap container to prep Elastic Search files
FROM centos:7 AS prepare_elastic_search

ENV PATH /usr/share/elasticsearch/bin:$PATH
ENV JAVA_HOME /usr/lib/jvm/jre-1.8.0-openjdk

RUN yum install -y java-1.8.0-openjdk-headless unzip which && \
		groupadd -g 1000 elasticsearch && \
		adduser -u 1000 -g 1000 -d /usr/share/elasticsearch elasticsearch

WORKDIR /usr/share/elasticsearch

USER 1000

RUN curl -fsSL https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-6.2.2.tar.gz | \
		tar zx --strip-components=1 && \
		set -ex && for ESDIR in config data logs; do \
			mkdir -p "$ESDIR"; \
		done

USER 0

RUN chown -R elasticsearch:0 . && \
		chmod -R g=u /usr/share/elasticsearch

# Build the Elastic Search container

FROM centos:7
LABEL maintainer "Matt Kimber <matt.kimber@collinsongroup.com>"

ENV ELASTIC_CONTAINER true
ENV PATH /usr/share/elasticsearch/bin:$PATH
ENV JAVA_HOME /usr/lib/jvm/jre-1.8.0-openjdk

RUN yum update -y && \
		yum install -y nc java-1.8.0-openjdk-headless unzip wget which && \
		yum clean all && \
		groupadd -g 1000 elasticsearch && \
		adduser -u 1000 -g 1000 -G 0 -d /usr/share/elasticsearch elasticsearch && \
		chmod 0775 /usr/share/elasticsearch && \
		chgrp 0 /usr/share/elasticsearch

WORKDIR /usr/share/elasticsearch

COPY --from=prepare_elastic_search --chown=1000:0 /usr/share/elasticsearch /usr/share/elasticsearch

COPY --chown=1000:0 bin/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh

RUN echo "network.host: _eth0_" >> /usr/share/elasticsearch/config/elasticsearch.yml

RUN chgrp 0 /usr/local/bin/docker-entrypoint.sh && \
		chmod g=u /etc/passwd && \
		chmod 0775 /usr/local/bin/docker-entrypoint.sh

EXPOSE 9200 9300

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]

CMD ["eswrapper"]


