# Strategic Messaging Dashboard

## Overview

Strategic Messaging Dashboard is a responsive React application that provides a modern dashboard interface with a collapsible sidebar, top navigation bar, animated dropdown menus, and page navigation using React Router.

The project focuses on creating a clean, reusable, and responsive UI using React, Tailwind CSS, Framer Motion, and React Router.

---

## Features

* Responsive dashboard layout
* Fixed top navigation bar
* Collapsible sidebar
* Animated expandable sidebar menus
* Nested page routing using React Router
* Reusable Page Header component
* Responsive design using Tailwind CSS
* Smooth animations with Framer Motion
* Clean and reusable component structure

---

## Tech Stack

* React
* Vite
* Tailwind CSS
* React Router DOM
* Framer Motion

---

## Project Structure

```
src/
│
├── components/
│   ├── layout/
│   └── sidebar/
│
├── Pages/
│   ├── Api/
│   ├── Campaigns/
│   ├── Contacts/
│   ├── Dashboard/
│   ├── Home/
│   ├── LiveChat/
│   ├── Numbers/
│   ├── Reports/
│   └── Tools/
│
├── routes/
│   └── AppRoutes.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd strategic-dashboard
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

## Available Scripts

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Main Components

### Navbar

* Fixed top navigation
* Sidebar toggle
* User action icons

### Sidebar

* Collapsible navigation
* Animated dropdown menus
* Active route highlighting

### Page Header

Reusable component that displays page navigation using icons and labels.

### Main Content

* Sidebar layout
* Route rendering using `<Outlet />`

---

## Routing

The application includes pages for:

* Home
* Dashboard
* Campaigns

  * Send Message
  * 2-Way Messaging
  * Autoresponders
  * Schedule Campaigns
* Tools

  * Media Library
  * URL Shortener
  * Message Templates
  * Integrations
* Numbers

  * Virtual Numbers
  * Subscribed
* Contacts

  * Contact Groups
  * Segments
  * Custom Fields
* Reports

  * Campaign Status
  * Inbox
* API

  * HTTP API
* Live Chat

---

## Responsive Design

The application is built using Tailwind CSS utility classes and supports responsive layouts with a collapsible sidebar.

---

## Animations

Framer Motion is used for:

* Sidebar dropdown animations
* Chevron rotation
* Smooth expand/collapse transitions

---

## Author

Developed as a React dashboard UI project using modern frontend technologies.
