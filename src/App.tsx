import "./styles/background.css";
import "./App.css";
import Helmet from "react-helmet";
import { Header } from "./componets/Header";
import { Home } from "./componets/Home";
import { Boxes } from "./componets/Boxes";
import { Carousel } from "./componets/Csrousel";
import { Offers } from "./componets/Offers";
import { ContactForm } from "./componets/ContactForm";
import { Referrals } from "./componets/Referrals";
import { Image }  from "./componets/image"

// import { Video } from "./componets/Video";
function App() {
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" type="image/x-icon" />;
  return (
    <>
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>ExPhys Partners LLC</title>
          <link rel="canonical" href="http://mysiteExample" />
          <meta name="description" content="exercise physiology" />
        </Helmet>
        <div className="background">
          <Header />
          <Carousel />
          <Image />
          <Home />
          <div className="parallax-image2"></div>
          <Boxes />
          <Offers />
          <Referrals/>
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default App;
