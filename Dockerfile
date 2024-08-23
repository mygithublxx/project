FROM 192.168.1.169:8281/common/nginx:latest
MAINTAINER zhen.liu@goodwe.com

COPY run.sh /opt/
RUN chmod +x /opt/run.sh
COPY build /usr/share/nginx/html
COPY umd /usr/share/nginx/html/static/web-business-components/
CMD /opt/run.sh
