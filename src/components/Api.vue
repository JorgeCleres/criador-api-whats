<template>
    <div class="home">
        <div class="api">
            <div class="card" :style="this.posicao == true ? 'right: 0%' : 'left: 0%'">
                <div class="card__top" :style="{background: this.corTopo}">
                    <div class="card__top--title">
                        <h3 :style="{color: this.corFonteTopo}">{{this.titleTopo}}</h3>
                        <p :style="{color: this.corFonteTopo}">{{this.subtitle}}</p>
                    </div>
                    <span :style="{color: this.corFonteTopo}" class="card--x" @click="fechar_api()">x</span>
                </div>

                <div class="card__body" :style="{background: this.corFundo}">
                    <div class="card__body--right" :style="{background: this.corFundoBox}">
                        <p :style="{color: this.corFundoText}">Olá</p>
                        <p :style="{color: this.corFundoText}">{{this.texto}}</p>
                        <span :style="{color: this.corFundoText}">{{hoursAndMinutes}}</span>
                    </div>
                </div>

                <div class="card__footer" :style="{background: this.corFooter}">
                    <a :style="{background: this.corBotao, color: this.corBotaoText}" class="btn" href="">{{this.textoBotao}}</a>
                    <a v-if="otherNumber === true" :style="{background: this.corBotao, color: this.corBotaoText}" class="btn" href="">{{this.segundobotao}}</a>
                    <a href="https://empiric.com.br/" target="_blank"><span><i>by</i> Empiric</span></a>
                </div>
            </div>

            <img src="https://photosglobal.s3.sa-east-1.amazonaws.com/whatsapp.png" @click="abrir_api()" :style="this.posicao == true ? 'right: 1%' : 'left: 1%'" id="icon__whats">

            <img src="https://photosglobal.s3.sa-east-1.amazonaws.com/fechar.png" id="icon__x" :style="this.posicao == true ? 'right: 1%' : 'left: 1%'" @click="fechar_api()">
        </div>
    </div>
</template>
  
<script>
import {mask} from 'vue-the-mask'
export default {
    name: 'ApiWhats',
    directives: {mask},
    props: ['posicao', 'corTopo', 'corFonteTopo', 'corFundo', 'corFundoBox', 'corFundoText'
    ,'corFooter', 'corBotao', 'corBotaoText', 'titleTopo','subtitle','textoBotao', 'texto'
    ,'otherNumber', 'segundobotao'],
    data() {
    },
    computed: {
        hoursAndMinutes: function () {
            let now = new Date
            let minutos = 0
            if (now.getMinutes() < 10) {
                minutos = '0' + now.getMinutes()
            } else {
                minutos = now.getMinutes()
            }       
            return now.getHours() + ":" + minutos
        }
    },
    methods: {
        abrir_api() {
            document.querySelector('.card').style.display = 'block';
            document.querySelector('#icon__whats').style.display = 'none';
            document.querySelector('#icon__x').style.display = 'block';
            if (screen.width <= 760) {
                document.querySelector('#parametros').classList.remove('show');
                document.querySelector('#cores').classList.remove('show');
                document.querySelector('#texto').classList.remove('show');
            }
        },
        fechar_api() {
            document.querySelector('.card').style.display = 'none';
            document.querySelector('#icon__whats').style.display = 'block';
            document.querySelector('#icon__x').style.display = 'none';
        }
    },
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
    position: fixed;
    bottom: 80px;
    width: 350px;
    transition: 0.9s;
    box-shadow: 10px 10px 18px 3px grey;
}

.card .card__top {
    display: flex;
    background: #004800;
    padding: 5px 5px 10px;
    border-radius: 5px 5px 0 0;
}

.card__top--title {
    padding: 0 5px 0 15px;
}

.card__top--title h3 {
    margin: 10px 0 0;
    color: white;
    font-family: sans-serif;
    letter-spacing: 1px;
    font-size: 18px;
    text-align: initial;
}

.card__top--title p {
    margin: 0px;
    color: white;
    font-family: sans-serif;
    font-size: 15px;
}

#icon__x {
    cursor: pointer;
    position: fixed;
    bottom: 15px;
    width: 50px;
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
    color: white;
    font-family: monospace;
    transition: 0.4s;
    margin: 0 0 0 20px;
    right: 0;
    position: absolute;
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
}

.card .card__body {
    padding: 20px 55px 20px 0px;
    display: grid;
    background: rgb(255, 224, 139);
}

.card .card__body--right {
    background: white;
    display: grid;
    margin-left: 15px;
    border-radius: 7px;
}

.card .card__body--right p {
    color: grey;
    font-family: sans-serif;
    margin: 10px 0 -10px 15px;
    text-align: initial;
}

.card .card__body--right span {
    justify-self: right;
    padding: 5px 7px 3px;
    font-size: 12px;
    color: grey;
    font-family: sans-serif;
}

.card .card__footer {
    background: #dfdfdf;
    border-radius: 0 0 5px 5px;
    display: grid;
}

.card .card__footer .btn {
    font-size: 15px;
    width: 60%;
    height: auto;
    background: #004800;
    padding: 10px;
    margin: 15px auto 5px;
    color: white;
    text-decoration-line: none;
    border-radius: 10px;
    text-align: center;
}

.card .card__footer a {
    font-size: 10px;
    margin: 5px auto 5px;
    color: rgb(0, 0, 0);
}

.card .card__footer a span {
    font-size: 10px;
    color: rgb(0, 0, 0);
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
    .card {
        width: 300px;
    }
    .card__top--title h3 {
        font-size: 15px;
    }
    .card__top--title p {
        font-size: 14px;
    }
    .card .card__body {
        padding: 20px 40px 20px 0px;
    }
    .card .card__body--right {
        padding: 0px;
    }
}
</style>
  