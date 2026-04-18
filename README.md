# 📝 React Todo Application

**View here:** [todo-app-blond-five-1hrfxopahm.vercel.app](https://todo-app-blond-five-1hrfxopahm.vercel.app/)

A responsive and modern Todo dashboard built with React. This application allows users to seamlessly manage tasks, filter by specific users, and sort by titles or completion dates, mimicking a real-world project management tool.

## 📸 Screenshots of the app
<img width="1902" height="1079" alt="image" src="https://github.com/user-attachments/assets/f2d919a5-d265-4f46-91d6-dc7fe096c399" />
 <br/>
<img width="1899" height="1079" alt="image" src="https://github.com/user-attachments/assets/39820bed-3d15-4ad7-966b-151e66e0af52" />
<br/>
<img width="1919" height="802" alt="image" src="https://github.com/user-attachments/assets/951528a7-fd67-4690-b3c3-e72db95ace95" />
<br/>
*The main dashboard featuring the Pending and Completed task lists side-by-side.*

## 🎯 Features

* **Dynamic Data Fetching:** Integrates with the JSONPlaceholder API to automatically fetch mock tasks and user data on load.
* **Completion Dates:** Automatically assigns the current date when a task is marked as completed, and handles default dates for pre-completed API tasks.
* **Dynamic Filtering:** Filter tasks by specific users using a clean dropdown interface (mapping User IDs to actual Usernames).
* **Advanced Sorting:**
  * **Pending List:** Sort alphabetically by title (A-Z / Z-A).
  * **Completed List:** Sort by completion date Desc (Newest) / Asc (Oldest) using timestamp comparison logic.
* **Pagination (Load More):** Efficiently manages long lists of tasks by limiting the initial view (10 tasks) with a "Load more" functionality.
* **Simulated Routing:** Simple state-based navigation between the main Task Dashboard and the About page.

## 🛠️ Technologies Used

* **React (Vite):** UI/Front-end Library for building fast and interactive user interfaces.
* **JavaScript (ES6+):** For array manipulation (map, filter, sort) and logic handling.
* **CSS3:** Utility and Flexbox-driven custom styling.
* **React Hooks:** Extensive use of `useState` and `useEffect` for state and side-effect management.

## 📂 Project Structure

* `/src/App.jsx`: The core component handling state management, API calls, and the responsive layout for both Pending and Completed lists.
* `/src/About.jsx`: Handles the "About the Author" view and social links.
* `/src/Footer.jsx`: Component for footer navigation.
* `/src/App.css`: Contains all custom CSS variables, flexbox layouts, and modern styling rules.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
* **Node.js:** v18.0.0 or higher
* **npm:** v9.0.0 or higher

## 🚀 Installation & Setup

Clone the repository:
```bash
git clone [https://github.com/Boko224/Todo_App](https://github.com/Boko224/Todo_App)
cd React-TODO-App
Install needed dependencies:

Bash
npm install
💻 Running the App Locally
Start the local development server:

Bash
npm run dev
