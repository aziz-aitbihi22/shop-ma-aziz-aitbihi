import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: '#4A628A', width: '100%' }}>
      <div className="logo">
        <Link to="/" style={{ color: '#DFF2EB', fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none' }}>
          Shop.ma
        </Link>
      </div>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
        <li><NavLink to="/" style={({isActive}) => ({ color: isActive ? '#B9E5E8' : '#DFF2EB', textDecoration: 'none' })}>Accueil</NavLink></li>
        <li><NavLink to="/products" style={({isActive}) => ({ color: isActive ? '#B9E5E8' : '#DFF2EB', textDecoration: 'none' })}>Produits</NavLink></li>
        <li><NavLink to="/cart" style={({isActive}) => ({ color: isActive ? '#B9E5E8' : '#DFF2EB', textDecoration: 'none' })}>Panier</NavLink></li>
        <li><NavLink to="/contact" style={({isActive}) => ({ color: isActive ? '#B9E5E8' : '#DFF2EB', textDecoration: 'none' })}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;