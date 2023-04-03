$(document).ready(() => {
    const projetos = ['TCC-ELETRÔNICA', 'Carrossel', 'PlayStation-Dashboard', 'Streaming_Movie', 'Loja de Roupa', 'TCC-DS']
    const links = ['https://github.com/eduardofranco572/TCC-ELETRONICA', 'https://github.com/eduardofranco572/Carrossel', 'https://github.com/eduardofranco572/PlayStation-Dashboard', 'https://github.com/eduardofranco572/Streaming_Movie', 'https://github.com/eduardofranco572/Story_Geek', 'https://github.com/eduardofranco572/TCC-DS']

    for (let j = 1; j < 7; j++) {
        let projeto = `
            <div class="wrapper">
                <img class="im${j}" src="img/img-projetos/img${j}.png">
                <div class="baixo-porjeto" id="baixo${j}">
                    <div class="responsivo">
                        <div class="dentro-baixo">
                            <h1 class="txtsdentro">${projetos[j - 1]}</h1>
                            <div>
                                <h1 class="sinal"><span id="mais${j}">+</span></h1>
                            </div>
                        </div>
                        <div class="animado" id="animados${j}">
                            <div class="acessar">
                                <h1 class="ace"><a target="_blank" rel="noreferrer" href="${links[j - 1]}">Acessar</a></h1>
                                <a target="_blank" rel="noreferrer" href="${links[j - 1]}"><img src="img/folder-svgrepo-com.svg"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        $('.grupo-projeto').append(projeto);
    }
})
$(document).ready(() => {
    $('.sinal').on('click', function () {
        let div = $(this).parent().parent().parent().parent();
        let div2 = $(this).parent().parent().parent().parent().siblings();
        let div3 = $(this).parent().parent().parent().children('.animado')
        
        if ($(this).children().html() == '+') {
            $(div2).css('filter', 'blur(1px)')
            $(div).css('height', '12rem')
            $(div).css('marginTop', '-8rem')
            $(div).css('position', 'relative')
            $(div).css('transition', '0.5s')
            $(div3).css('display', 'block')
            $(this).children().html('-')

        } else {
            $(div2).css('filter', 'blur(0px)')
            $(div).css('height', '6rem')
            $(div).css('marginTop', '-1rem')
            $(div).css('position', 'relative')
            $(div).css('transition', '0.5s')
            $(div3).css('display', 'none')
            $(this).children().html('+')
        }
    })
})
