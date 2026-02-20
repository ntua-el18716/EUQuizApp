# EU Quiz App

A full-stack political alignment quiz for the EU elections of 2024 in Cyprus. Users can find which parties and candidates(the ones who voluntarily took the quiz) match their views. Available in Greek, English, Turkish.

**Live Demo:** [https://eu-quiz-app.vercel.app](https://eu-quiz-app.vercel.app)

## Tech Stack

**Frontend:** React 18, Vite, Redux, Tailwind CSS, i18next

**Backend:** Node.js, Express, TypeScript, PostgreSQL, Drizzle ORM

**Hosting:** Vercel (frontend), Render (backend + database)

## Setup

### Backend

```bash
cd EUQuizAppBackend
npm install
npm start
```

### Frontend

```bash
cd EUQuizAppFrontend
npm install
npm run dev
```

```bash
# Run entire stack with Docker Compose
docker-compose up
```
