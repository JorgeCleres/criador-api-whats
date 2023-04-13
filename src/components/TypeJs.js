export default {
    downloadJs() {
        var datajs = new Blob([`
          window.onload = function () {
            var dataAtual = new Date();
            var horas = dataAtual.getHours();
            var minutos = dataAtual.getMinutes();
            var temp = horas+':'+minutos
            document.querySelector('.card__api--body span').innerHTML = temp
          }

          setTimeout( () => {
            fechar_api()
          },4000)

          function abrir_api() {
            document.querySelector('.card__api').style.display = 'block';
            document.querySelector('#icon__whats').style.display = 'none';
            document.querySelector('#icon__x').style.display = 'block';
          }

          function fechar_api() {
            document.querySelector('.card__api').style.display = 'none';
            document.querySelector('#icon__whats').style.display = 'block';
            document.querySelector('#icon__x').style.display = 'none';
          }

          document.addEventListener('mouseup', function(e) {
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