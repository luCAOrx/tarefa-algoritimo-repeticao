for (let i = 0; i < 100; i++) {
    let usuario = prompt('Digite seu nome de usuario');
    let senha = prompt('Digite sua senha');
    if (usuario != senha) {
        break;
    } else
    alert('Erro Usuario ou Senha inválidos!');
}

alert('Logando...');
