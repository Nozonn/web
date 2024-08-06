/* ===== Return a dict which contains the sites'data ===== */
function appData(id, title, href, description) {
    return {
        id: id,
        title: title,
        href: href,
        description: description
    };
};


window.data = [
    appData(
        "tout-noir-tout-blanc",
        "Tout Noir Tout Blanc",
        "https://nozonn.github.io/Tout-Noir-Tout-Blanc/",
        "Jeu dans lequel le but est de mettre toutes les cases de la même couleur (noir ou blanc)."
    ),

    appData(
        "irregular-verbs",
        "Learn Irregular Verbs",
        "https://nozonn.github.io/",
        "S'entraîner à apprendre quelque verbes irréguliers"
    ),

    appData(
        "enghlish-voc",
        "English Voc",
        "https://english-voc.onrender.com/",
        "Vocabulaire d'anglais."
    ),

    appData(
        "quizimix",
        "Quizimix",
        "https://quizimix.pythonanywhere.com",
        "Une application web qui te fais réviser les expérience de physique-chimie et le matériel nécessaire."
    )
];