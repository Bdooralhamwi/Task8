import "../../styles/Home/Hero.css";

const Hero = () => {
  return (
    <section id="Home">
      <h1>Hey !! Mario still here, But don’t forget that</h1>
      <p>
        At focal X agency, we are working to build somthing different. Here
        you’ll have a group of creative people who specialize in: Branding,
        Digital Marketing, Web/App Development, Ui/Ux Content creation, Graphic
        design, Social media and More........ So you can take a tour in our
        website, OR just <b>Press Start :)</b>
      </p>
      <div className="imags">
        <img className="game" src="/img/gameBoy-min.png" alt="game" />
        <img className="press" src="/img/pressStart.svg" alt="press" />
        <img className="fotter" src="/img/fotter.svg" alt="fotter" />
        <img className="pattren" src="/img/pattren.png" alt="pattren" />
      </div>
      <div className="imags1">
        <img
          className="mobile"
          src="/img/footer-mobile.png"
          alt="footer-mobile"
        />
        <img
          className="gamefor"
          src="/img/gamefor-mobile.png"
          alt="gamefor-mobile"
        />
        <div className="links1">
          <div className="links2">
            <p>Get better experience Use web browser</p>
            <a href="https://www.facebook.com/focal.x.agency/">
              <img src="/img/facebook.png" alt="facebook" />
            </a>
            <a href="https://www.behance.net/focal-x-agency">
              <img src="/img/behance.png" alt="behance" />
            </a>
            <a href="https://www.linkedin.com/company/focal-x-agency">
              <img src="/img/linkedin.png" alt="linkedin" />
            </a>
            <a href="https://www.instagram.com/focal.x.agency/">
              <img src="/img/instgram.png" alt="instgram" />
            </a>
            <a href="https://x.com/focal_x_agency?mx=2">
              <img src="/img/twitter.png" alt="twitter" />
            </a>
            <p>© 2021 - 2022 focal X agency All Right Reserved</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="links">
          <a href="https://www.facebook.com/focal.x.agency/">
            <img src="/img/facebook.png" alt="facebook" />
          </a>
          <a href="https://www.behance.net/focal-x-agency">
            <img src="/img/behance.png" alt="behance" />
          </a>
          <a href="https://www.linkedin.com/company/focal-x-agency">
            <img src="/img/linkedin.png" alt="linkedin" />
          </a>
          <a href="https://www.instagram.com/focal.x.agency/">
            <img src="/img/instgram.png" alt="instgram" />
          </a>
          <a href="https://x.com/focal_x_agency?mx=2">
            <img src="/img/twitter.png" alt="twitter" />
          </a>
        </div>
        <a className="scroll" href="#Services">
          <img src="/img/scroll.png" alt="scroll" />
          Scroll To Discover
        </a>
        <p>© 2021 - 2022 focal X agency All Right Reserved</p>
      </div>
    </section>
  );
};

export default Hero;
