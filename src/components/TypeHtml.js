export default {
    downloadHtml(text, param, seconndNewNumber, newNumber) {
        var datahtml = ''
        if (param.otherNumber) {
            datahtml = new Blob([`
            <link rel="stylesheet" href="./api/api.css">
            <script type="text/javascript" src="./api/api.js"></script>
            <div class="card__api">
                <div class="card__api--top">
                    <div class="card__top--title">
                        <h3>${text.titulo}</h3>
                        <p>${text.subtitle}</p>
                    </div>
                    <span class="card--x" onclick="fechar_api()">x</span>
                </div>

                <div class="card__api--body">
                    <div class="card__api--body--right">
                        <p>Olá! <br> ${text.texto}</p>
                        <span>12:49</span>
                    </div>
                </div>
    
                <div class="card__api--footer">
                    <a class="btn" href="https://wa.me/55${newNumber}">${text.botao}</a>
                    <a class="btn" href="https://wa.me/55${seconndNewNumber}">${text.segundoBotaoTexto}</a>
                    <a href="https://empiric.com.br/" target="_blank"><span><i>by</i> Empiric</span></a>
                </div>
            </div>
          
            <img src="https://photosglobal.s3.sa-east-1.amazonaws.com/whatsapp.png" onclick="abrir_api()" id="icon__whats" />
          
            <img src="https://photosglobal.s3.sa-east-1.amazonaws.com/fechar.png" id="icon__x" onclick="fechar_api()" />

            `]);
        } else {
            datahtml = new Blob([`
            <link rel="stylesheet" href="api.css">
            <script type="text/javascript" src="api.js"></script>
            <div class="card__api">
                <div class="card__api--top">
                    <div class="card__top--title">
                        <h3>${text.titulo}</h3>
                        <p>${text.subtitle}</p>
                    </div>
                    <span class="card--x" onclick="fechar_api()">x</span>
                </div>

                <div class="card__api--body">
                    <div class="card__api--body--right">
                        <p>Olá! <br> ${text.texto}</p>
                        <span>12:49</span>
                    </div>
                </div>

                <div class="card__api--footer">
                    <a class="btn" href="https://wa.me/55${newNumber}">${text.botao}</a>
                    <a href="https://empiric.com.br/" target="_blank"><span><i>by</i> Empiric</span></a>
                </div>
            </div>
        
            <img src="https://photosglobal.s3.sa-east-1.amazonaws.com/whatsapp.png" onclick="abrir_api()" id="icon__whats" />
          
            <img src="https://photosglobal.s3.sa-east-1.amazonaws.com/fechar.png" id="icon__x" onclick="fechar_api()" />
        `]);
        }

        var downloadLinkHtml = document.getElementById("aDownloadHtml");
        if (downloadLinkHtml == null) {
            downloadLinkHtml = document.createElement('a');
            downloadLinkHtml.setAttribute('download', 'api.php');
            downloadLinkHtml.setAttribute('id', 'aDownloadHtml');
            document.body.appendChild(downloadLinkHtml);
        }

        downloadLinkHtml.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(datahtml));
        downloadLinkHtml.href = URL.createObjectURL(datahtml);

        downloadLinkHtml.style.display = 'none';
        downloadLinkHtml.click();
    }
}