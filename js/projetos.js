$(document).ready(() => {
    const projetos = [
        'Real Time Chat', 
        'FrontEnd Spotify',
        'FrontEnd Car Hotsite', 
        'Streaming Movie', 
        'TCC DS',
        'PlayStation Dashboard' 
    ];
    const links = [
        'https://github.com/eduardofranco572/Real-Time-Chat',
        'https://github.com/eduardofranco572/Front-End-Spotify',
        'https://github.com/eduardofranco572/Front-End-Car-Hotsite',
        'https://github.com/eduardofranco572/Streaming_Movie',
        'https://github.com/eduardofranco572/TCC-DS',
        'https://github.com/eduardofranco572/PlayStation-Dashboard'
    ];

    for (let j = 1; j <= projetos.length; j++) {
        const projetoHTML = `
            <div class="wrapper" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <a class="link-projeto" target="_blank" rel="noreferrer" href="${links[j - 1]}">
                    <img class="im${j}" src="img/img-projetos/img${j}.png" alt="${projetos[j - 1]}">
                </a>
                <div class="baixo-projeto" id="baixo${j}">
                    <div class="responsivo">
                        <h1 class="txtsdentro">${projetos[j - 1]}</h1>
                    </div>
                </div>
            </div>
        `;
        $('.grupo-projeto').append(projetoHTML);
    }
});
