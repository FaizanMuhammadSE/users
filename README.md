# Random User Application

## Table of Contents

- Introduction
- Prerequisites
- Installation
- Running the Application
- Project Structure
- Packages Used
- Common Questions
- Bonus Tasks Status

## Introduction

The Random User App allows users to view a list of profiles on the home page. Here’s what you can do:

- `View User List:` See all users in a neat table format.
- `Profile Details:` Each user’s profile and their nationality flag
  are displayed, with dates of birth well formatted.
- `Pagination:` Easily switch between pages to see more users.
- `Filter by Gender:` Filter the list by nationality, gender.
- `Search Users:` Search users by their first name, last name, nationality, or city.
- `View Details:` Click the eye icon to see detailed information about any user.
  This takes you to a detailed page with all the necessary information, including an integrated map at the bottom.
- When you navigate back from the detail page, the app remembers the page number
  and gender filter you were using, so you’ll see the exact same view you left.

## Prerequisites

Ensure you have the following installed on your local machine:

- Node.js (version > 18)

## Installation

- Clone the project on your local machine
- Contact `Me` to obtain the necessary environment variables.
- Create a `.env` file at the root level of the project.
- Paste all the environment variables into the `.env` file.
- Install dependencies:

```
npm run i
npm run dev
```

## Access the application:

Look at the terminal to find the running application URL.
Paste the URL into your browser.
The application should now be up and running.

## Project Structure

The project's codebase is organized as follows:

- `src/:` All source code resides here.
- `pages/:` Contains all the pages of the application.
- `containers/:` Where multiple components are rendered together.
- `components/:` Each component is designed to perform a single task.
- Each component folder contains:
- style file
- types file
- component file
- `API Controller:` Created to enhance reusability.
- `Layout:` Created the layout of the application.
- `Reusable Hooks:` Created reusable hooks.

## Packages Used

- React
- React-Router-Dom
- React-Query (for chaching APIs)
- Axios
- MUI components
- Dayjs
- MapBox GL
- Flag Icons
