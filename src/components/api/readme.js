export default {
    downloadText() {
        var datajs = new Blob([`
Coloque todos arquivos em uma pastra chamada api e coloque essa pasta na raiz do projeto
Acrecente esse link na header do site, ela é responsável pela animação de entrada e saída
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        `]);

        var downloadLinkJs = document.getElementById("aDownloadText");
        if (downloadLinkJs == null) {
            downloadLinkJs = document.createElement('a');
            downloadLinkJs.setAttribute('download', 'readme.txt');
            downloadLinkJs.setAttribute('id', 'aDownloadText');
            document.body.appendChild(downloadLinkJs);
        }
        downloadLinkJs.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(datajs));
        downloadLinkJs.href = URL.createObjectURL(datajs);
        downloadLinkJs.style.display = 'none';
        downloadLinkJs.click();
    }
}