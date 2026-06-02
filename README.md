# AT2 Web App Using Components - React Rental Website

## Project Overview

This project is a React web application created for AT2 Web App Using Components.  
The website is based on a rental/travel accommodation theme called **One Ring Rentals**.

The main purpose of this assessment was to demonstrate that I can create a web-based application using React components, routing, JavaScript syntax, and basic development workflow with Git and GitHub.

The project includes multiple pages, reusable components, images, styling, navigation, and simple interactive behaviour such as a home image slider.

## Technologies Used

- React
- JavaScript
- React Router DOM
- HTML / JS
- CSS
- Bootstrap
- Font Awesome icons
- Git and GitHub
- npm
- Webpack / development server

## Main Features

- Home page with image slider
- Header and footer components
- Navigation between pages
- Regions page with Australian city cards
- News page with rental news articles
- Contact page with contact form
- Hot Deals section
- Help section with buttons linking to the contact page
- Reusable React components
- Images imported and used inside components

## Project Structure

```text
src/
│
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── HomeSlider.js
│   ├── HelpSection.js
│   ├── CityCard.js
│   └── HotPrice.js
│
├── pages/
│   ├── HomePage.js
│   ├── ContactPage.js
│   ├── RegionsPage.js
│   └── NewsPage.js
│
├── images/
│   └── project images
│
├── css/
│   ├── bootstrap.min.css
│   └── style.css
│
├── App.js
└── index.js
```

## How to Install and Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/NM-TAFE/at2-web-app-using-components-anhelinapotapenko.git
```

### 2. Move into the project folder

```bash
cd at2-web-app-using-components-anhelinapotapenko
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the application

```bash
npm start
```

After running the project, open the local development URL shown in the terminal.  
For example:

```text
http://localhost:3000
```

## Components Explanation

### App.js

`App.js` is the main application component.  
It imports the main pages and uses React Router to display different pages depending on the URL.

Routes used in the project:

- `/` shows the Home page
- `/contact` shows the Contact page
- `/regions` shows the Regions page
- `/news` shows the News page

The Header and Footer are outside the routes, so they display on every page.

### index.js

`index.js` is the starting point of the React app.  
It finds the `root` element in the HTML file and renders the React application inside it.

The app is wrapped in `BrowserRouter` so that React Router can manage navigation between pages.

### Header.js

The Header component contains the top navigation area.  
It includes:

- Website logo
- Login and Register links
- Language switcher
- Search form
- Navigation links to Home, Regions, News, and Contact pages

### Footer.js

The Footer component contains the bottom section of the website.  
It includes:

- Logo
- Short website text
- Helpful links
- Popular regions
- Social media icons

### HomeSlider.js

The HomeSlider component displays a simple image slider.  
It uses:

- an array of slide objects
- `useState` to store the current slide
- `useEffect` and `setInterval` to automatically change slides every 3 seconds
- next and previous functions to manually change slides

### CityCard.js

The CityCard component displays Australian city information using an array.  
Each object in the array contains:

- image
- city name
- description
- weather
- rent price

The component uses `.map()` to loop through the array and create a card for each city.

### HotPrice.js

The HotPrice component displays rental deals.  
It uses an array of rental objects and maps over the data to display each deal.

Each rental deal includes:

- image
- city
- area
- original price
- special price
- number of bedrooms
- description

### HelpSection.js

The HelpSection component shows a small call-to-action section.  
It uses `Link` from React Router to send users to the Contact page.

### HomePage.js

The HomePage combines multiple website sections, including:

- HomeSlider component
- Search form
- Featured properties
- Popular regions
- Recent articles
- Last minute deals
- Activity section
- HelpSection component

### ContactPage.js

The ContactPage includes a contact form with fields for:

- name
- email
- subject
- message

It also includes the HotPrice component below the form.

### RegionsPage.js

The RegionsPage displays Australian regions such as Sydney, Melbourne, Brisbane, Perth, Adelaide, and Hobart.

### NewsPage.js

The NewsPage displays recent rental news and also reuses CityCard and HelpSection components.

## Development Workflow

My workflow was:

1. Create the React project structure.
2. Add pages and components.
3. Import CSS and images.
4. Set up React Router navigation.
5. Build each component separately.
6. Test each page in the browser.
7. Fix errors using the browser console and terminal.
8. Commit changes to GitHub after completing sections.

## Version Control

I used Git and GitHub to manage my project.

# https://github.com/anhelinapotapenko/ap-one-ring-rentals/commits/main/

Example Git commands:

```bash
git status
git add .
git commit -m "Add Header.js"
git commit -m "Add HomeSlider component"
git commit -m "Add RegionsPage and CityCards"
git commit -m "Fix ContactPage layout"
git push origin main
```

I used commits to save progress during development.  
This helped me track my changes and show my development process.

## What I Learned

From this project, I learned how to:

- Build a React application using components
- Reuse components across different pages
- Use React Router for navigation
- Import images into React components
- Use arrays and `.map()` to display repeated content
- Use `useState` and `useEffect`
- Fix common JS errors
- Use Git and GitHub for version control
- Explain my development process clearly

## Author

Angelina Potapenko

### Notes

- Component - is a reusable piece of the user interface.

Example: function Header() {
return <h1>My Website</h1>;
}

- State - stores information that can change.

Example: const [count, setCount] = useState(0);
count - current value, SetCount - updates value

I used state in HomeSlider to track which slide is currently displayed. When the state changes, React automatically updates the page.

- useState Hook

useState is a React Hook that allows functional components to store and update data.

Example: import {useState} from "react";
const [currentSlide, setCurrentSlide]= useState(0);

- useEffect Hook

Runs code after the component loads - I used useEffect to create an automatic slideshow. It runs once when the component loads and starts a timer.

Example: useEffect(() => {
const interval = setInterval(() => {
// change slide
}, 3000);

return () => clearInterval(interval);
}, []);

- React Router

Allows navigation between pages without reloading.
I used React Royer to create multiple pages in a single-page application.

Import: import { Routes, Route } from "react-router-dom";
Used:<Routes>
<Route path="/" element={<HomePage />} />
</Routes>

- BrowserRouter

Manages navigation and URL changes inside the React application.
<BrowserRouter>
<App />
</BrowserRouter>

- Link

Navigates without refreshing the page
Example: <Link to="/contact">

- Arrays

Store multiple objects and allow to display repeated content efficiently.
Example: const regions = [
{
name: "Perth",
rent: "$450/week",
},
];

- Objects

Store related information using key-value
Example: {
name: "Perth",
rent: "$450/week"
}

- Array.map()

loops through an array.
Used to generate multiple cards from an array insted of writing the same code.
Example: regions.map((item, index) => (

  <div>{item.name}</div>
))

- Variables

To store data and component information
Example: const slides = [];

- Function

Allow reusable blocks of code that perform actions
Example: function nextSlide() {
setCurrentSlide(currentSlide + 1);
}

- Event Handling

Runs a function when user clicks.
Example: onClick={nextSlide}

- Conditional Logic

To determine which slide should be displayed next
Example: currentSlide === slides.length - 1 ? 0 : currentSlide + 1

- Imports

Imports components and files
Example: import Header from "./components/Header";

- Exports

Makes components available in other files.
Example: export default Header;

- Rendering

Display React components on the page
Example: root.render(
<BrowserRouter>
<App />
</BrowserRouter>
);

- ReactDOM

Connects React to the HTML page.
Example: ReactDOM.createRoot()

- npm

Node Package Manager
