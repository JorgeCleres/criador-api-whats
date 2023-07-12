export default {
    downloadJs(animacaoEnter, animacaoOut) {
        var datajs = new Blob([`
            window.onload = function () {
                var dataAtual = new Date();
                var horas = dataAtual.getHours();
                var minutos = dataAtual.getMinutes();
                var temp = horas+':'+minutos
                document.querySelector('.card__api--body span').innerHTML = temp
            }

            function abrir_api() {
                document.querySelector('.card__api').classList.remove('${animacaoOut}')
                document.querySelector('.card__api').classList.add('${animacaoEnter}')
                document.querySelector('#icon__whats').style.display = 'none';
                document.querySelector('#icon__x').style.display = 'block';
                document.querySelector('.card__api').style.display = '0.1%';
            }

            function fechar_api() {
                document.querySelector('.card__api').classList.remove('${animacaoEnter}')
                document.querySelector('.card__api').classList.add('${animacaoOut}')
                document.querySelector('#icon__whats').style.display = 'block';
                document.querySelector('#icon__x').style.display = 'none';
                document.querySelector('.card__api').style.display = '-30.1%';
            }

            document.addEventListener('mouseup', function (e) {
                var card = document.querySelector('.card__api');
                if (!card.contains(e.target)) {
                    fechar_api()
                }
        })

        `]);

        var downloadLinkJs = document.getElementById("aDownloadJs");
        if (downloadLinkJs == null) {
            downloadLinkJs = document.createElement('a');
            downloadLinkJs.setAttribute('download', 'api.js');
            downloadLinkJs.setAttribute('id', 'aDownloadJs');
            document.body.appendChild(downloadLinkJs);
        }
        downloadLinkJs.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(datajs));
        downloadLinkJs.href = URL.createObjectURL(datajs);
        downloadLinkJs.style.display = 'none';
        downloadLinkJs.click();
    }
}