const main = document.querySelector("main");

for (let i = 0; i<data.length; i++) {
    let appContainer = document.createElement("div");
    appContainer.id = data[i].id+i;
    appContainer.classList.add("appContainer");
    main.appendChild(appContainer);

    let header = document.createElement('header');
    let link = document.createElement('a');
    link.setAttribute("href", data[i].href);
    link.insertAdjacentHTML("beforeend", "<h3>"+data[i].title+"</h3>");
    header.appendChild(link);
    appContainer.appendChild(header);

    let section = document.createElement("section");
    section.insertAdjacentHTML("beforeend", "<p>"+data[i].description+"</p>");
    appContainer.appendChild(section);
} 



/*
<header>
<a href="https://quizimix.pythonanywhere.com">
    <h3>Quizimix</h3>
</a>
</header>
<section>
<p>
    Une application web qui te fais réviser les expérience de physique-chimie et le matériel nécessaire.
</p>
</section>



*/