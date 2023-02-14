function salvarComoPDF(seletorCSS) {
  // Instancia o jsPDF
  var pdf = new jsPDF('p', 'pt', 'a4');

  // Define o tamanho da página A4 em pontos
  var tamanhoDaPagina = pdf.internal.pageSize;
  var larguraDaPagina = tamanhoDaPagina.width;
  var alturaDaPagina = tamanhoDaPagina.height;

  // Captura a imagem do elemento HTML usando html2canvas
  html2canvas(document.querySelector(seletorCSS)).then(canvas => {
    // Verifica se a imagem é maior do que o tamanho da página
    if (canvas.height > alturaDaPagina) {
      // Divide a imagem em várias partes
      var partes = [];
      var alturaDaImagem = 0;
      while (alturaDaImagem < canvas.height) {
        var imagem = document.createElement('canvas');
        imagem.width = canvas.width;
        imagem.height = Math.min(alturaDaPagina, canvas.height - alturaDaImagem);
        imagem.getContext('2d').drawImage(canvas, 0, alturaDaImagem, imagem.width, imagem.height, 0, 0, imagem.width, imagem.height);
        partes.push(imagem);
        alturaDaImagem += imagem.height;
      }

      // Adiciona as partes à página
      var parteAtual = 0;
      while (parteAtual < partes.length) {
        pdf.addImage(partes[parteAtual].toDataURL('image/png'), 'PNG', 0, 0, larguraDaPagina, alturaDaPagina);
        parteAtual++;
        if (parteAtual < partes.length) {
          pdf.addPage();
        }
      }
    } else {
      // Adiciona a imagem inteira ao PDF
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, larguraDaPagina, canvas.height);
    }

    // Salva o PDF
    pdf.save('Arquivo.pdf');
  });
}
