import logo from "./logo.svg";
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
              <sub>Read more</sub>
            </a>
          </div>
        </div>
        <div className="articles-section-btn-container">
          <button className="articles-section-btn">View all</button>
        </div>
      </article>
      {/* <div>
        <p>
          <i> italic text </i>
        </p>
        <hr />
        <p>
          <b>bold text </b>
        </p>
        <p>
          <strong> strong text </strong>
        </p>
        <p>
          <em> strong text </em>
        </p>
        <p>
          <sub> subscripted text </sub>
        </p>
        <p>
          <sup> superscripted text </sup>
        </p>
        <p>
          <small> small text </small>
        </p>
        <p>
          <del> deleted text </del>
        </p>
        <p>
          <ins> inserted text </ins>
        </p>
        <p>
          <blockquote> quoted text </blockquote>
        </p>
        <p>
          <q> short quoted text </q>
        </p>
        <p>
          <cite> cited text </cite>
        </p>
        <p>
          <address> address </address>
        </p>
        <p>
          <abbr> inserted text </abbr>
        </p>
        <p>
          <code> code snippet </code>
        </p>
        <br />
        <p>
          <mark> marked text </mark>
        </p>
        <ul>
          <li> HTML </li>
          <li> CSS </li>
          <li> JavaScrip t</li>
        </ul>
        <ol>
          <li> HTML </li>
          <li> CSS </li>
          <li> JavaScript </li>
        </ol>
        <form action="/info_url/" method="post">
          <label for="firstName"> First name: </label>
          <input
            type="text"
            name="firstName"
            placeholder="first name"
            required
          />
          <label for="lastName"> Last name: </label>
          <input type="text" name="lastName" placeholder="last name" required />
          <label for="bio"> Bio: </label>
          <textarea name="bio"></textarea>
          <select id="age">
            <option value="15-18">15-18</option>
            <option value="19-25">19-25</option>
            <option value="26-30">26-30</option>
            <option value="31-36">31-36</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
        <table>
          <thead>
            <tr>
              <th> Course </th>
              <th> Progress </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> HTML </td>
              <td> 90% </td>
            </tr>
            <tr>
              <td> CSS </td>
              <td> 80% </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td> JavaScript </td>
              <td> 95% </td>
            </tr>
          </tfoot>
        </table>
        <header>
          <h1> Welcome </h1>
          <h3> Hello World! </h3>
        </header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </nav>
        <article>
          <h1> An article about us </h1>
          <p> Article content </p>

          <aside>
            <p> It's sunny today </p>
          </aside>
        </article>
        Progress:{" "}
        <progress min="0" max="100" value="50">
          {" "}
        </progress>
        <footer> Copyright 2022-2099. All Rights Reserved. </footer>
      </div> */}
    </div>
  );
}

export default App;
