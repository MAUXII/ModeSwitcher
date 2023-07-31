
window.addEventListener('load', () => {

    var horarioAtual = new Date().getHours();

var tituloElement = document.querySelector('.titulo');
if (horarioAtual >= 5 && horarioAtual < 12) {
    tituloElement.textContent = 'Olá, bom dia';
} else if (horarioAtual >= 12 && horarioAtual < 18) {
    tituloElement.textContent = 'Olá, boa tarde';
} else {
    tituloElement.textContent = 'Olá, boa noite';
}

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-mode');
        moonIcon.style.display = 'none';
    sunIcon.style.display = 'block'
    toggle.classList.add('dark-mode2');
           line.style.backgroundColor = 'white';
           document.querySelector('.subtitulo2').innerHTML = 'Caso tenha iniciado nesse tema e não sabe o porquê, <strong> <a href="https://youtu.be/wKcadZpsEuo" target="_blank">clique aqui</a> </strong>';
           
    }

    else {
            moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
    body.classList.remove('dark-mode');
            toggle.classList.remove('dark-mode2')

           line.style.backgroundColor = '#333333';
           document.querySelector('.subtitulo2').innerHTML = 'Caso tenha iniciado nesse tema e não sabe o porquê, <strong> <a href="https://youtu.be/wKcadZpsEuo" target="_blank">clique aqui</a> </strong>';
           
        }

        var btnSaudar = document.querySelector('.btnSaudacao');
    var inputNome = document.querySelector('.nameInput');
    var saudacaoElement = document.getElementById('saudacao');
    var nomeInput = document.getElementById('nomeInput');

    btnSaudar.addEventListener('click', () => {
        var nome = inputNome.value;
        if (nome.trim() !== '') {
            saudacaoElement.textContent = `Olá, ${nome}!`;
            nomeInput.style.display = 'none';
        }
    });

    function atualizarRelogio() {
        var relogioElement = document.getElementById('relogio');
        var dataHoraAtual = new Date();
        var hora = formatarNumero(dataHoraAtual.getHours());
        var minuto = formatarNumero(dataHoraAtual.getMinutes());
        var segundo = formatarNumero(dataHoraAtual.getSeconds());
        var horarioAtual = `${hora}:${minuto}:${segundo}`;
        relogioElement.textContent = horarioAtual;
    }

    
    function formatarNumero(numero) {
        return numero < 10 ? `0${numero}` : numero;
    }

    setInterval(atualizarRelogio, 1000);

});
var nomedoinput = document.querySelectorAll('.nameInput');
var toggle = document.querySelectorAll('.toggle')[0];
var body = document.body
var moonIcon = document.querySelector('.bi-moon-fill');
var sunIcon = document.querySelector('.bi-brightness-high-fill');
var line = document.querySelector('.linha');

toggle.addEventListener('click', () => {
 body.classList.toggle('dark-mode')
 if(body.classList.contains('dark-mode')){
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block'
            document.querySelector('.subtitulo').innerHTML = 'Essa é uma apresentação simples de Dark Mode';
            toggle.classList.add('dark-mode2');
           line.style.backgroundColor = 'white';
           document.querySelector('.subtitulo2').style.display = 'none';
           nomedoinput.classList.add('dark-mode3')
           


        }
        else {
            moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';

            document.querySelector('.subtitulo').innerHTML = 'Essa é uma apresentação simples de White Mode';

            toggle.classList.remove('dark-mode2')

           line.style.backgroundColor = '#333333';

           document.querySelector('.subtitulo2').style.display = 'none';

           

        }


    
});


