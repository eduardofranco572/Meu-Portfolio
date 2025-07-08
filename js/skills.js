$(document).ready(() => {
    const titulos = [
        'JavaScript', 
        'jQuery',
        'NodeJs', 
        'TypeScript',
        'React',
        'React Native',
        'Java',
        'Spring Boot',
        'C/C++', 
        'C Sharp',
        'PHP',        
        'MySQL',
        'Tailwindcss',   
        'CSS3', 
        'HTML5'   
    ]

    const niveis = ['5', '5', '5', '4', '5', '3', '4', '3', '3', '3', '4', '4', '4', '5', '5']

    const linksimgs =[
        "devicon-javascript-plain colored",
        "devicon-jquery-plain colored",
        "devicon-nodejs-plain-wordmark colored",
        "devicon-typescript-plain colored",
        "devicon-react-original colored",
        "devicon-react-original colored",
        "devicon-java-plain",
        "devicon-spring-original colored",
        "devicon-cplusplus-plain colored",
        "devicon-csharp-plain colored",
        "devicon-php-plain colored",
        "devicon-mysql-plain-wordmark colored",
        "devicon-tailwindcss-original colored",
        "devicon-css3-plain colored",
        "devicon-html5-plain colored"
    ]


    for (let j = 1; j < titulos.length + 1; j++) {
        let projeto = `
        <div class="teste2323" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <div class="card1">
                <div class="junta">
                    <div class="elements">
                        <i class="${linksimgs[j - 1]}"></i>
                        <h1 class="txt2">${titulos[j - 1]}</h1>
                    </div>
                    <div class="nivel tooltip" title="Isso indica qual meu nível de conhecimento desta linguagem!">
                        <div class="alinhaNivel">
                            <span class="material-symbols-outlined">star</span>
                            <h1 class="valor2">${niveis[j - 1]}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        $('.cards').append(projeto);
    }
})

