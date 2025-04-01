import React, { useState } from 'react';
import NavItem from './NavItem';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const hideMenu = () => setMenuOpen(false);

  const navItems = [
    { href: '#abstract', label: 'Abstract' },
    { href: '#experiment', label: 'Experiment' },
    { href: '#method', label: 'Method' },
    { href: '#results', label: 'Results' },
    { href: '#interviews', label: 'Interviews' },
    { href: '#discussion', label: 'Discussion' },
    { href: '#conclusion', label: 'Conclusion' },
    { href: '#references', label: 'References' },
  ];

  return (
    <div className="topnav">
      <a className="active"></a>
      <div id="myLinks" style={{ display: menuOpen ? 'block' : 'none' }}>
        {navItems.map((item) => (
          <NavItem key={item.href} href={item.href} label={item.label} onClick={hideMenu} />
        ))}
      </div>
      <a href="#" className="icon" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
};

export default Navbar;

