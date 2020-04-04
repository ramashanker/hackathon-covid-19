FROM anapsix/alpine-java:8_server-jre_unlimited
COPY docker-entrypoint.sh /
COPY healthcare.jar /
RUN /bin/chmod +x docker-entrypoint.sh
EXPOSE 8080
CMD ["./docker-entrypoint.sh"]
