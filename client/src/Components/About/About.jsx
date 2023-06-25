import img from "../../Img/Jose.jpg"
import redux from "../../Img/redux.png"
import css from "../../Img/css.png"
import node from "../../Img/node.png"
import HTML from "../../Img/HTML.png"
import React from "../../Img/React.jpg"
import Post from "../../Img/Post.png"
import Java from "../../Img/Java.png"
import { useHistory } from 'react-router-dom';
import "./About.css"

export default function About() {
    const history = useHistory();
    return (
           <div className="bodyAbout ">
            <div className="containerAbout">
              <img className="imgAbout" src={img} alt="jose" />
               <h1>Hola </h1>
                <h2>Mi nombre es:</h2>
                    <h3>Jose Maria Perez</h3>
                    <h4> Full Strack Developer</h4>
                    <p>"Soy Argentino 45 años Estudiante <br />
                        de Henry y en esta app utilice todo <br /> lo aprendido
                        en el Boodcamp." </p>
                    <h5>Titulo "Programador Superior"</h5>
                    <button  onClick={() => history.goBack()}>Regresar</button>                   
                 
                    <div className="tech-containerAbout">
                 <div className="tech-container img ">
                 <h5>TECNOLOGUIAS QUE UTILIZE PARA LA APP</h5>
                    <img src={redux} alt="redux" />
                    <img src={css} alt="css" />
                    <img src={node} alt="node" />
                    <img src={HTML} alt="HTML" />
                    <img src={Post} alt="Post" />
                    <img src={React} alt="React" />
                    <img src={Java} alt="Java" />
                    </div>
                    </div>
                </div>
                </div>
    );
}