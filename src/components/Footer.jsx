import React, { useState } from 'react'
import Logo from '../assets/logo-text.png'
import PhoneIc from '../assets/icon_phone.png'
import LogoD from '../assets/logo_dizign.png'
import { FaVk, FaTelegram, FaInstagram, FaYoutube, FaOdnoklassniki } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed with:', email);
      setIsSubscribed(true);
      setEmail('');
      // Здесь можно добавить логику подписки
    }
  };

  const socialLinks = [
    { icon: FaVk, href: "#", label: "ВКонтакте" },
    { icon: FaTelegram, href: "#", label: "Telegram" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
    { icon: FaOdnoklassniki, href: "#", label: "Одноклассники" }
  ];

  const footerSections = [
    {
      title: "Каталог",
      links: [
        { name: "Акции", href: "#" },
        { name: "Новинки", href: "#" },
        { name: "Популярное", href: "#" },
        { name: "Распродажа", href: "#" },
        { name: "Сезонные товары", href: "#" }
      ]
    },
    {
      title: "Покупателям",
      links: [
        { name: "Доставка и оплата", href: "#" },
        { name: "Возврат товара", href: "#" },
        { name: "Бонусная программа", href: "#" },
        { name: "Подарочные карты", href: "#" },
        { name: "Частые вопросы", href: "#" }
      ]
    },
    {
      title: "Компания",
      links: [
        { name: "О нас", href: "#" },
        { name: "Новости", href: "#" },
        { name: "Вакансии", href: "#" },
        { name: "Поставщикам", href: "#" },
        { name: "Контакты", href: "#" }
      ]
    },
    {
      title: "Помощь",
      links: [
        { name: "Центр поддержки", href: "#" },
        { name: "Личный кабинет", href: "#" },
        { name: "Статус заказа", href: "#" },
        { name: "Гарантия качества", href: "#" },
        { name: "Служба заботы", href: "#" }
      ]
    }
  ];

  return (
    <footer className="site-footer">
      {/* Верхняя часть футера */}
      <div className="footer-main">
        <div className="footer-container">
          
          {/* Колонка с контактами и подпиской */}
          <div className="footer-column contact-column">
            <div className="footer-brand">
              <img src={Logo} alt="Северный Маркет" className="footer-logo" />
              <p className="brand-slogan">Качество, которому доверяют</p>
            </div>

            {/* Контактная информация */}
            <div className="contact-info">
              <div className="contact-item">
                <img src={PhoneIc} alt="телефон" className="contact-icon" />
                <div className="contact-details">
                  <span className="phone-number">8 800 777 33 33</span>
                  <span className="phone-label">Бесплатный звонок по России</span>
                </div>
              </div>
              
              <div className="contact-item">
                <HiMail className="contact-icon" />
                <div className="contact-details">
                  <span className="email">support@northernmarket.ru</span>
                  <span className="email-label">Служба поддержки</span>
                </div>
              </div>

              <div className="contact-item">
                <IoLocationSharp className="contact-icon" />
                <div className="contact-details">
                  <span className="address">г. Москва, ул. Северная, 15</span>
                  <span className="work-hours">Ежедневно с 8:00 до 22:00</span>
                </div>
              </div>
            </div>

            {/* Форма подписки */}
            <div className="subscription-section">
              <h4>Подпишитесь на рассылку</h4>
              <p>Узнавайте первыми о новых акциях и скидках</p>
              {isSubscribed ? (
                <div className="subscription-success">
                  ✅ Спасибо за подписку!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="subscription-form">
                  <div className="input-group">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ваш email"
                      className="email-input"
                      required
                    />
                    <button type="submit" className="subscribe-btn">
                      Подписаться
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Навигационные колонки */}
          {footerSections.map((section, index) => (
            <div key={index} className="footer-column">
              <h4 className="column-title">{section.title}</h4>
              <ul className="footer-links">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Колонка с приложением */}
          <div className="footer-column app-column">
            <h4 className="column-title">Мобильное приложение</h4>
            <div className="app-promo">
              <p>Скачайте наше приложение</p>
              <div className="app-badges">
                <div className="app-badge">
                  <span className="badge-icon">📱</span>
                  <div className="badge-text">
                    <span className="badge-name">App Store</span>
                    <span className="badge-desc">Для iOS</span>
                  </div>
                </div>
                <div className="app-badge">
                  <span className="badge-icon">🤖</span>
                  <div className="badge-text">
                    <span className="badge-name">Google Play</span>
                    <span className="badge-desc">Для Android</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Социальные сети */}
            <div className="social-section">
              <h4>Мы в соцсетях</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a 
                      key={index}
                      href={social.href}
                      className="social-link"
                      aria-label={social.label}
                    >
                      <IconComponent className="social-icon" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <span>© 2024 Северный Маркет. Все права защищены.</span>
            </div>
            
            <div className="legal-links">
              <a href="#">Политика конфиденциальности</a>
              <a href="#">Условия использования</a>
              <a href="#">Карта сайта</a>
              <a href="#">Обработка персональных данных</a>
            </div>

            <div className="design-credit">
              <span>Дизайн</span>
              <img src={LogoD} alt="Vasion Design" className="design-logo" />
            </div>
          </div>

          {/* Дополнительная информация */}
          <div className="footer-info">
            <p>
              *Цены и актуальность товаров могут изменяться. 
              Все товары сертифицированы. 
              Не является публичной офертой.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;