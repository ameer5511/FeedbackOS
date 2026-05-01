# 🚀 FeedbackOS — AI-Powered Customer Feedback Intelligence Platform

## 🌐 Live Demo

Product: [https://feedbackos-ameer5511s-projects.vercel.app/](https://feedbackos-ameer5511s-projects.vercel.app/)

---

## 📌 Overview

FeedbackOS is a production-ready SaaS platform that transforms unstructured customer feedback into actionable product insights using AI.

It ingests feedback from multiple sources, processes it using embeddings and LLMs, and outputs themes, answers, and automated weekly insights.

---

## 🛠️ Tech Stack

![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green?logo=fastapi)
![Next.js](https://img.shields.io/badge/Next.js-Frontend-black?logo=next.js)
![Tailwind](https://img.shields.io/badge/TailwindCSS-UI-blue?logo=tailwindcss)
![Supabase](https://img.shields.io/badge/Supabase-Database-green?logo=supabase)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-DB-blue?logo=postgresql)
![Groq](https://img.shields.io/badge/Groq-LLM-orange)
![HuggingFace](https://img.shields.io/badge/HuggingFace-Embeddings-yellow?logo=huggingface)
![Render](https://img.shields.io/badge/Render-Backend_Hosting-purple?logo=render)
![Vercel](https://img.shields.io/badge/Vercel-Frontend_Hosting-black?logo=vercel)

---

## 🎯 Key Features

* Multi-source feedback ingestion (CSV, text, webhook)
* AI-based theme detection
* Semantic search using vector embeddings
* RAG-based chat interface
* Weekly AI-generated insights via email
* Multi-workspace SaaS architecture

---

## 🏗️ Architecture

```text
User Input
   ↓
FastAPI Backend
   ↓
Supabase Database
   ↓
HuggingFace Embeddings
   ↓
pgvector Search
   ↓
Groq LLM Processing
   ↓
Frontend Dashboard / Chat / Email
```

---
---

## 📸 Screenshots

### Page
![Page](./screenshots/page.png)

### Dashboard
![Dashboard](./screenshots/dashboard.png)

---

## 📂 Project Structure

```text
feedbackos/
│
├── backend/
│   ├── routers/
│   ├── services/
│   ├── models/
│   ├── db/
│   └── main.py
│
├── frontend/
│   ├── app/
│   └── components/
│
└── README.md
```

---

## 🔄 Core Workflow

* Ingest feedback
* Chunk and clean data
* Generate embeddings
* Store in vector DB
* Detect themes using LLM
* Enable Q&A via RAG
* Send weekly digest

---

## 🔐 License

```
Copyright (c) 2026 Ameer Muhammed

All rights reserved.

This repository contains proprietary software developed for a commercial SaaS product.

Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
```

---

## 💼 Commercial Intent

Designed as a scalable SaaS product for:

* SaaS founders
* Product managers
* Customer success teams
* Agencies managing multiple clients

---

## 🧠 Highlights

* End-to-end AI system (not just UI)
* Production-grade backend + async processing
* Real-world SaaS use case
* Vector DB + RAG implementation
* Fully deployed system

---

## 👨‍💻 Author

**Ameer Muhammed**
| Software engineer
| 🔗 LinkedIn: [https://www.linkedin.com/in/ameer-muhammed55/](https://www.linkedin.com/in/ameer-muhammed55/)

---

## ⭐ Final Note

This project demonstrates the ability to design, build, and deploy a full-scale AI-powered SaaS system using modern technologies and scalable architecture.


