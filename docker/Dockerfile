# Base Image
FROM node:18

# Workdir
WORKDIR /app

# Copy app source
COPY app/ /app/

# Install dependencies for all services
RUN for d in */ ; do \
      (cd "$d" && npm install); \
    done

# Expose service ports
EXPOSE 4001 4002 4003 4004

# Run all services together
CMD for d in */ ; do \
      (cd "$d" && npm start &) ; \
    done && tail -f /dev/null

