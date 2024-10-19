import React, { useState } from 'react';
import styles from './mobile.module.css'; // Импорт стилей как модули

const Admin = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.logo}>Saga VPN</div>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </div>
      </header>
      
      {/* Меню */}
      <nav className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
        <ul>
          <li onClick={closeMenu}>Скачать</li>
          <li onClick={closeMenu}>Тарифы</li>
          <li onClick={closeMenu}>FAQ</li>
          <li onClick={closeMenu}>Поддержка</li>
          <li onClick={closeMenu}>Личный кабинет</li>
        </ul>
      </nav>

      {/* Полупрозрачный фон для закрытия меню при клике */}
      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </div>
  );
};

export default Admin;
