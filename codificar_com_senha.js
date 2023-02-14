// Função para codificar o texto com a senha
function codificarComSenha(texto, senha) {
  var ciphertext = CryptoJS.AES.encrypt(texto, senha).toString();
  return ciphertext;
}

// Função para decodificar o texto com a senha
function decodificarComSenha(ciphertext, senha) {
  var textoDecodificado = CryptoJS.AES.decrypt(ciphertext, senha).toString(CryptoJS.enc.Utf8);
  return textoDecodificado;
}


// Você pode usar as funções da seguinte forma:

var texto = 'Texto sensível';
var senha = 'Senha segura';

// Codifica o texto com a senha
var textoCodificado = codificarComSenha(texto, senha);

// Decodifica o texto com a senha
var textoDecodificado = decodificarComSenha(textoCodificado, senha);

console.log(textoDecodificado); // Imprime 'Texto sensível'


// Lembre-se de incluir a biblioteca crypto-js no seu projeto antes de usar as funções.

// +++++++++++++++++++++++++++++++

// Função para codificar o texto com a senha
function codificarComSenha(texto, senha) {
  var textoCodificado = '';

  // Percorre o texto e a senha caractere a caractere
  for (var i = 0; i < texto.length; i++) {
    // Codifica o caractere atual do texto com o caractere correspondente da senha
    var codigo = texto.charCodeAt(i) ^ senha.charCodeAt(i % senha.length);
    textoCodificado += String.fromCharCode(codigo);
  }

  return textoCodificado;
}

// Função para decodificar o texto com a senha
function decodificarComSenha(textoCodificado, senha) {
  var textoDecodificado = '';

  // Percorre o texto codificado e a senha caractere a caractere
  for (var i = 0; i < textoCodificado.length; i++) {
    // Decodifica o caractere atual do texto codificado com o caractere correspondente da senha
    var codigo = textoCodificado.charCodeAt(i) ^ senha.charCodeAt(i % senha.length);
    textoDecodificado += String.fromCharCode(codigo);
  }

  return textoDecodificado;
}

// simplificada

function codificarDecodificarComSenha(texto, senha) {
  return texto
    .split('')
    .map((char, i) => char.charCodeAt(0) ^ senha.charCodeAt(i % senha.length).charCodeAt(0))
    .map(codigo => String.fromCharCode(codigo))
    .join('');
}

const texto = 'Texto sensível';
const senha = 'Senha segura';

const textoCodificado = codificarDecodificarComSenha(texto, senha);
const textoDecodificado = codificarDecodificarComSenha(textoCodificado, senha);

console.log(textoDecodificado); // Imprime 'Texto sensível'


