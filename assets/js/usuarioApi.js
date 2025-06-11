const BASE_URL = 'http://localhost:4000';

// Função para criar usuario
async function criarUsuario(nome, email, senha) {
    const response = await fetch(`${BASE_URL}/usuarios`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email, senha }),
    });
    return response.json();
}

// Função para listar usuarios (GET)
async function listarUsuarios() {
    const response = await fetch(`${BASE_URL}/usuarios`);
    return response.json();
}

// Função para buscar usuario email (GET)
async function buscarUsuarioPorEmail(email) {
    console.log(`Buscando usuário com email: ${email}`);
    const response = await fetch(`${BASE_URL}/usuarios/${email}`);
    return response.json();
}

// Função para atualizar usuario por email (PUT)
async function atualizarUsuario(email, nome, senha) {
    const response = await fetch(`${BASE_URL}/usuarios/${email}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, senha }),
    });
    return response.json();
}

// Função para deletar usuario por ID (DELETE)
async function deletarUsuario(id) {
    const response = await fetch(`${BASE_URL}/usuarios/${id}`, { method: 'DELETE' });
    return response.status === 204; // Retorna true se a exclusão foi bem-sucedida
}

export {
    criarUsuario,
    listarUsuarios,
    buscarUsuarioPorEmail,
    atualizarUsuario,
    deletarUsuario
};