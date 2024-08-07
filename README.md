# Random User Application

## Table of Contents

- Introduction
- Getting Started
- Prerequisites
- Installation
- Running the Application
- Project Structure
- Packages Used
- Common Questions
- Bonus Tasks Status

## Introduction

Random user app allow to see users listing, on home page, user can see List of users in the form of table,
Each user profile and nationality flag has been displayed as well, Date of Birth is well formatted.
User can change pages has pagination has been applied, similarly user can change gender, and can search listed users on the basis of FirstName, LastName, Nationality, City, there is a Eye Icon as well, through which user can see Detail of any user, clicking on Eye button will take user to Detail Page, where all necessary informations has been displayed, and map is integrated at bottom.
Now user can navigate back, and following things will be persisted, pageNumber, and gender, so user can see exactly the same page which he/she left.

## Prerequisites

Ensure you have the following installed on your local machine:

- Node.js (version > 18)

## Installation

- Clone the project on your local machine
- Contact `Saira Kamran` to obtain the necessary environment variables.
- Create a .env file at the root level of the project.
- Paste all the environment variables into the .env file.
- Install dependencies:

```npm install
npm run dev
```

## Access the application:

Look at the terminal to find the running application URL.
Paste the URL into your browser.
The application should now be up and running.

## Project Structure

The project's codebase is organized as follows:

- src/: All source code resides here.
- pages/: Contains all the pages of the application.
- containers/: Where multiple components are rendered together.
- components/: Each component is designed to perform a single task.
- Each component folder contains:
- style file
- types file
- component file
- API Controller: Created to enhance reusability.
- Layout: Created the layout of the application.
- Reusable Hooks: Created reusable hooks.

## Packages Used

(Here, you can list the packages used in the project)

React
React-Router-Dom
React-Query (for chaching APIs)
Axios
MUI components

## Questions Asked

- Question: Search functionality on listing page?
  - Answer: On the listing page, there were two possibilities for listing, either through Table or through Card, so
  - I went with the Table approach.
  - Here is how I achieved the search functionality:
  - I kept the search context to the visible records, meaning just records on the current page will take
    part in the search, as we are getting paginated data.
    Provided a search field right on top of the Table.
    On clicking the search field, there is a beautiful placeholder, telling the user what they can search.
    I just involve the following fields in the search criteria, as they were visible to the user: firstName, lastName, firstName + lastName, nationality, city.
    The search field is debounced to avoid unnecessary API calls, currently achieving debounce through useDeferredValue hook of React, but it's not much beneficial, so in the future, proper debouncing should be applied.
    Once the user types something, picking the text, and filtering the visible records accordingly and filtering in a case-insensitive manner to enhance searching, just matched results will be visible.
    In case of no match, a message will be displayed to the user.
    Not persisting the search filter on page refreshing or navigating back from the detail page.

## Bonus Tasks Status

Both Bonus Tasks completed

- Integrate Map
- Show Nationality Flag
