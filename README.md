# Answer.Ai Backend

This repository contains the backend for the Answer.Ai project. The backend uses the   OpenAi- API for content moderation and language generation.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [Docker Setup](#docker-setup)
- [Database Initialization](#database-initialization)
- [Testing](#testing)


## Requirements

- Node.js v14 or higher
- Docker (optional, for containerization)
- Mysql

## Installation

1. Clone the repository:

    ```bash
    git clone -  https://github.com/ajayak5235/Ajay-Singh-AnswerAi-Backend.git
    cd answer-ai-backend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

## Configuration

1. Create a `.env` file in the root directory and add the following environment variables:

    ```plaintext
    OPENAI_API_KEY=OPENAI_API_KEY
    ```

    

## Running the Project

1. To start the project, run:

    ```bash
    node server.js
    or
    node test1.js // for my testing 
    ```

## Docker Setup

To run the project inside a Docker container:

1. Build the Docker image:

    ```bash
    docker build -t answer-ai-backend .
    ```

    ```

## Database Initialization

If your project requires a database Mysql, 



The API will be available at http://localhost:5000.

Endpoints
Auth
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/refresh
Users
POST /api/users
GET /api/users/:userId
Questions
POST /api/questions
GET /api/questions/:questionId
GET /api/users/:userId/questions


## Testing

To run the tests for the project, use the following command:

```bash
npm test




