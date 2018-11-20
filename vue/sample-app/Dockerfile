# Use latest node 10
FROM node:10-alpine

# ENV LAST_UPDATED 20181118T165400

# Copy source code:
COPY ./app /app

# Change working directory
WORKDIR /app

# Install dependencies
RUN npm install --quiet --global @vue/cli
RUN npm install

# Expose frontend  port to the outside
EXPOSE 8080

# Launch application
CMD ["npm", "run", "serve"]
