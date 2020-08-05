import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';
import api from '../../services/api';

function Landing(){
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(()=>{
        api.get('/connections').then(res =>{
            const { total } = res.data;

            setTotalConnections(total)
        })
    },[]);

    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logo} alt="logotipo" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landing}
                    alt="plataforma de estudos" 
                    className="hero-image"
                />
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="estudar" />
                            Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="dar auas" />
                            Dar aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={PurpleHeartIcon} alt="coração roxo"/>
                </span>
            </div>
        </div>
    );
}

export default Landing;