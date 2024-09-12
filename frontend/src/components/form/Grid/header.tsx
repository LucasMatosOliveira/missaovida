// header.tsx
import React from 'react';
import './styles.css';

interface HeaderProps {
  pageTitle: string;
}

export function Header({ pageTitle }: HeaderProps) {
  return (
    <div className="header-fixed">
      <img
        src="https://revwildodosanjos.com.br/wp-content/themes/revwildo-spa/assets/images/vida.png"
        alt="Logo"
        className="logo"
      />
      <h1 className="header-text">{pageTitle}</h1>
    </div>
  );
}

export default Header;
