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
- Contact `Saira Kamran` to obtain the necessary environment variables.
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

(Here, you can list the packages used in the project)

React
React-Router-Dom
React-Query (for chaching APIs)
Axios
MUI components
Dayjs

## Questions Asked

- `Question:` Search functionality on listing page?
- `Answer: ` Completed
  - On the listing page, there were two possibilities for listing, either through Table or through Card, so
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

Both Bonus Tasks completed with Extra Work as well

- Integrate Map
- Show Nationality Flag
- Nationality Dropdown Added as Filter
- All Filters are persisted in URL
- PageNumber also persisted in URL
- On Coming Back to Previous Page, won't trigger API Call (Caching in-place)
- Navigating back from Detail Page, will yeild prior data
  - PageNumber, Nationality Filter, Gender Filter

# Blockers/Issues Faced

- in the documentation of randomUser API it was mentioned that gender parameter works, but when I integrated things
  and ran the application, gender parameter was not working fine on API level, I've integrated everything correctly on frontend side, But API is not returning result according to provided gender parameter.
  - Try to hit following API through postman you will see are results are not according to given filter
  - `https://randomuser.me/api/?page=8&results=5&seed=abc&gender=female`
