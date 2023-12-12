# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Clean the build context
RUN rm -rf /app/node_modules

# Copy package.json and package-lock.json to the container
COPY package*.json ./
    
# Install the app dependencies
RUN npm install

# Explicitly install supabase-js
RUN npm install @supabase/supabase-js

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 3001

# Define the command to run your app
CMD ["node", "index.js"]
