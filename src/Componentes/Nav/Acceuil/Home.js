import react from "react";
import "./Home.css";
import Aside from "../Nav";
import AcceuilImg from '../../images/two-busines.jpg'
import parallaxIt from "../../Img"
export default function Home() {
  return (
    <div className="row main">
      <div className="col-md-2">
        <Aside />
      </div>
      <div className="Homi col-md-10 row ">
        <div className="col-md-6 IIMg">
          <div id="container">
            <img src={AcceuilImg} style={{width:"500px"}}/>

            <div class="slide one"></div>
          </div>
        </div>
        <div className="col-md-5    Pagee">

          <h1>Piland</h1>
          <p>
            A travers l'utilisation des technologies innovantes, nous accompagnons les entreprises souhaitant intégrer les nouvelles technologies dans
            leurs stratégies digitales, dans le but de toucher directement leurs cibles acquérir de nouveaux prospects. Aussi spécialisée dans le
            développement du contenu numérique pour enfants. Actuellement, un jeu consistant à voyager dans le temps par le moyen de la résolution de
            cryptogrammes est en cours de développement.
        </p>

        </div>
      </div>
    </div>
  );
}
