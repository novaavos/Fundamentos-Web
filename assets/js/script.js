let nome = window.document.getElementById('username');
let senha = window.document.getElementById('pwd');
let button = window.document.getElementById('button');

let nomeOk = false;
let senhaOk = false;

let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')


function validaNome(){
    let txtNome = document.querySelector('#txtNome');
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red';
        nome.style.borderColor = 'red'
        nomeOk = false;
    } else {
        txtNome.innerHTML = '';
        nome.style.borderColor = 'white'
        nomeOk = true;
    }
}


// Checa se a senha colocada é fraca, média ou forte e mostra um texto com uma cor correspondente
function pwdCheck(){
    let txtPwd = document.querySelector('#pwdText');
    if(senha.value.length > 0){
        senhaOk = true;
        if(strongPassword.test(senha.value)){
            txtPwd.innerHTML = 'Senha forte';
            txtPwd.style.color = 'green'
        } else if (mediumPassword.test(senha.value)){
            txtPwd.innerHTML = 'Senha média';
            txtPwd.style.color = 'yellow'
        } else {
            txtPwd.innerHTML = 'Senha fraca';
            txtPwd.style.color = 'red'
        }
    } else {
        senhaOk = false;
        txtPwd.innerHTML = '';
    }
}

function enviar(){
    if(nomeOk && senhaOk)
        alert('Logado!')
    else 
        alert('Verifique os campos em vermelho!')
}