import { NavLink, Link } from 'react-router-dom';
import useTheme from '../../hooks/useTheme'; // استيراد الـ Hook اللي صاوبنا

const Navbar = ({ cartCount }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar-premium">
      <div className="logo">
        <Link to="/" className="logo-text">
          Shop<span>.ma</span>
        </Link>
      </div>

      <ul className="nav-links-list">
        <li>
          <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
            Produits
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="nav-actions">
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        <Link to="/cart" className="nav-cart-icon">
          <span className="cart-emoji">🛒</span>
          {cartCount > 0 && <span className="cart-badge-count">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;