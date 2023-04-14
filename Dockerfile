# Use Node.js v14 as the base image
FROM node:18.16.0

# Create and set the working directory
WORKDIR /app

# Copy the application files to the container
COPY . .

# Install dependencies
RUN npm install

# Expose the port that the application is running on
EXPOSE 5173

# Start the application
CMD [ "npm", "run", "dev" ]