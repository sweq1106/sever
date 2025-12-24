import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { BsBox2, BsBell } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import Avatar from "../assets/avatar.png"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from 'react-router-dom'

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Здесь будет логика поиска
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <header className="site-header">
      {/* Верхняя панель с контактами */}
      <div className="top-bar">
        <div className="contact-info">
          <span>📞 Бесплатный звонок: 8-800-777-33-33</span>
          <span>📍 Ваш город: Москва</span>
        </div>
        <div className="auth-links">
          <a href="#">Войти</a>
          <span>|</span>
          <a href="#">Регистрация</a>
        </div>
      </div>

      {/* Основная навигация */}
      <nav className="main-nav">
        {/* Логотип и бренд */}
        <div className="brand-section">
          <Link to="/" className="brand-link">
            <img src={Logo} alt="Северный Маркет" className="brand-logo" />
            <div className="brand-text">
              <span className="brand-name">СЕВЕРНЫЙ МАРКЕТ</span>
              <span className="brand-tagline">Ваш надежный поставщик</span>
            </div>
          </Link>
        </div>

        {/* Кнопка каталога */}
        <button className="catalog-btn">
          <RxHamburgerMenu className="catalog-icon" />
          <span>Категории товаров</span>
        </button>

        {/* Поисковая строка */}
        <div className="search-section">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-wrapper">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Искать продукты, бренды, категории...'
                className='search-input'
              />
              <button type="submit" className="search-button">
                <IoIosSearch className="search-icon" />
                <span>Найти</span>
              </button>
            </div>
          </form>
        </div>

        {/* Действия пользователя */}
        <div className="user-actions">
          {/* Уведомления */}
          <div className="action-item">
            <BsBell className="action-icon" />
            <span className="action-text">Уведомления</span>
            <span className="notification-badge">3</span>
          </div>

          {/* Избранное */}
          <Link to="/favorites" className="action-item">
            <CiHeart className="action-icon" />
            <span className="action-text">Избранное</span>
          </Link>

          {/* Заказы */}
          <Link to="/orders" className="action-item">
            <BsBox2 className="action-icon" />
            <span className="action-text">Мои заказы</span>
          </Link>

          {/* Корзина */}
          <Link to='/basket' className="action-item cart-item">
            <div className="cart-icon-wrapper">
              <SlBasket className="action-icon cart-icon" />
              <span className="cart-count">2</span>
            </div>
            <span className="action-text">Корзина</span>
            <span className="cart-total">1 245 ₽</span>
          </Link>

          {/* Профиль пользователя */}
          <div className="profile-section">
            <button 
              className="profile-toggle" 
              onClick={toggleProfile}
              aria-expanded={isProfileOpen}
            >
              <div className="user-info">
                <img src={Avatar} alt="Профиль Алексея" className="user-avatar" />
                <div className="user-details">
                  <span className="user-name">Алексей</span>
                  <span className="user-status">Бонусы: 1 500</span>
                </div>
              </div>
              {isProfileOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>

            {/* Выпадающее меню профиля */}
            {isProfileOpen && (
              <div className="profile-dropdown">
                <Link to="/profile" className="dropdown-item">
                  👤 Мой профиль
                </Link>
                <Link to="/bonuses" className="dropdown-item">
                  🎁 Мои бонусы
                </Link>
                <Link to="/settings" className="dropdown-item">
                  ⚙️ Настройки
                </Link>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item logout-btn">
                  🚪 Выйти
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Дополнительная навигация */}
      <div className="secondary-nav">
        <div className="nav-links">
          <a href="#">Акции</a>
          <a href="#">Новинки</a>
          <a href="#">Популярное</a>
          <a href="#">О нас</a>
          <a href="#">Доставка</a>
          <a href="#">Контакты</a>
        </div>
        <div className="promo-banner">
          <span>🎁 Получи скидку 15% на первый заказ!</span>
        </div>
      </div>
    </header>
  );
};

export default Header;