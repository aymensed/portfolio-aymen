import React, { useState } from 'react';
import './web3d.css'; // Assurez-vous d'avoir un fichier CSS stylisé
import tp1ImageOld from './chaise.png';
import tp1ImageNew1 from './frame14.png';
import tp1ImageNew2 from './frame11.png';
import tp1ImageNew3 from './frame13.png';
import tp1ImageNew4 from './frame12.png';

const images = [tp1ImageOld, tp1ImageNew1, tp1ImageNew2, tp1ImageNew3, tp1ImageNew4];

const Web3D = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const handlePrev = () => {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };

    const downloadImage = () => {
        const link = document.createElement("a");
        link.href = images[currentImage];
        link.download = `image${currentImage + 1}.png`;
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
        alt = { `Image ${currentImage + 1}` }
        className = "tp-image" / >
        <
        button onClick = { downloadImage }
        className = "download-button" > Télécharger l 'image</button> <
        /div> <
        button onClick = { handleNext }
        className = "nav-button next" > ❯ < /button> <
        /div> <
        /div> <
        />
    );
};

export default Web3D;