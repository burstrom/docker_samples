# Use latest node 10
FROM node:10-alpine

# ENV LAST_UPDATED 20181118T165400

# Copy source code:
COPY ./app /app

# Change working directory
WORKDIR /app

# Install dependencies
RUN npm install

# Expose frontend  port to the outside
EXPOSE 4200

# Launch application
CMD ["npm", "start"]
