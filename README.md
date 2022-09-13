Alec Torres 
# LAB - Class 39
Project: Cookie Stand Admin
Author: Alec Torres
Worked with Ryan, Riki, and Jamall
## Links and Resources

## Setup
```
Tailwind
Next.js
```
## How to initialize/run your application (where applicable)
```
npx create-next-app my-project
cd my-project
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
@tailwind base;
@tailwind components;
@tailwind utilities;
npm run dev
```
Test paths: