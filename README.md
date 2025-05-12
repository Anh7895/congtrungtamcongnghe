# 1 tạo project taiwindcss vite + react
https://v3.tailwindcss.com/docs/guides/vite
# 2
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
# 3 Mở file tailwind.config.js, sửa thành:
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
# 4 Trong src/index.css (hoặc src/main.css), thêm:
@tailwind base;
@tailwind components;
@tailwind utilities;
# 5 Trong file src/main.jsx, thêm:

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // <-- thêm dòng này

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
# 6 sửa file vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
# 7 Router
npm install react-router-dom
# 8 Tạo pages gồm các screen
Home.jsx

export default function Home() {
  return <h1 className="text-2xl font-bold">Trang chủ</h1>;
}

# 9 Tạo component 
Navbar.jsx

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex gap-4">
      <Link to="/">Trang chủ</Link>
      <Link to="/about">Giới thiệu</Link>
    </nav>
  );
}
# 10 Thiết lập App trong route
src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

# 11 npm run dev