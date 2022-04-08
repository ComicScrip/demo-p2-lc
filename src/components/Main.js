import { Route, Routes } from 'react-router-dom';
import Home from '../screens/Home';
import Contact from '../screens/Contact';

import AboutPage from '../screens/AboutPage';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}
