# Filmlane Movie Ticket Booking Website

Welcome to the Filmlane Movie Ticket Booking Website project! This web application allows users to purchase movie tickets for screenings at the Filmlane cinema. Users can browse the list of available movies, select a movie, purchase tickets, and receive an email confirmation with movie and purchase details.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and login
- Verfies email
- Browse showing movies
- Select a movie and purchase tickets
- Secure payment processing using Paystack API
- Email confirmation with movie and purchase details

## Demo

You can check out a live demo of the website https://filmlane-v2.vercel.app/ (#).

## Getting Started

To run this project locally, follow the instructions below.

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone this repository to your local machine:

bash
git clone https://github.com/thejuggernaut01/Filmlane-V2.git

Navigate to the project directory:
cd Filmlane-V2

Install the project dependencies:
npm install

### Usage
npm run dev

Open a web browser and go to http://localhost:5173 to access the website.

Register or log in to your account to start purchasing movie tickets.

### Technologies Used
React + Vite

HTML, CSS, TailwindCSS, and JavaScript for the frontend

Hanko for authentication (to integrate hanko auth, visit -> https://www.hanko.io/) 

Firebase for database and storage

Paystack API for payment processing

smtpjs for sending confirmation emails

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
