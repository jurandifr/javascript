// Adiciona um script via console


 function addScript(url) {
     var script = document.createElement('script');
     script.type = 'application/javascript';
     script.src = url;
     document.head.appendChild(script);
 }
 addScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js');

 // Para copiar trechos como imagem

 addScript('https://html2canvas.hertzen.com/dist/html2canvas.min.js');

 html2canvas(document.querySelector("#book-holder")).then(canvas => {
    navigator.clipboard.write(canvas)
 });
