import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  return (
    <Router>
      {/* Header будет показываться на всех страницах */}
      <Header />
      <main>
        <Routes>
          {/* Каждый Route связывает URL с компонентом страницы */}
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Сюда вы позже добавите маршруты для других страниц */}
        </Routes>
      </main>
      {/* Footer также будет на всех страницах */}
      <Footer />
    </Router>
  );
}

export default App;