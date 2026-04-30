# 🚀 Digital Resume - Professional Portfolio

A dynamic, responsive web application built to showcase my professional journey, technical expertise, and personal projects. This self-built portfolio serves as a comprehensive digital resume designed for recruiters and collaborators.

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Setup & Installation](#-setup--installation)
- [Screenshots](#-screenshots)

---

## ✨ Features
This application provides a modularized view of my professional profile, including:
*   **Personal Profile:** A high-level overview and professional "elevator pitch."
*   **Experience:** Detailed timeline of professional roles and responsibilities.
*   **Projects:** A dedicated showcase for both professional and self-led projects.
*   **Skills:** Technical proficiency in .NET, Angular, and SQL.
*   **Education:** Academic background and qualifications.
*   **Certifications:** List of professional certifications and achievements.
*   **Interactive UI:** Seamless navigation with Angular Routing and dynamic filtering.

## 🛠 Tech Stack
*   **Frontend:** Angular 18/21 (Standalone Components, Signals, Router)
*   **Styling:** Bootstrap 5 & Custom CSS for a modern, clean look.
*   **Backend (Mock):** JSON Server (used for data simulation and REST API testing).
*   **Icons:** Bootstrap Icons.

## 🏗 Project Architecture
The project follows a clean, component-based architecture:
- **Pages:** Dedicated components for each section (About, Experience, etc.).
- **Services:** Centralized data management for handling JSON-based resume data.
- **Routing:** Global routing with child routes for nested project details.

## 🚀 Setup & Installation

### 1. Clone the repository
git clone https://github.com/Ruturajdk1911/CareerProfile-Builder.git
cd digital-resume


### 2. Install dependencies

npm install

### 3. Run JSON Server (Mock API)
Ensure you have `json-server` installed. If not, run `npm install -g json-server`.

json-server --watch db.json --port 3000


### 4. Run Development Server
ng serve

Navigate to `http://localhost:4200/` to view the app.

## 👨‍💻 Author
**Ruturaj Kulkarni**  
*Full-Stack .NET & Angular Developer*  

---
*Developed using Angular version 18 and Bootstrap.*