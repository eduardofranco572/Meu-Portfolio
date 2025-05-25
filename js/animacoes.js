$(document).ready(function() {
    //anima botão curriculo
   

    //aparecer popUp
    $("#click").click(function() {
        Swal.fire({
            html: '<h1 class="alerttitulo"> Estão listados mais de 40 projetos no meu GitHub.</h1>'
        });
    });

    $("#click2").click(function() {
        Swal.fire({
            html: '<h1 class="alerttitulo"> Tenho mais de 3 anos de conhecimento como desenvolvedor!</h1>'
        });
    });

    $("#click3").click(function() {
        Swal.fire({
            html: '<h1 class="alerttitulo"> Já realizei 3 cursos profissionalizantes como técnico e graduação. E também vários cursos realizados online em plataformas de ensino, sendo elas: alura, udemy entre outras.</h1>'
        });
    });

    //menu mobile 
    let show = true;
    const menuSection = $(".menu-section");
    const menuToggle = menuSection.find(".menu-toggle");

    menuToggle.click(function() {
        // $("body").css("overflow", show ? "hidden" : "initial");
        menuSection.toggleClass("on", show);
        show = !show;
    });
    
    //animar proficiência em sobre
    const linguagensProf = $('#linguagensProf');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                linguagensProf.addClass('animar');
            } else {
                linguagensProf.removeClass('animar');
            }
        });
    }, { threshold: 0.5 }); // Definindo um threshold de 0.5 para o elemento ser considerado visível quando metade estiver na tela

    observer.observe(linguagensProf[0]);

    //animar carousel do sobre
    $("#nexball").click(function() {
        $(this).css("background-color","#097dea")
        $("#beckball").css("background-color", "transparent")
        $(".elements1").addClass('animExit')
        $('.elements1').css("display","none")
        $('.elements2').css("display","flex")
    });

    $("#beckball").click(function() {
        $(this).css("background-color","#097dea")
        $("#nexball").css("background-color", "transparent")
        $('.elements2').css("display","none")
        $('.elements1').css("display","flex")
    });

});
  