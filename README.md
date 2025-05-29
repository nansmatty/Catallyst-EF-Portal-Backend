# 📝 Employee Feedback Portal – Backend

This is the backend service for the **Employee Feedback Portal**, a Catallyst assignment project. It provides RESTful APIs to submit, retrieve, categorize, and manage anonymous employee feedback.

Frontend is maintained in a separate repository.

---

## 🚀 Features

### 🧑‍💼 Employee

- Submit anonymous feedback
- Select feedback category: `Work Environment`, `Leadership`, `Growth`, or `Others`

### 🛠️ Admin

- View all submitted feedback
- Filter feedback by category
- Mark feedback as reviewed
- Delete feedback (optional)

---

## 🧪 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Environment**: `dotenv`
- **Dev Tools**: `nodemon`, `morgan`

---

## 📦 Project Structure

```
Directory structure:
└── nansmatty-catallyst-ef-portal-backend/
├── README.md
├── package.json
└── src/
├── app.js
├── server.js
├── config/
│ ├── dbConnect.js
│ └── index.js
├── controllers/
│ └── feedbackControllers.js
├── middlewares/
│ └── errorMiddleware.js
├── models/
│ └── FeedbackModel.js
├── routes/
│ └── feedbackRoutes.js
└── utils/
├── catchAsyncError.js
└── errorHandler.js
```

---

## 🌐 API Endpoints

Base URL: `http://localhost:<PORT>/api`

### Feedback Routes

| Method | Endpoint                    | Description                 |
| ------ | --------------------------- | --------------------------- |
| POST   | `/feedback`                 | Submit new feedback         |
| GET    | `/feedback`                 | Get all feedback            |
| GET    | `/feedback?category=Growth` | Filter feedback by category |
| PATCH  | `/feedback/:id/reviewed`    | Mark feedback as reviewed   |
| DELETE | `/feedback/:id`             | Delete feedback             |

---

## 📄 Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
```

---

## Clone the repository

```
git clone https://github.com/your-username/cattalyst_backend.git
cd cattalyst_backend
```

## Install Dependencies

```
npm install
```

## Create .env and fill in your MONGODB URL and others ENV Variables

## Run the server

```
npm run dev
```

The server should be up and running.
