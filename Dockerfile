FROM node:20-alpine
# Set environment variables
# Set the working directory

WORKDIR /app
# Copy the rest of the application code
COPY . .
RUN npx prisma generate
# Build the application
RUN npm run build
# Expose the port the app runs on
EXPOSE 3000
# Start the application
CMD ["npm", "run", "start"]


