import "../styles/header.css";
import "../styles/images.css";


export function Header() {
  
  return (
    <>
   
      <img
        className="logoImg"
        src="atpLogo.png" // Replace with your image URL
        alt="Placeholder"
        width={"175px"}
        draggable="false"
      />
 
      <ul className="menu">
        <label htmlFor="responsive-menu" className="menu-label">
          hello
        </label>

        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#offers">Offers</a>
        </li>
        <li>
          <a href="#Referrals">Referrals</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    
      
    </>
  );
}
