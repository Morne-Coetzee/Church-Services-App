# Use an official Node runtime as a parent image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy the rest of the application files
COPY . .

# Build the application
RUN ng build

# Expose port
EXPOSE 4200

# Run the application
CMD ["ng", "serve", "--host", "0.0.0.0"]