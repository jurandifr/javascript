// Se for rodar pelo console precisa adicionar as bibliotecas antes

// Essa função facilita adicionar os scripts
function addScript(url) { 
    var script = document.createElement('script'); 
    script.type = 'application/javascript'; 
    script.src = url; 
    document.head.appendChild(script); 
} 

// Se colar tudo de uma vez dá erro pq ele ainda não carregou os scripts.

addScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'); 
addScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.3.2/html2canvas.min.js'); 
addScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js'); 

// A versão mais recente do jspdf não tem construtor então não vai funcionar com a função abaixo.
// addScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.3.1/jspdf.umd.min.js'); 

// A função para gerar o PDF
function gerarPDF(seletor){ 
    $('html,body').scrollTop(0); 

    var HTML_Width = $(seletor).width(); 
    var HTML_Height = $(seletor).height(); 
    var top_left_margin = 15; 
    var PDF_Width = HTML_Width+(top_left_margin*2); 
    var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2); 
    var canvas_image_width = HTML_Width; 
    var canvas_image_height = HTML_Height; 
    var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1; 

    html2canvas($(seletor)[0],{allowTaint:true}).then(function(canvas) { 
    canvas.getContext('2d');  
    console.log(canvas.height+"  "+canvas.width); 
    var imgData = canvas.toDataURL("image/jpeg", 1.0); 
    var pdf = new jsPDF('p', 'px',  [PDF_Width, PDF_Height]); 
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height); 
    for (var i = 0; i <= totalPDFPages; i++) {  
    pdf.addPage(PDF_Width, PDF_Height); 
    pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height); 
    } 
        pdf.save("Documento.pdf"); 
            }); 
}; 

// Chamando a função, vai demorar uns segundo e o arquivo será gerado.
gerarPDF("body"); 
