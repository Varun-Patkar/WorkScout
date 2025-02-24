## 🚧 Work in Progress

This project is currently in the very early stages of development. The default settings and configurations provided by the framework are still in place, and significant changes and features are yet to be implemented. The repository is being used to track progress across devices.

---

# WorkScout - Varun Anand Patkar

WorkScout is a full-stack job board application designed to connect job seekers with employers. It offers seamless job posting, application tracking, and profile management, all within a modern React Native environment.

---

## 📋 Table of Contents

- [WorkScout - Varun Anand Patkar](#workscout---varun-anand-patkar)
  - [📋 Table of Contents](#-table-of-contents)
  - [🤖 Introduction](#-introduction)
  - [⚙️ Tech Stack](#️-tech-stack)
  - [🔋 Features](#-features)
  - [🤸 Quick Start](#-quick-start)
    - [Prerequisites](#prerequisites)
    - [Cloning the Repository](#cloning-the-repository)
    - [Installation](#installation)
    - [Set Up Environment Variables](#set-up-environment-variables)
    - [Start the App](#start-the-app)
  - [🚨 Reference Tutorial](#-reference-tutorial)

---

## 🤖 Introduction

WorkScout is a full-stack job board application built with React Native, enabling users to post job listings, apply for jobs, and manage profiles. This app leverages modern tools like Expo SDK 52, Appwrite, Tailwind CSS, and TypeScript to create a scalable and user-friendly experience.

If you're new to React Native development and need assistance, the JavaScript Mastery community provides an excellent starting point to learn the fundamentals of app development.

---

## ⚙️ Tech Stack

- Expo
- React Native
- TypeScript
- Nativewind
- Appwrite
- Tailwind CSS

---

## 🔋 Features

👉 **Authentication with Google:** Secure and seamless user sign-ins using Google’s authentication service.  
👉 **Job Listings:** Users can post and manage job listings with detailed descriptions and requirements.  
👉 **Job Applications:** Users can apply for jobs directly through the app.  
👉 **Profile Management:** Employers and job seekers can update their profiles and manage preferences.  
👉 **Search & Filter:** Powerful search and filtering features to help users find relevant job listings.  
👉 **Centralized Data Fetching:** Custom API call management inspired by TanStack’s useQuery.

And many more features, including optimized architecture and reusable components.

---

## 🤸 Quick Start

Follow these steps to set up WorkScout locally.

### Prerequisites

Ensure you have the following installed on your machine:

- Git
- Node.js
- npm (Node Package Manager)

### Cloning the Repository

```sh
git clone https://github.com/Varun-Patkar/WorkScout.git
cd WorkScout
```

### Installation

```sh
npm install
```

### Set Up Environment Variables

Create a new file named `.env.local` in the root of your project and add the following content:

```sh
EXPO_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
EXPO_PUBLIC_APPWRITE_PROJECT_ID=
EXPO_PUBLIC_APPWRITE_DATABASE_ID=
EXPO_PUBLIC_APPWRITE_JOBS_COLLECTION_ID=
EXPO_PUBLIC_APPWRITE_USERS_COLLECTION_ID=
EXPO_PUBLIC_APPWRITE_APPLICATIONS_COLLECTION_ID=
```

Replace the values with your actual Appwrite credentials.

### Start the App

```sh
npx expo start
```

In the output, you'll find options to open the app in a:

- Development build
- Android emulator
- iOS simulator
- Expo Go (for sandbox testing)

Start developing by editing the files inside the `app` directory. This project uses file-based routing.

---

## 🚨 Reference Tutorial

This project is inspired by the real estate app tutorial available on the [JavaScript Mastery YouTube channel](https://www.youtube.com/watch?v=CzJQEstIiEI). While WorkScout follows a similar structure, it is an independent project focused on job listings instead of real estate.
