import { buscarUsuarioPorEmail, criarUsuario } from './usuarioApi.js';

async function handleLoginSubmit(e) {
    e.preventDefault();
    const email = document.querySelector('#loginForm input[type="text"]').value;
    const senha = document.querySelector('#loginForm input[type="password"]').value;

    const usuario = await buscarUsuarioPorEmail(email);
    console.log(usuario);
    if (usuario && usuario.senha === senha) {
        document.dispatchEvent(
            new KeyboardEvent(
                'keydown', {
                    key: 'Escape',
                    code: 'Escape',
                    keyCode: 27,
                    which: 27
                }
            )
        );
        alert(`Bem-vindo, ${usuario.nome || 'usuário'}!`);
    }  else {
        alert('Usuário ou senha inválidos.');
    }
}

async function handleRegisterSubmit(e) {
    e.preventDefault();
    const nome = document.querySelector('regUsuario').value;
    const email = document.querySelector('regEmail').value;
    const senha = document.querySelector('regSenha').value;

    try {
        await criarUsuario(nome, email, senha);
        document.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'Escape',
            code: 'Escape',
            keyCode: 27,
            which: 27
        }));
        alert('Usuário cadastrado com sucesso!');
    } catch (error) {
        alert('Erro ao cadastrar usuário!');
    }
}

// Inicialização do listener
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLoginSubmit);
    }

    const registerForm = document.querySelector('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegisterSubmit);
    }
})