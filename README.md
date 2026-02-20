# EU Quiz App

A full-stack political alignment quiz application for European Union elections. Users answer policy questions and discover which candidates best match their political views across multiple dimensions including economy, environment, immigration, and social issues.

**🌐 Live Demo:** [Coming Soon - Deploying on Render]

## 📸 Screenshots

_Add screenshots of your app here after deployment_

## ✨ Key Features

- **Multilingual Interface** - Supports Greek, English, and Turkish
- **Interactive Quiz System** - 21 questions covering diverse political topics
- **Smart Matching Algorithm** - Calculates compatibility with candidates based on weighted policy positions
- **Visual Results** - Clear breakdown of alignment by policy area
- **Candidate Portal** - Interface for candidates to submit their positions
- **Real-time Analytics** - Statistics dashboard for question responses and trends
- **Social Sharing** - Share results on social media platforms
- **Fully Responsive** - Mobile-first design for all devices

## 🛠️ Technology Stack

### Frontend

- **React 18** with Hooks
- **Redux Toolkit** - Global state management
- **React Router** - Navigation and routing
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **i18next** - Internationalization framework
- **Styled Components** - Component-level styling

### Backend

- **Node.js & Express** - RESTful API server
- **TypeScript** - Type-safe development
- **PostgreSQL** - Relational database
- **Drizzle ORM** - Type-safe database toolkit with migrations
- **CORS** - Secure cross-origin requests

### DevOps & Deployment

- **Docker** - Containerization
- **Vercel** - Frontend hosting
- **Render** - Backend and database hosting
- **Nginx** - Production web server

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd EUQuizApp
```

2. \*_Backend Setup_

```bash
cd EUQuizAppBackend
npm install

# Create .env file with your database credentials
echo "DATABASE_URL=postgresql://user:password@localhost:5432/euquiz" > .env
echo "PORT=3000" >> .env

# Run database migrations
npm run migrate

# Start backend server
npm run dev
```

3. **Frontend Setup**

```bash
cd ../EUQuizAppFrontend
npm install

# Update API endpoint in src/services/apiConfig.js if needed

# Start frontend dev server
npm run dev
```

4. **Access the application**

- Frontend: http://localhost:5173
- Backend: http://localhost:3000

### Docker Setup (Alternative)

```bash
# Run entire stack with Docker Compose
docker-compose up
```

## 📁 Project Structure

```
EUQuizApp/
├── EUQuizAppBackend/          # Express + TypeScript API
│   ├── src/
│   │   ├── schema/            # Database schemas
│   │   ├── index.ts           # Database connection
│   │   └── migrate.ts         # Migration runner
│   ├── routes/                # API endpoints
│   ├── drizzle/               # Database migrations
│   └── server.ts              # Express server setup
│
├── EUQuizAppFrontend/         # React + Vite application
│   ├── src/
│   │   ├── pages/             # Page components
│   │   ├── features/          # Feature modules (Redux slices)
│   │   ├── services/          # API service layer
│   │   ├── ui/                # Reusable UI components
│   │   └── utils/             # Helper functions
│   └── public/
│       └── locales/           # Translation files (el, en, tr)
│
└── docker-compose.yml         # Container orchestration
```

## 🔌 API Endpoints

| Method | Endpoint                  | Description                  |
| ------ | ------------------------- | ---------------------------- |
| GET    | `/getQuizData`            | Fetch all quiz questions     |
| POST   | `/insertUserAnswers`      | Submit user's quiz responses |
| GET    | `/getCandidates`          | Get all candidates           |
| POST   | `/insertCandidate`        | Add new candidate            |
| POST   | `/insertCandidateAnswers` | Submit candidate positions   |
| POST   | `/candidateCalculate`     | Calculate match percentages  |
| GET    | `/getQuestionStats`       | Get response statistics      |

## 🎯 How It Works

1. **User Takes Quiz** - Answers 13 questions on various policy topics
2. **Algorithm Processing** - Backend calculates weighted agreement scores
3. **Results Display** - Shows percentage match with each candidate
4. **Detailed Breakdown** - View alignment by specific policy areas
5. **Social Sharing** - Share results with custom graphics

## 🌍 Internationalization

The app uses i18next for translations with three supported languages:

- Greek (el)
- English (en)
- Turkish (tr)

Language detection is automatic based on browser settings, with manual switching available.

## 🔒 Environment Variables

### Backend (.env)

```
DATABASE_URL=postgresql://user:password@host:port/database
PORT=3000
```

### Frontend

Configure API endpoint in `src/services/apiConfig.js`

## 📊 Database Schema

- **questions** - Quiz questions with metadata
- **answers** - Possible answer choices
- **candidates** - Candidate profiles
- **candidateAnswers** - Candidate positions on questions
- **userAnswers** - Anonymous user responses
- **parties** - Political party information

## 🚢 Deployment

### Frontend (Vercel)

```bash
cd EUQuizAppFrontend
npx vercel
```

### Backend (Render)

1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Add PostgreSQL database
4. Set environment variables
5. Deploy

Detailed deployment instructions in respective folders.

## 🤝 Contributing

This is a portfolio project, but suggestions are welcome! Feel free to open issues or submit pull requests.

## 📝 License

ISC

## 👨‍💻 Author

**Stylianos**  
ECE Student | Full-Stack Developer  
_Built for portfolio and civic engagement_

---

**Note:** This project was developed as a practical application for European election voter engagement and as a demonstration of full-stack development capabilities.
