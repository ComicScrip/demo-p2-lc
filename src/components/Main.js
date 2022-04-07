import { Route, Routes } from 'react-router-dom';
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import About from '../screens/About';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}
