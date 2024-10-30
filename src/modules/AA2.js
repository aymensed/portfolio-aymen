import React from 'react';
import './AA2.css';

const AA2 = () => {
    // Tableau contenant les noms des fichiers et les chemins pour chaque exercice
    const exercises = [
        { name: "Exercice 1 : Convex Optimization Basics", filePath: './tpaa2/tp1-ex1-aa2.ipynb' },
        { name: "Exercice 2 : Simple Linear Regression", filePath: './tpaa2/tp1-ex2-aa2.ipynb' },
        { name: "Exercice 3 : Multiple Linear Regression", filePath: './tpaa2/tp1-ex3-aa2.ipynb' },
        { name: "Exercice 4 : Nonlinear Regression", filePath: './tpaa2/tp1-ex4-aa2.ipynb' },
        { name: "Exercice 5 : Logistic Regression", filePath: './tpaa2/tp1-ex5-aa2.ipynb' },
        { name: "Exercice 6 : Regularization with Ridge Regression", filePath: './tpaa2/tp1-ex6-aa2.ipynb' }
    ];

    // Fonction pour télécharger un fichier .ipynb
    const downloadFile = (filePath, fileName) => {
        const link = document.createElement("a");
        link.href = filePath;
        link.download = fileName;
        link.click();
    };

    return ( <
        >
        <
        div className = "header-module" >
        <
        h1 > Apprentissage Automatique 2(AA2) < /h1> <
        /div>

        <
        div className = "aa2-content" >
        <
        h2 > TP1: Convex Optimization, Regression and Regularization < /h2> <
        p >
        The following lab consists of six exercises covering key concepts in statistical learning such as convex optimization, simple and multiple linear regression, nonlinear regression, logistic regression, and regularization techniques <
        /p>

        <
        div className = "exercises-list" > {
            exercises.map((exercise, index) => ( <
                div key = { index }
                className = "exercise-item" >
                <
                h3 > { exercise.name } < /h3> <
                button onClick = {
                    () => downloadFile(exercise.filePath, `${exercise.name}.ipynb`) }
                className = "download-button" >
                Télécharger <
                /button> <
                /div>
            ))
        } <
        /div> <
        /div> <
        />
    );
};

export default AA2;