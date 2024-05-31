import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="logo">
          <img src="/img/logo.png" alt="logo" />
          <span>.agency</span>
          <p>Head Office</p>
          <a href="https://maps.app.goo.gl/pqHzxo6GfJPUDUMp9">
            Syria - Latakia - grh2+hjx
          </a>
          <br />
          <a href="https://maps.app.goo.gl/pqHzxo6GfJPUDUMp9">35.5199518</a>
        </div>
        <div className="Sales">
          <p>Sales</p>
          <a href="#">
            contact@focal-x.com <br /> +963 953 666 056
          </a>
          <p>Public Relations</p>
          <a href="#">
            pr@focal-x.com <br /> +963 953 666 052
          </a>
        </div>
        <div className="Customer">
          <p>Customer Support</p>
          <a href="#">
            info@focal-x.com <br /> +963 953 666 054
          </a>
          <p>Human Resources</p>
          <a href="#">hr@focal-x.com</a>
        </div>
        <div className="Useful">
          <p>Useful Links</p>
          <span>Clients & Partners</span>
          <span>Check Certificat ID</span>
          <span>Check for employee</span>
          <span>Our Brand ID guidlines</span>
        </div>
        <div className="link">
          <p>Keep In Touch</p>
          <div className="link1">
            <a href="https://www.facebook.com/focal.x.agency/">
              <img src="/img/facebook (1).png" alt="facbebook" />
            </a>
            <a href="https://www.behance.net/focal-x-agency">
              <img src="/img/behance (1).png" alt="behance" />
            </a>
            <a href="https://www.linkedin.com/company/focal-x-agency">
              <img src="/img/linkdin1.png" alt="linkdin" />
            </a>
            <a href="https://www.instagram.com/focal.x.agency/">
              <img src="/img/instgram (1).png" alt="instgram" />
            </a>
            <a href="https://x.com/focal_x_agency?mx=2">
              <img src="/img/twitter (1).png" alt="twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="Reserved">
        <p>© 2021 - 2023 focal X L.L.C All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
