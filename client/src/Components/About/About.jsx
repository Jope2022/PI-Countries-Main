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
            <div className="div">
             <div className="container">
                <img className="containerAbout" src={img} alt="jose" />
                <h1 className=" h1">Hola </h1>
                <h1>Mi nombre es: </h1>
                    <h1>Jose Maria Perez</h1>
                    <h3 className="h3"> FullStrack Developer</h3>
                    <h3 className="p">"Soy Argentino 45 años Estudiante <br />
                        de Henry y en esta app utilice todo <br /> lo aprendido
                        en el Boodcamp."</h3>
                    <button onClick={() => history.goBack()}>Regresar</button>
                
                      
                    <div className="containerImagenes1 .grupo1">
                 
                    <img className="containerImagenes1 .grupo1" src={redux} alt="redux" />
                    <img className="containerImagenes1 .grupo1" src={css} alt="css" />
                    <img className="containerImagenes1 .grupo1" src={node} alt="node" />
                    <img className="containerImagenes1 .grupo1" src={HTML} alt="HTML" />
                    <h4 className="h4">TECNOLOGUIAS QUE UTILIZE PARA LA APP</h4>
                 
                    <img className="containerImagenes1 .grupo2" src={Post} alt="Post" />
                    <img className="containerImagenes1 .grupo2" src={React} alt="React" />
                    <img className="containerImagenes1 .grupo2" src={Java} alt="Java" />
                    </div>
                </div>
            </div>
    );
}