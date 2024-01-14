import { useState } from "react";
import Header from "../../components/header";
import "./contact.css";

function ConactPage() {
  const Popup = () => {
    return (
      <div className="popup">
        <p>Submitted!</p>
        <button onClick={handlePopupClose}>Close</button>
      </div>
    );
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <Header />
      <div>
        <h1>Contact</h1>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde, ab
          et asperiores aliquam alias placeat fugiat, nihil officia ipsam
          corporis labore necessitatibus? Consequatur explicabo enim aut
          deserunt cumque possimus harum eveniet corrupti cum minima omnis
          ullam, eaque consequuntur aspernatur optio soluta. Ex doloremque quod
          similique omnis magnam! Tempora, recusandae.
        </p>
        <br />
        <div className="contact-card">
          <div className="input-container">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
          </div>
          <button onClick={handleButtonClick}>Submit</button>
          {isPopupOpen && <Popup />}
        </div>
      </div>
    </>
  );
}

export default ConactPage;
