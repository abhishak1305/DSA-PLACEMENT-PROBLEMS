FROM nginx:alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy your portfolio files into nginx folder
COPY . /usr/share/nginx/html

EXPOSE 80