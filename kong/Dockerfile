FROM kong:3.4.0-ubuntu
#ENV KONG_PLUGINS bundled, jwt-claims-headers, http-to-https-redirect
ENV KONG_PLUGINS bundled, jwt-to-header
USER root

#RUN luarocks install kong-plugin-jwt-claims-to-headers
## RUN luarocks install kong-plugin-http-to-https-redirect
#RUN luarocks install https://github.com/binhbt/kong-plugin-jwt-claims-headers/raw/master/kong-plugin-jwt-claims-headers-1.0-2.all.rock
#RUN  luarocks install https://github.com/binhbt/kong-http-to-https-redirect/raw/master/kong-plugin-http-to-https-redirect-1.0-0.all.rock
COPY kong/custom-plugins /custom-plugins
RUN  luarocks install /custom-plugins/kong-jwt2header-1.0-3.all.rock
USER kong

COPY kong/kong.conf.default /etc/kong/kong.conf
RUN mkdir -p /tmp
VOLUME ["/tmp"]
# ENTRYPOINT ["bash", "/entrypoint.sh"]
COPY kong/checklog.sh /usr/local/bin/checklog
COPY kong/cron.sh /cron.sh
CMD /cron.sh
CMD ["kong", "docker-start"]
