# REST API Starter - Node.js + TypeScript + Express

A clean, well-structured REST API starter template built with Node.js, TypeScript, and Express.js.

## Features

- ✅ **TypeScript** - Full type safety and modern JavaScript features
- ✅ **Express.js** - Fast, unopinionated web framework
- ✅ **RESTful API** - Standard HTTP methods and status codes
- ✅ **Input Validation** - Request validation middleware
- ✅ **Error Handling** - Comprehensive error handling and logging
- ✅ **Security** - CORS, Helmet security headers
- ✅ **Code Quality** - ESLint, Prettier configuration
- ✅ **Modular Structure** - Clean separation of concerns

## Project Structure

```
src/
├── app.ts                 # Main application entry point
├── handlers/              # Request handlers (business logic)
│   └── transactions.ts    # Transaction handlers
├── libs/                  # Utility libraries
│   ├── enum.ts           # Enums and constants
│   ├── helper.ts         # Helper functions
│   └── types.ts          # TypeScript interfaces
├── middleware/            # Custom middleware
│   └── validation.ts     # Input validation middleware
└── routes/               # Route definitions
    ├── index.ts          # Main router
    └── transactions.ts   # Transaction routes
```

## API Endpoints

### Transactions

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/transactions` | Get all transactions (with pagination, filtering, sorting) |
| GET | `/api/transactions/:id` | Get transaction by ID |
| POST | `/api/transactions` | Create new transaction |
| PUT | `/api/transactions/:id` | Update transaction |
| DELETE | `/api/transactions/:id` | Delete transaction |

### Query Parameters (GET /api/transactions)

- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `type` - Filter by type: `income` or `expense`
- `sortBy` - Sort field: `date`, `amount`, `createdAt` (default: `date`)
- `sortOrder` - Sort order: `asc` or `desc` (default: `desc`)

### Request/Response Format

All responses follow this standard format:

```json
{
  "status": true,
  "message": "success",
  "data": { ... }
}
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The server will start at `http://localhost:3000`

### Production

Build the project:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier
- `npm run clean` - Remove build directory

## Example Usage

### Create a Transaction

```bash
curl -X POST http://localhost:3000/api/transactions \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 1000,
    "description": "Salary payment",
    "type": "income"
  }'
```

### Get All Transactions

```bash
curl http://localhost:3000/api/transactions?page=1&limit=10&type=income
```

### Update a Transaction

```bash
curl -X PUT http://localhost:3000/api/transactions/1 \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 1200,
    "description": "Updated salary payment"
  }'
```

### Delete a Transaction

```bash
curl -X DELETE http://localhost:3000/api/transactions/1
```

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=development
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001
```

## Contributing

1. Follow the existing code style
2. Add proper TypeScript types
3. Include error handling
4. Write clear commit messages
5. Test your changes

## License

ISC
