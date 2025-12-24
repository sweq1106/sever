import { Link } from 'react-router-dom';
import './Header.css'; // Создайте этот файл для стилей

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/catalog">Каталог</Link></li>
          <li><Link to="/cart">Корзина</Link></li>
          <li><Link to="/login">Войти</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;