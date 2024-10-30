import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assurez-vous d'importer le fichier CSS
import aymenPic from './images/aymenpic.png';

const Home = () => {
    return ( <
        div className = "home-container" > { /* Section pour la photo et les informations personnelles */ } <
        div className = "profile-section" >
        <
        img src = { aymenPic }
        alt = "Profil"
        className = "profile-photo" / >
        <
        div >
        <
        h1 > Sedjal Mohamed Aymen Dhia Eddine < /h1> <
        p > Année: Master 2 < /p> <
        p > Spécialité: IDTW < /p> <
        p > Groupe: 2 < /p> <
        p > Université Ferhat Abbas Sétif 1 < /p> <
        p > Email: aymensedjal19 @gmail.com < /p> <
        /div> <
        /div>

        { /* Section pour les modules */ } <
        div className = "modules-section" >
        <
        h2 > Mes Modules: < /h2> <
        div className = "modules-grid" >
        <
        div className = "module-card" >
        <
        Link to = "/Web3D"
        className = "module-name" > Web 3 D < /Link> <
        /div> <
        div className = "module-card" >
        <
        Link to = "/AA2"
        className = "module-name" > Apprentissage automatique 2 < /Link> <
        /div> <
        div className = "module-card" >
        <
        Link to = "/WM"
        className = "module-name" > WEB MINING < /Link> <
        /div> <
        div className = "module-card" >
        <
        Link to = "/RI"
        className = "module-name" > Recherche d’ informations < /Link> <
        /div> <
        div className = "module-card" >
        <
        Link to = "/SMA"
        className = "module-name" > Systèmes multi - agents < /Link> <
        /div> <
        div className = "module-card" >
        <
        Link to = "/ED"
        className = "module-name" > Entrepôts de données < /Link> <
        /div> <
        /div> <
        /div> <
        /div>
    );
};

export default Home;