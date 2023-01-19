import logo from "./logo.svg";
import right_arrow_icon from "./right_arrow_icon.svg";
import search from "./search.svg";
import vector_bg from "./vector_bg.svg";
import illustration2 from "./illustration2.svg";
import illustration3 from "./illustration3.svg";
import image1 from "./image1.svg";
import trafalgar_header_illustration from "./trafalgar_header_illustration.svg";
import "./App.css";
import Carousel from "./Carousel";

function App() {
  return (
    <div className="AppBody">
      <header>
        <figure className="logo-container">
          <img src={logo} alt="logo_icon" />
        </figure>
        <nav>
          <ul>
            <li>
              <span className="nav-link-active nav-link">Home</span>
            </li>
            <li>
              <span className="nav-link">Find a doctor</span>
            </li>
            <li>
              <span className="nav-link">Apps</span>
            </li>
            <li>
              <span className="nav-link">Testimonials</span>
            </li>
            <li>
              <span className="nav-link">About us</span>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <article>
          <h1 className="main-article-heading">Virtual healthcare for you</h1>
          <p className="main-article-para">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <button className="main-article-btn">Consult today</button>
        </article>
        <figure>
          <img
            src={trafalgar_header_illustration}
            alt="trafalgar_header_illustration"
          />
        </figure>
      </main>
      <section className="section-after-main">
        <article className="section-article">
          <h1 className="section-article-heading">Our services</h1>
          <p className="section-article-para">
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </article>
        <figure className="section-bg">
          <img src={vector_bg} alt="vector_bg" />
        </figure>
        <div className="section-cards-container">
          <article className="section-card">
            <figure className="section-card-image-container">
              <img className="section-card-image" src={search} alt="search" />
            </figure>
            <h1 className="section-card-heading">Search doctor</h1>
            <p className="section-card-para">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </article>
          <article className="section-card">
            <figure className="section-card-image-container">
              <img className="section-card-image" src={search} alt="search" />
            </figure>
            <h1 className="section-card-heading">Search doctor</h1>
            <p className="section-card-para">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </article>
          <article className="section-card">
            <figure className="section-card-image-container">
              <img className="section-card-image" src={search} alt="search" />
            </figure>
            <h1 className="section-card-heading">Search doctor</h1>
            <p className="section-card-para">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </article>
        </div>
        <div className="section-cards-container">
          <article className="section-card">
            <figure className="section-card-image-container">
              <img className="section-card-image" src={search} alt="search" />
            </figure>
            <h1 className="section-card-heading">Search doctor</h1>
            <p className="section-card-para">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </article>
          <article className="section-card">
            <figure className="section-card-image-container">
              <img className="section-card-image" src={search} alt="search" />
            </figure>
            <h1 className="section-card-heading">Search doctor</h1>
            <p className="section-card-para">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </article>
          <article className="section-card">
            <figure className="section-card-image-container">
              <img className="section-card-image" src={search} alt="search" />
            </figure>
            <h1 className="section-card-heading">Search doctor</h1>
            <p className="section-card-para">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </article>
        </div>
        <div className="section-btn-container">
          <button className="section-btn">Learn More</button>
        </div>
      </section>
      <div className="general-details-div">
        <div className="general-details-container">
          <figure className="general-details-image-container">
            <img
              className="general-details-image"
              src={illustration2}
              alt="illustration2"
            />
          </figure>
          <article className="general-details-container-article">
            <h1 className="general-details-heading">
              Leading healthcare providers
            </h1>
            <p className="general-details-para">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone. To us, it’s not just
              work. We take pride in the solutions we deliver
            </p>
            <div className="general-details-btn-container">
              <button className="general-details-btn">Learn More</button>
            </div>
          </article>
        </div>
        <div className="general-details-container-rev general-details-container">
          <figure className="general-details-image-container">
            <img
              className="general-details-image"
              src={illustration3}
              alt="illustration3"
            />
          </figure>
          <article className="general-details-container-article">
            <h1 className="general-details-heading">
              Leading healthcare providers
            </h1>
            <p className="general-details-para">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone. To us, it’s not just
              work. We take pride in the solutions we deliver
            </p>
            <div className="general-details-btn-container">
              <button className="general-details-btn">Learn More</button>
            </div>
          </article>
        </div>
      </div>
      <Carousel />
      <article className="articles-section">
        <h1 className="articles-section-heading">
          Check out our latest article
        </h1>
        <div className="articles-section-cards-container">
          <div className="articles-section-card">
            <figure className="articles-section-card-image-container">
              <img
                src={image1}
                alt="image1"
                className="articles-section-card-image"
              />
            </figure>
            <h1 className="articles-section-card-heading">
              Disease detection, check up in the laboratory
            </h1>
            <p className="articles-section-card-para">
              In this case, the role of the health laboratory is very important
              to do a disease detection...
            </p>
            <a className="articles-section-card-link">
              <sub>
                Read more <img src={right_arrow_icon} alt="right_arrow_icon" />
              </sub>
            </a>
          </div>
          <div className="articles-section-card">
            <figure className="articles-section-card-image-container">
              <img
                src={image1}
                alt="image1"
                className="articles-section-card-image"
              />
            </figure>
            <h1 className="articles-section-card-heading">
              Disease detection, check up in the laboratory
            </h1>
            <p className="articles-section-card-para">
              In this case, the role of the health laboratory is very important
              to do a disease detection...
            </p>
            <a className="articles-section-card-link">
              <sub>
                Read more <img src={right_arrow_icon} alt="right_arrow_icon" />
              </sub>
            </a>
          </div>
          <div className="articles-section-card">
            <figure className="articles-section-card-image-container">
              <img
                src={image1}
                alt="image1"
                className="articles-section-card-image"
              />
            </figure>
            <h1 className="articles-section-card-heading">
              Disease detection, check up in the laboratory
            </h1>
            <p className="articles-section-card-para">
              In this case, the role of the health laboratory is very important
              to do a disease detection...
            </p>
            <a className="articles-section-card-link">
              <sub>
                Read more <img src={right_arrow_icon} alt="right_arrow_icon" />
              </sub>
            </a>
          </div>
        </div>
        <div className="articles-section-btn-container">
          <button className="articles-section-btn">View all</button>
        </div>
      </article>
      <footer>
        <article className="footer-section">
          <figure>
            <img src={logo} alt="logo_icon" />
          </figure>
          <p className="footer-para">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <sub className="footer-sub">
            ©Trafalgar PTY LTD 2020. All rights reserved
          </sub>
        </article>
        <div className="footer-section">
          <h1 className="footer-heading">Company</h1>
          <ul className="footer-links-container">
            <li className="footer-link-container">
              <a className="footer-link">About</a>
            </li>
            <li className="footer-link-container">
              <a className="footer-link">Testimonials</a>
            </li>
            <li className="footer-link-container">
              <a className="footer-link">Find a doctor</a>
            </li>
            <li className="footer-link-container">
              <a className="footer-link">Apps</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h1 className="footer-heading">Region</h1>
          <ul className="footer-links-container">
            <li className="footer-link-container">
              <a className="footer-link">Indonesia</a>
            </li>
            <li className="footer-link-container">
              <a className="footer-link">Singapore</a>
            </li>
            <li className="footer-link-container">
              <a className="footer-link">Hongkong</a>
            </li>
            <li className="footer-link-container">
              <a className="footer-link">Canada</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h1 className="footer-heading">Help</h1>
          <ul className="footer-links-container">
            <li className="footer-link-container">
              <a className="footer-link">Help center</a>
            </li>
            <li className="footer-link-container">
              <a className="footer-link">Contact support</a>
            </li>
            <li className="footer-link-container">
              <a className="footer-link">Instructions</a>
            </li>
            <li className="footer-link-container">
              <a className="footer-link">How it works</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
