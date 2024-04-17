$(document).ready(function() {
    // Verifique se há uma preferência salva no localStorage
    var themePreference = localStorage.getItem('themePreference');
    if (themePreference === 'dark') {
        $('body').addClass('dark');
    }

    // Adicione o evento de clique para alternar entre os temas
    $('#chec').on('click', function() {
        $('body').toggleClass('dark');
        // Verifique se o tema atual é escuro e salve a preferência no localStorage
        var isDarkMode = $('body').hasClass('dark');
        localStorage.setItem('themePreference', isDarkMode ? 'dark' : 'light');
    });
});
