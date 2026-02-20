# EU Quiz App

A full-stack web application that helps users find their political alignment with European Union election candidates based on policy positions and values.

## 🎯 Features

- **Multilingual Support**: Available in Greek, English, and Turkish using i18next
- **Interactive Quiz**: 13+ questions covering various political aspects (economy, environment, immigration, etc.)
- **Results Visualization**: Match percentage with candidates, detailed breakdown by policy area
- **Candidate Management**: Admin interface for candidates to submit their positions
- **Analytics Dashboard**: Real-time statistics on user responses and trends
- **Social Sharing**: Share results on social media platforms
- **Responsive Design**: Mobile-first design with Tailwind CSS

## 🛠️ Tech Stack

### Frontend

- **React 18** - UI library
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **i18next** - Internationalization
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Styled Components** - Component styling

### Backend

- **Node.js & Express** - RESTful API server
- **TypeScript** - Type safety
- **PostgreSQL** - Relational database
- **Drizzle ORM** - Database ORM with migrations
- **CORS** - Cross-origin resource sharing

### DevOps

- **Docker** - Containerization
- **Heroku/Vercel** - Cloud deployment
- **Nginx** - Production web server

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- npm or yarn

### Backend Setup

```bash
cd EUQuizAppBackend
npm install

# Configure environment variables
echo "DATABASE_URL=postgresql://user:password@localhost:5432/euquiz" > .env
echo "PORT=3000" >> .env

# Run database migrations
npm run migrate

# Start development server
npm run dev
```

### Frontend Setup

```bash
cd EUQuizAppFrontend
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to view the application.

### Docker Setup

```bash
# Run both frontend and backend
docker-compose up
```

## 📦 Available Scripts

### Backend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run migrate` - Run database migrations
- `npm run generate-migration` - Generate new migration

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
EUQuizAppBackend/
├── src/
│   ├── schema/        # Database schemas
│   └── migrate.ts     # Migration runner
├── routes/            # API endpoints
├── drizzle/           # Database migrations
└── server.ts          # Express server

EUQuizAppFrontend/
├── src/
│   ├── pages/         # Page components
│   ├── features/      # Feature modules
│   ├── services/      # API services
│   ├── ui/            # Reusable UI components
│   └── data/          # Static data
└── public/
    └── locales/       # Translation files
```

## 🌐 API Endpoints

- `GET /api/questions` - Fetch quiz questions
- `POST /api/user-answers` - Submit user answers
- `GET /api/candidates` - Get all candidates
- `POST /api/candidate-answers` - Submit candidate positions
- `GET /api/calculate` - Calculate match percentages
- `GET /api/stats` - Get question statistics

## 🎨 Key Features Implementation

### Multilingual Support

Uses i18next with language detection and HTTP backend for loading translations dynamically.

### Political Matching Algorithm

Calculates compatibility scores based on weighted agreement across multiple policy dimensions.

### State Management

Redux Toolkit manages global state for quiz progress, user answers, and results.

## 📄 License

ISC

## 👨‍💻 Author

Stylianos - Full-stack Developer
