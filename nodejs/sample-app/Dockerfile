# Use latest node 10
FROM node:10-alpine

# ENV LAST_UPDATED 20181118T165400

# Copy source code:
COPY ./src /src

# Change working directory
WORKDIR /src

# Install dependencies
RUN npm install

# Expose frontend  port to the outside
EXPOSE 8000

# Launch application
CMD ["npm", "start"]
