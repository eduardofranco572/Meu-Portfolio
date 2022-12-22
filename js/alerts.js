alert1 = document.getElementById("click")
alert2 = document.getElementById("click2")
alert3 = document.getElementById("click3")
alert4 = document.getElementById("click4")

alert1.addEventListener('click', function(event) {
    Swal.fire(
        '<h1 class="alerttitulo"> Estão listados 22 projetos no meu GitHub, mais eu realizei muito mais projetos, ao decorrer do curso técnico e desse 1 ano e meio</h1>'
        )
});

alert2.addEventListener('click', function(event) {
    Swal.fire(
        '<h1 class="alerttitulo"> Tenho 1 ano e meio de conhecimento como desenvolvedor!</h1>'
        )
});

alert3.addEventListener('click', function(event) {
    Swal.fire(
        '<h1 class="alerttitulo"> Já realizei ao todo 25 cursos durante esse período de 1 ano e meio, sendo 2 cursos técnicos presenciais e os outros 23 cursos foram realizado online em plataformas de ensino, sendo elas: alura, udemy entre outras.</h1>'
        )
});
