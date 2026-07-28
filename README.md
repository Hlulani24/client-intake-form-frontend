# Client Application Intake Form

A full-stack web application that digitizes a paper-based client intake process I encountered firsthand while working in retail sales at Vodacom. Built as a personal project to learn React, while solving a real, observed business inefficiency — long, error-prone paper forms that had to be manually filed and re-entered into internal systems.

**Live demo:** [client-intake-form-frontend.vercel.app](https://client-intake-form-frontend.vercel.app)

## Why I built this

I worked as a sales consultant at Vodacom, registering customers for contract phones and services using paper-based application forms — often out in the field, across various locations, not just in-store. The process involved manually capturing customer, employment, banking, and surety details on paper, which then had to be filed and re-entered into internal systems later.

Having lived that process firsthand, I rebuilt it as a digital, multi-step web application — structured, validated, and instantly accessible through a dashboard, instead of relying on paper handling and manual re-capturing.

It's also my first project built with React — I came from a PHP/MySQL background, and used this as a hands-on way to learn component-based frontend development, state management, and connecting a React frontend to a real backend and database.

## Features

- Multi-section digital intake form (Customer Details, Relative/Next of Kin, Employment, Payment/Debit Order, Suretyship, Declaration)
- Real-time form state management with React
- Backend API (Node.js/Express) with MySQL database storage
- Admin dashboard to view all submitted applications in a live, searchable table
- Fully responsive — usable on both desktop and mobile
- Deployed and live (not just a local demo)

## Tech Stack

**Frontend:** React, Vite, CSS
**Backend:** Node.js, Express
**Database:** MySQL
**Deployment:** Vercel (frontend), Render (backend)

## What I learned building this

- Core React concepts: components, props, `useState`, `useEffect`, conditional rendering
- Connecting a frontend to a REST API and handling asynchronous data fetching
- Structuring a multi-step form across multiple components
- Debugging real deployment issues: build failures, CORS, environment configuration, and mobile responsiveness
- Git/GitHub workflow: branching, committing, and managing a two-repo (frontend/backend) project

## Running locally

**Frontend:**
\`\`\`bash
git clone https://github.com/Hlulani24/client-intake-form-frontend.git
cd client-intake-form-frontend
npm install
npm run dev
\`\`\`

**Backend:**
\`\`\`bash
git clone https://github.com/Hlulani24/client-intake-form-backend.git
cd client-intake-form-backend
npm install
# create a .env file with your DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME
node server.js
\`\`\`

## Author

**Hlulani Maluleke**
[GitHub](https://github.com/Hlulani24) · [Portfolio](https://hlulani05.github.io/portfolio)
