import React from 'react';
import './web3d.css'; // Fichier CSS pour les styles
import tp1ImageOld from './chaise.png'; // Ancienne version de l'image
import tp1ImageNew1 from './frame14.png'; // Nouvelle version améliorée 1
import tp1ImageNew2 from './frame11.png'; // Nouvelle version améliorée 2
import tp1ImageNew3 from './frame13.png'; // Nouvelle version améliorée 3
import tp1ImageNew4 from './frame12.png'; // Nouvelle version améliorée 3

const Web3D = () => {
    return ( <
        div className = "web3d-container" >
        <
        h1 > Module Web 3 D < /h1> <
        h2 > TP1: Création d 'une scène avec Blender</h2> <
        p >
        L 'objectif de ce TP est de créer une scène avec Blender. Voici les différentes versions de la scène de la chaise : <
        /p>

        { /* Affichage de la version ancienne de la scène */ } <
        div className = "image-container" >
        <
        h3 > Version Ancienne < /h3> <
        img src = { tp1ImageOld }
        alt = "Ancienne scène créée avec Blender"
        className = "tp-image" / >
        <
        /div>

        { /* Affichage des versions améliorées de la scène */ } <
        div className = "image-container" >
        <
        h3 > Versions Améliorées < /h3> <
        img src = { tp1ImageNew1 }
        alt = "Scène améliorée 1"
        className = "tp-image" / >
        <
        img src = { tp1ImageNew2 }
        alt = "Scène améliorée 2"
        className = "tp-image" / >
        <
        img src = { tp1ImageNew3 }
        alt = "Scène améliorée 3"
        className = "tp-image" / >
        <
        img src = { tp1ImageNew4 }
        alt = "Scène améliorée 4"
        className = "tp-image" / >
        <
        /div> <
        /div>
    );
};

export default Web3D;