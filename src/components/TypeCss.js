export default {
    downloadcss(corTopo, corTextTopo, corBody, corBox, corTextBody,
      corFooter, corBotao, textBotao, posicao, fundo, fundoImagem) {
        var lado = ''
        var imgOrColor = ''
        if(posicao == true) {
          lado = 'right: 0.1%;'
        } else {
          lado = 'left: 0.1%;'
        }
        if(fundo == true) {
          imgOrColor = fundoImagem
        } else {
          imgOrColor = 'background: '+corBody
        }

        var css = new Blob([`
          .card__api {
            position: fixed;
            bottom: 80px;
            width: 350px;
            transition: 0.9s;
            box-shadow: 0px 0px 21px black;
            z-index: 1000;
            border-radius: 10px;
            ${lado}
          }
          
          .card__api .card__api--top {
            display: flex;
            background: ${corTopo};
            padding: 5px 5px 10px;
            border-radius: 5px 5px 0 0;
          }
          
          .card__top--title {
            padding: 0 5px 0 15px;
          }
          
          .card__top--title h3 {
            margin: 10px 0 0;
            color: ${corTextTopo};
            font-family: sans-serif;
            letter-spacing: 1px;
            font-size: 18px;
            text-align: initial;
          }
          
          .card__top--title p {
            margin: 0px;
            color: ${corTextTopo};
            font-family: sans-serif;
            font-size: 15px;
          }
          
          #icon__x {
            cursor: pointer;
            position: fixed;
            bottom: 15px;
            width: 50px;
            z-index: 1000;
            ${lado}
          }
          
          #icon__x span {
            font-family: sans-serif;
            font-weight: 700;
          }
          
          .card--x {
            height: 25px;
            font-size: 20px;
            width: 25px;
            text-align: center;
            cursor: pointer;
            font-family: monospace;
            transition: 0.4s;
            margin: 0 0 0 20px;
            right: 0;
            position: absolute;
            color: ${corTextTopo};
          }
          
          .card--x:hover {
            transform: scale(1.5);
          }
          
          #icon__whats {
            border-radius: 50%;
            transform: scale(1);
            animation: pulse 2s infinite;
            position: fixed;
            bottom: 15px;
            z-index: 1000;
            display: none;
            width: 50px;
            ${lado}
          }
          
          .card__api .card__api--body {
            padding: 20px 55px 20px 0px;
            display: grid;
            ${imgOrColor}
          }
          
          .card__api .card__api--body--right {
            display: grid;
            margin-left: 15px;
            border-radius: 7px;
            background: ${corBox};
          }
          
          .card__api .card__api--body--right p {
            font-family: sans-serif;
            margin: 10px 0 -10px 15px;
            text-align: initial;
            color: ${corTextBody};
          }
          
          .card__api .card__api--body--right span {
            justify-self: right;
            padding: 5px 7px 3px;
            font-size: 12px;
            font-family: sans-serif;
            color: ${corTextBody};
          }
          
          .card__api .card__api--footer {
            border-radius: 0 0 5px 5px;
            display: grid;
            background: ${corFooter};
          }
          
          .card__api .card__api--footer .btn {
            font-size: 15px;
            width: 60%;
            height: auto;
            padding: 10px;
            margin: 15px auto 0px;
            text-decoration-line: none;
            border-radius: 10px;
            text-align: center;
            color: ${textBotao};
            background: ${corBotao};
          }
          
          .card__api .card__api--footer span {
            font-size: 10px;
            margin: 0px auto 5px;
            color: rgb(0, 0, 0);
          }
          
          .card__api .card__api--footer a {
            font-size: 10px;
            color: rgb(0, 0, 0);
            text-align: center;
            margin: 0 auto;
            text-decoration: none;
          }

          #icon__whats {
            background: black;
            border-radius: 50%;
            box-shadow: 0 0 0 0 rgba(1, 168, 132);
            transform: scale(1.5);
            animation: pulse 2s infinite;
          }
          
          @keyframes pulse {
            0% {
              transform: scale(0.95);
              box-shadow: 0 0 0 0 rgba(1, 168, 132, 0.7);
            }
          
            70% {
              transform: scale(1);
              box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
            }
          
            100% {
              transform: scale(0.95);
              box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            }
          }
          
          #icon__x {
              background: black;
            border-radius: 50%;
            box-shadow: 0 0 0 0 rgb(168, 1, 1);
            transform: scale(1.5);
            animation: pulseFechar 2s infinite;
          }
          
          @keyframes pulseFechar {
            0% {
              transform: scale(0.95);
              box-shadow: 0 0 0 0 rgba(168, 1, 1, 0.5);
            }
          
            70% {
              transform: scale(1);
              box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
            }
          
            100% {
              transform: scale(0.95);
              box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            }
          }
          
          @media(max-width: 480px) {
              .card__api {
                  width: 300px;
              }
              .card__top--title h3 {
                  font-size: 15px;
              }
              .card__top--title p {
                  font-size: 14px;
              }
              .card__api .card__api--body {
                  padding: 20px 40px 20px 0px;
              }
              .card__api .card__api--body--right {
                  padding: 0px;
              }
          }
        `]);

        var downloadLinkcss = document.getElementById("aDownloadCSS");
        if (downloadLinkcss == null) {
            downloadLinkcss = document.createElement('a');
            downloadLinkcss.setAttribute('download', 'api.css');
            downloadLinkcss.setAttribute('id', 'aDownloadCSS');
            document.body.appendChild(downloadLinkcss);
        }

        downloadLinkcss.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(css));
        downloadLinkcss.href = URL.createObjectURL(css);

        downloadLinkcss.style.display = 'none';
        downloadLinkcss.click();
    }
}
