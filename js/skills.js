$(document).ready(() => {
    const titulos = ['jQuery', 'JavaScript', 'CSS3', 'HTML5', 'MySQL', 'C/C++', 'C Sharp', 'React Native', 'Bootstrap', 'React', 'PHP', 'NodeJs', 'TypeScript']
    const niveis = ['MEDIO', 'ALTO', 'ALTO', 'ALTO', 'MEDIO', 'BAIXO', 'BAIXO', 'MEDIO', 'MEDIO', 'MEDIO', 'ALTO', 'MEDIO','BAIXO']

    for (let j = 1; j < 14; j++) {
        let projeto = `
        <div class="teste2323" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <div class="card1">
                <div class="junta">
                    <div class="elements">
                        <img src="img/linguagens/img${j}.svg">
                        <h1 class="txt2">${titulos[j - 1]}</h1>
                    </div>
                    <div class="nivel">
                        <h1 class="valor2"><span class="tooltip" title="Isso indica qual meu nível de conhecimento desta linguagem!">${niveis[j - 1]}</span></h1>
                    </div>
                </div>
            </div>
        </div>
        `
        $('.cards').append(projeto);
    }
})

