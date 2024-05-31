import "../../styles/Home/Services.css";

const Services = () => {
  return (
    <section id="Services">
      <h1>Our Services</h1>
      <div className="cards">
        <div className="card">
          <h2>Branding</h2>
          <p>The brand is hope,</p>
          <span className="subtitel">
            It is also the source of inspiration for everything you do when you
            deal with your customers and that is the important and emotional
            thing. <b>Your Brand and Visual identity</b> represents an intrinsic
            Value to your company
          </span>
          <p><b>In focal X agency, we provide:</b></p>

          <span className="span">Visual identity design.</span>
          <br />
          <span className="span">Define Brand Identity.</span>
          <br />
          <span className="span">Define Brand personality.</span>
          <br />
          <span className="span"> Building Your brand strategy.</span>
          <br />
          <span className="span">Market research and competitors study.</span>

          <img src="/img/brandingOrange.png" alt="brandingOrange" />
          <p className="last">We walk with you from A to Z.</p>
        </div>
        <div className="card">
          <h2 className="B2B">Marketing</h2>
          <span className="subtitel">
            Talk to your customers and tell them <b>you and your companys</b>
            story through us the way you want.
            <br />
            Let us plan the content that will bring your audience closer to you.
          </span>
          <p>In our marketing agency, we provide:</p>

          <span className="span">E-mail marketing.</span>
          <br />
          <span className="span">Affiliate marketing.</span>
          <br />
          <span className="span">Influencer marketing.</span>
          <br />
          <span className="span">Market research and Analysis.</span>
          <br />
          <span className="span">App store optimization ( ASO ).</span>
          <br />
          <span className="span">Search engine Marketing ( SEM ).</span>
          <br />
          <span className="span">Search engine optimization ( SEO ).</span>
          <br />
          <span className="span">Social media marketing & campaigns.</span>
          <br />

          <img src="/img/markiting.png" alt="markiting" />
        </div>
      </div>
    </section>
  );
};

export default Services;
