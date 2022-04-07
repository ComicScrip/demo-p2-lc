import { NavLink } from 'react-router-dom';

const getActiveLinkStyle = ({ isActive }) => ({
  color: isActive ? 'orange' : 'white',
});

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/" style={getActiveLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/about" style={getActiveLinkStyle}>
          About
        </NavLink>
        <NavLink to="/contact" style={getActiveLinkStyle}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
