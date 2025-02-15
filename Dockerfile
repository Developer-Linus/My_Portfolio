# Use an official Node.js runtime as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of application code
COPY . ./

# Build the project
RUN npm run build

# Expose the app my app runs on (vite by default runs on 5173)
EXPOSE 5173

# Command to run the application
CMD [ "npm", "run", "preview", "--", "--host", "0.0.0.0", "--open=false" ]



