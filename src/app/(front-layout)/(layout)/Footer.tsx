import "./index.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="heading">
            <h1>E-COMMERCE</h1>
          </div>
          <div className="content">
            <div className="services">
              <h4>Services</h4>
              <p>
                <a href="#">App development</a>
              </p>
              <p>
                <a href="#">Web development</a>
              </p>
              <p>
                <a href="#">DevOps</a>
              </p>
              <p>
                <a href="#">Web designing</a>
              </p>
            </div>
            <div className="social-media">
              <h4>Social</h4>
              <p>
                <a href="https://www.linkedin.com/in/savlatbek-abdullayev-875933252/">
                  <i className="fab fa-linkedin"></i> Linkedin
                </a>
              </p>
              <p>
                <a href="#">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </p>
              <p>
                <a href="https://github.com/Savlatbek009">
                  <i className="fab fa-github"></i> Github
                </a>
              </p>
              <p>
                <a href="https://www.facebook.com/savlatbekCoder">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/savlatbek_coder">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </p>
            </div>
            <div className="links">
              <h4>Quick links</h4>
              <p>
                <a href="/">Home</a>
              </p>
              <p>
                <a href="/about">About</a>
              </p>
              <p>
                <a href="/all-products">All Products</a>
              </p>
              <p>
                <a href="/contact">Contact</a>
              </p>
            </div>
            <div className="details">
              <h4 className="address">Address</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit. Cupiditate, qui!
              </p>
              <h4 className="mobile">Mobile</h4>
              <p>
                <a href="#">+998-(90)-447-75-15</a>
              </p>
              <h4 className="mail">Email</h4>
              <p>
                <a href="#">savlatbek009@gmail.com</a>
              </p>
            </div>
          </div>
          <footer>
            <hr />© 2023 as_coder.
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
