# Tax Calculation Portal

## 📌 Overview
This is a **Full Stack Tax Calculation Portal** where users can enter their income details, and the system calculates their estimated tax liability based on Indian Income Tax laws (FY 2024-25). The portal features a modern UI, RESTful API, and an optional database for storing tax records.

## 🚀 Features
### 🖥️ Frontend (React.js + Tailwind CSS)
- **Form Inputs:**
  - Annual Income
  - Investments (80C, 80D, etc.)
  - Other Deductions (HRA, LTA, etc.)
  - Income from Other Sources
- **Calculate Tax Button**
- **Results Section:**
  - Taxable Income after deductions
  - Tax Payable (as per Indian tax slabs)

### 🏗️ Backend (Node.js + Express.js)
- REST API to process income details and compute tax
- Indian Income Tax Slabs (FY 2024-25) implemented
- Proper error handling & validation

### 🗄️ Database (MongoDB )
- Store users' income details & tax calculations
- Allow users to retrieve past tax records

## 🛠️ Tech Stack
- 🖥️ **Frontend:** ![React.js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
- 🏗️ **Backend:** ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
- 🗄️ **Database:** ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
- 🚀 **Deployment:** ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) ![Railway](https://img.shields.io/badge/Railway-2D2D2D?style=for-the-badge&logo=railway&logoColor=white)

## 📂 Folder Structure
```
📁 tax-calculation-portal
├── 📁 frontend (React.js + Tailwind CSS)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
│
├── 📁 backend (Node.js + Express.js)
│   ├── src/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   ├── package.json
│   └── README.md
│
└── README.md (Root Project File)
```

## ⚙️ Setup Instructions
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/tax-calculation-portal.git
cd tax-calculation-portal
```

### 2️⃣ Backend Setup
```sh
cd backend
npm install
cp .env.example .env   # Add your environment variables
npm run start  # Starts the server
```

### 3️⃣ Frontend Setup
```sh
cd ../frontend
npm install
npm run dev  # Runs the React App
```

## 🌍 API Endpoints
### 1️⃣ Calculate Tax
**Endpoint:** `POST /api/tax/calculate`
```json
{
  "annualIncome": 800000,
  "investments": 150000,
  "otherDeductions": 50000,
  "incomeFromOtherSources": 20000
}
```
**Response:**
```json
{
  "taxableIncome": 630000,
  "taxPayable": 38500,
}
```

### 2️⃣ Fetch Past Tax Records (Optional)
**Endpoint:** `GET /api/tax/history`
**Response:**
```json
[
  {
    "annualIncome": 800000,
    "investments": 150000,
    "otherDeductions": 50000,
    "incomeFromOtherSources": 20000,
    "taxPaid": 38500,
    "taxableIncome": 630000
  }
]
```

## 🚀 Deployment Links
- **Frontend:** [Vercel Deployment](https://tax-calculation-portal-rl.vercel.app/)
- **Backend:** [Railway Deployment](https://tax-calculation-portal-production.up.railway.app/api/tax)



---

🎯 **Next Steps:** Feel free to fork the repo, enhance features, and contribute! Happy Coding! 🚀

