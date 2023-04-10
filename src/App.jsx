import { useState } from "react";
import Header from "./sections/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faUser,
  faDollarSign,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
//  <FontAwesomeIcon icon={faBolt} />
//       <FontAwesomeIcon icon={faUser} />
//       <FontAwesomeIcon icon={faDollarSign} />
//       <FontAwesomeIcon icon={faFacebookSquare} />
//       <FontAwesomeIcon icon={faTwitter} />
//       <FontAwesomeIcon icon={faPinterest} style={{ color: "#000000" }} />
//       <FontAwesomeIcon icon={faInstagram} />
//       <FontAwesomeIcon icon={faBars} />
//       <FontAwesomeIcon icon={faXmark} />
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App font-body">
      <Header />
    </div>
  );
}

export default App;
