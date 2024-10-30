import React, { useState } from 'react';
import './web3d.css'; // Assurez-vous d'avoir un fichier CSS stylisé
import tp1ImageOld from './chaise.png';
import tp1ImageNew1 from './frame14.png';
import tp1ImageNew2 from './frame11.png';
import tp1ImageNew3 from './frame13.png';
import tp1ImageNew4 from './frame12.png';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import modelPath from './photo3d.glb';

// Tableau d'images
const images = [tp1ImageOld, tp1ImageNew1, tp1ImageNew2, tp1ImageNew3, tp1ImageNew4];

// Composant pour charger et afficher le modèle 3D
const Model = () => {
    const { scene } = useGLTF(modelPath); // Utilisez le modèle importé
    return <primitive object = { scene }
    scale = {
        [1, 1, 1] }
    />;
};

const Web3D = () => {
    const [currentImage, setCurrentImage] = useState(0);

    // Fonction pour changer à l'image précédente
    const handlePrev = () => {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    };

    // Fonction pour changer à l'image suivante
    const handleNext = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };

    // Fonction pour télécharger l'image actuelle
    const downloadImage = () => {
        const link = document.createElement("a");
        link.href = images[currentImage];
        link.download = `image${currentImage + 1}.png`;
        link.click();
    };

    // Fonction pour télécharger le fichier TP
    const downloadTP = () => {
        const link = document.createElement("a");
        link.href = './TP1.blend'; // Remplacez par le chemin correct vers votre fichier
        link.download = 'TP1.blend';
        link.click();
    };

    return ( <
        >
        <
        div className = "header-module" >
        <
        h1 > Module Web3D < /h1> <
        /div>

        <
        div className = "web3d-container" >
        <
        h2 > TP1: Création d 'une scène avec Blender</h2> <
        p >
        L 'objectif de ce TP est de créer une scène avec Blender. Voici les différentes versions de la scène de la chaise : <
        /p>

        <
        div className = "carousel-container" >
        <
        button onClick = { handlePrev }
        className = "nav-button prev" > ❮ < /button> <
        div className = "image-frame" >
        <
        img src = { images[currentImage] }
        alt = { `Version ${currentImage + 1} de la chaise` }
        className = "tp-image" / >
        <
        button onClick = { downloadImage }
        className = "download-button3d" > Télécharger l 'image</button> <
        /div> <
        button onClick = { handleNext }
        className = "nav-button next" > ❯ < /button> <
        /div>

        { /* Ajoutez le Canvas pour le modèle 3D */ } <
        div className = "image-frame" >
        <
        div className = "three-container" >
        <
        h2 > Modèle 3 D de la Scène < /h2> <
        Canvas className = "three-canvas"
        camera = {
            { position: [-10, 15, 20], fov: 45 } } >
        <
        ambientLight intensity = { 0.5 }
        /> <
        pointLight position = {
            [10, 10, 10] }
        /> <
        Model / >
        <
        OrbitControls / >
        <
        /Canvas> <
        /div> <
        button onClick = { downloadTP }
        className = "download-button3d" > Télécharger TP1 < /button> <
        /div> <
        /div> <
        />
    );
};

export default Web3D;