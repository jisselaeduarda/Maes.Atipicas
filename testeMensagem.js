const fetch = require('node-fetch'); // Se não tiver, instale com: npm install node-fetch@2

async function enviarMensagem(texto) {
  const response = await fetch('http://localhost:3333/mensagem', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ texto })
  });

  const data = await response.json();
  console.log('Status:', response.status);
  console.log('Resposta:', data);
}

// Teste com uma mensagem boa
enviarMensagem('olá, tudo bem?');

// Teste com palavrão
enviarMensagem('Porra');
