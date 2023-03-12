import React, {useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import "./Header.scss";
import { images } from "../../constants";

const Header = () => {

  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if(document.body.classList.contains('dark')){
      document.body.classList.remove('dark');
    } else{
      document.body.classList.add('dark');
    }
  });

  return (
    <Container className="header-container app__flexCenter" fluid>
      <p></p>
      <div className="header-logo-container app__flexCenter">
        <img
          src={images.toDo}
          alt="To Do"
          className="header-image"
        />
        <h1 className="app__header-text">Or Not</h1>
        <img
          src={images.toDo}
          alt="To Do"
          className="header-image"
        />
      </div>

      <img
        alt="Light/Dark Mode Selector"
        className="header-image-btn header-image"
        onClick={() => setTheme(prevMode => !prevMode)}
        src={theme ? images.darkMode : images.lightMode}
      />
      
    </Container>
  );
};

export default Header;
