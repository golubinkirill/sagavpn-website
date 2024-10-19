import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // Инициализация AOS и проверка типа устройства
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации
      once: true, // Анимация запускается только один раз при скроллинге
    });

    // Проверка ширины экрана
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Запускаем проверку сразу
    handleResize();

    // Добавляем слушатель на изменение размера экрана
    window.addEventListener('resize', handleResize);

    // Удаляем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Подключение нужного файла стилей в зависимости от устройства
  useEffect(() => {
    if (isMobile) {

    } else {
      // Если десктоп — подключаем основной файл стилей
      import('./css/Home.css').then(() => {
        console.log('Подключен файл стилей для ПК');
      });
    }
  }, [isMobile]);


  // Версия для десктопа
  return (
    <div className="main-container">
    <header className="header">
      <div className="logo">Saga VPN</div>
      <nav className="nav-links">
        <a href="#download">Скачать</a>
        <a href="#pricing">Тарифы</a>
        <a href="#faq">FAQ</a>
        <a href="#support">Поддержка</a>
        <a href="#account">Личный кабинет</a>
      </nav>
    </header>
    
    {/* Анимация появления контента первого блока */}
    <div className="content" data-aos="fade-up">
      <div className="text-content">
        <h1 className="title">Быстрый VPN</h1>
        <p className="subtitle">Приватно. Невероятно быстро. От 249₽</p>
        <ul className="features">
          <li>• Высокая скорость</li>
          <li>• Подключение одним нажатием</li>
          <li>• Поддержка 24/7</li>
          <li>• Абсолютная приватность (no-gov)</li>
        </ul>
      </div>
      <div className="image-content">
        <img src={require('./images/firstpage/uiprez500x500.png')} alt="UI" />
      </div>
    </div>

    {/* Новый блок тарифов */}
    <section className="pricing-section" id='pricing'>
      <div className="pricing-header">
        <h2 className="pricing-title">Купить Saga VPN</h2>
      </div>
      <div className="pricing-cards">
        <div className="pricing-card"  data-aos="fade-up">
          <div className="card-content">
            <h3>1 месяц</h3>
            <div className="price">
              349₽<span>/мес</span>
            </div>
            <button className="buy-button">Купить</button>
          </div>
        </div>
        <div className="pricing-card"  data-aos="fade-down">
          <div className="discount-tag yellow">-17%</div>
          <div className="card-content">
            <h3>3 месяца</h3>
            <div className="price">
              290₽<span>/мес</span>
            </div>
            <button className="buy-button">Купить</button>
          </div>
        </div>
        <div className="pricing-card"  data-aos="fade-left">
          <div className="discount-tag orange">-30%</div>
          <div className="card-content">
            <h3>1 год</h3>
            <div className="price">
              249₽<span>/мес</span>
            </div>
            <button className="buy-button">Купить</button>
          </div>
        </div>
      </div>
    </section>

    {/* Анимация фич при скроллинге */}
    <section className="why-section" id="faq">
      <div className="why-container">
        <div className="why-item">
          <img src={require('./images/firstpage/speed.png')} alt="Скорость" />
          <h3>Скорость</h3>
          <p>Одна из самых высоких скоростей среди российских VPN</p>
        </div>
        <div className="why-item">
          <img src={require('./images/firstpage/devices.png')} alt="3 устройства" />
          <h3>3 устройства</h3>
          <p>Вы можете поделиться своей подпиской с близкими без потери скорости</p>
        </div>
        <div className="why-item">
          <img src={require('./images/firstpage/privacy.png')} alt="Приватность" />
          <h3>Приватность</h3>
          <p>Мы не ведём никакие логи. Мы не передаем информацию государству и третьим лицам</p>
        </div>
        <div className="why-item">
          <img src={require('./images/firstpage/security.png')} alt="Безопасность" />
          <h3>Безопасность</h3>
          <p>Использование передовых протоколов и отсутствие логов, даёт высокую степень защиты</p>
        </div>
        <div className="why-item">
          <img src={require('./images/firstpage/help.png')} alt="Поддержка" />
          <h3>Поддержка</h3>
          <p>Наша 24/7 поддержка готова помочь вам когда угодно. Вежливые и быстрые ответы</p>
        </div>
        <div className="why-item">
          <img src={require('./images/firstpage/guarantee.png')} alt="Гарантия возврата" />
          <h3>Гарантия возврата</h3>
          <p>Вернём деньги в течение 3 дней или в случае возникших проблем</p>
        </div>
      </div>
    </section>

    {/* Анимация платформ при скроллинге */}
    <span id="download"></span>
    <h2 className="download-title">Скачать SagaVPN</h2>
    <section className="download-section">  
      <div className="platforms">
        <div className="platform-item" data-aos="fade-up">
          <img src={require('./images/firstpage/windows.png')} alt="Windows" />
          <p>Windows</p>
        </div>
        <div className="platform-item" data-aos="fade-up">
          <img src={require('./images/firstpage/android.png')} alt="Android" />
          <p>Android</p>
        </div>
        <div className="platform-item" data-aos="fade-up">
          <img src={require('./images/firstpage/apple.png')} alt="MacOS" />
          <p>MacOS</p>
        </div>
        <div className="platform-item" data-aos="fade-up">
          <img src={require('./images/firstpage/extension.png')} alt="Браузер" />
          <p>Браузер</p>
        </div>
      </div>
      <div className="store-buttons" data-aos="fade-up">
        <a href="#google-play">
          <img src={require('./images/firstpage/google_play.png')} alt="Google Play" />
        </a>
        <a href="#app-store">
          <img src={require('./images/firstpage/app_store.png')} alt="App Store" />
        </a>
      </div>
    </section>
  </div>
  );
}

export default Home;
