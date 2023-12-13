# Microservices Repository

This repository contains all the microservices for the back-end.

## Setup

Clone the repository and run Docker Compose. All back-end services run in Docker containers.

## Local Development Installation

1. Clone the repository.
2. Navigate to the desired working folder.
3. Run `npm install` to install the npm packages for the specific microservice.

## Associated Services

- The [HZ-planner repository](https://github.com/example/hz-planner) is dedicated to the front-end.
- The database is hosted on [Supabase](https://supabase.io/).

## Current Ports

- Port 3000: API Gateway
- Port 3001: Courses
- Port 3002: Calendar

## Routes

- `/api/data`: Test the API Gateway
- `/courses`: Request data from the course table
- `/get-events`: Fetch important dates for the calendar