# RESTful API with Node.js, Express, and MySQL

## Setup Instructions

### Prerequisites
- Node.js
- Docker


### Installation
1. Clone the repository:
    ```bash
    
    
    ```

2. Setup environment variables:
    ```bash
    cp .env.example .env
    ```


4. The API will be available at `http://localhost:5000`.

### Endpoints
- **Auth**
  - `POST /api/auth/login`
  - `POST /api/auth/logout`
  - `POST /api/auth/refresh`
- **Users**
  - `POST /api/users`
  - `GET /api/users/:userId`
- **Questions**
  - `POST /api/questions`
  - `GET /api/questions/:questionId`
  - `GET /api/users/:userId/questions`

### Testing
To run tests:
```bash
npm run test
