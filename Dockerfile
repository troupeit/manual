# Dockerfile for TroupeIT Documentation Site
# Uses nginx to serve the Docusaurus static build output
#
# Build: docker build -t troupeit-docs .
# Run locally: docker run -p 4000:80 troupeit-docs

FROM nginx:alpine

# Copy the Docusaurus build output to nginx html directory
COPY build /usr/share/nginx/html

# Copy custom nginx configuration if present
COPY config/server.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for nginx
EXPOSE 80

# nginx runs in foreground by default in this image
CMD ["nginx", "-g", "daemon off;"]
