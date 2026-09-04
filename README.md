# KDAG-WEB-26IM10036-Ankit

## About Me

Hi, I'm Ankit, a student at IIT Kharagpur (Roll No. 26IM10036), submitting this project as part of the **KDAG Associates' Selection Round 2 — Web Team**. I enjoy building clean, functional interfaces and wanted this project to genuinely reflect KDAG's own visual identity rather than a generic template — so the design below is built to match the dark, glassmorphism-style theme of the real [KDAG website](https://github.com/Kharagpur-Data-Analytics-Group/KDAG-Website).

## Project Overview

A responsive landing page and registration form for KDAG's flagship **"Beginner's Python & Data Analytics Bootcamp"**, built with plain HTML, CSS, and JavaScript — no frameworks or build tools required.

## Project Structure

\```
KDAG-WEB-26IM10036-Ankit/
├── index.html      # Landing page — hero section + feature highlights
├── register.html   # Registration form page
├── style.css        # Shared dark theme + glassmorphism styling
├── script.js         # Client-side form validation logic
└── README.md
\```

## Features

- **Landing page** with a hero section, tagline, and a "Join the Bootcamp" call-to-action, plus a feature grid outlining the curriculum (Python Fundamentals, Data Wrangling, Data Visualization).
- **Registration form** collecting Full Name, Roll Number, Email, and Department, with a "Register" submit button.
- **Client-side validation** (in `script.js`), which:
  - Blocks submission if any field is left empty.
  - Requires the Roll Number to be exactly 9 characters, in the format `26XX10001`.
  - Validates the email address format.
  - On success, hides the form and reveals a styled "Registration Successful!" popup — without reloading the page.
- **Design language** matching KDAG's real branding: a dark background, blue gradient accents, glassmorphism cards with blurred translucent backgrounds, pill-shaped buttons, and glowing headline text.
- **Fully responsive** layout using CSS Grid (`auto-fit`/`minmax`) for the feature cards and a mobile-friendly stacked navbar.

## How to Run

Just open `index.html` in any browser — no installation or build step needed.

## Tech Stack

HTML5, CSS3 (custom properties, Flexbox, Grid, backdrop-filter), and vanilla JavaScript (DOM manipulation, regex validation).