import React from 'react';

interface NavItemProps {
  href: string;
  label: string;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, onClick }) => (
  <a href={href} onClick={onClick}>
    {label}
  </a>
);

export default NavItem;
