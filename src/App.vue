<template>
    <div class="container">
        <div class="row home">
            <div class="form">
                <div class="cont">
                    <div class="row">
                        <h2 class="headline headline--float">CONSTRUTOR DE API-WHATSAPP</h2>
                        <hr>
                        <div class="accordion" id="accordionExample">

                            <!-- TOPO -->
                            <AccordioComponent titleAccordion="Topo" idParam="texto" @click="mobile()">
                                <div class="col-sm form-group inputs">
                                    <InputComponent 
                                        @inputValue="text.title = $event"
                                        classeInput = "form-control"
                                        v-model="text.title"
                                        tipoInput = "text"
                                        label= 'Título'
                                        placeholder= 'Título'
                                    />

                                    <InputComponent 
                                        @inputValue="text.subtitle = $event"
                                        classeInput = "form-control"
                                        v-model="text.subtitle"
                                        tipoInput = "text"
                                        label= 'Sub título'
                                        placeholder= 'Sub título'
                                    />

                                    <InputComponent
                                        @inputValue="style.top = $event"
                                        v-model="style.top"
                                        tipoInput = "color"
                                        label= 'Cabeçalho:'
                                    />

                                    <InputComponent
                                        @inputValue="style.topOther = $event"
                                        v-model="style.topOther"
                                        tipoInput = "color"
                                        label= 'Texto e Ícone'
                                    />

                                    
                                </div>
                            </AccordioComponent>

                            <!-- Centro -->
                            <AccordioComponent titleAccordion="Meio" idParam="fundos" @click="mobile()">
                                <div class="col-sm form-group">
                                    <div class="fundos">
                                        <div v-if="param.fundo == true">

                                            <label class="form-check-label">Cor</label>
                                            <input class="form-check-input" type="checkbox" id="checkbox" v-model="param.fundo">

                                                <InputComponent 
                                                    nameInput="flexRadioDefault"
                                                    @click="checkImage('https://photosglobal.s3.sa-east-1.amazonaws.com/fundo.jpg')"
                                                    image = "https://photosglobal.s3.sa-east-1.amazonaws.com/fundo.jpg"
                                                    tipoInput = "radio"
                                                    classeInput = "form-check-input"
                                                />
                                            
                                                <InputComponent 
                                                    nameInput="flexRadioDefault"
                                                    @click="checkImage('https://photosglobal.s3.sa-east-1.amazonaws.com/fundo2.jpg')"
                                                    image = "https://photosglobal.s3.sa-east-1.amazonaws.com/fundo2.jpg"
                                                    tipoInput = "radio"
                                                    classeInput = "form-check-input"
                                                />
                                            
                                                <InputComponent 
                                                    nameInput="flexRadioDefault"
                                                    @click="checkImage('https://photosglobal.s3.sa-east-1.amazonaws.com/fundo3.jpg')"
                                                    image = "https://photosglobal.s3.sa-east-1.amazonaws.com/fundo3.jpg"
                                                    tipoInput = "radio"
                                                    classeInput = "form-check-input"
                                                />
                                        </div>

                                        <div v-else>
                                                <label class="form-check-label">Imagem </label>
                                                <input class="form-check-input mb-20" type="checkbox" id="checkbox" v-model="param.fundo">
                                                <InputComponent
                                                    @inputValue="style.fundo = $event"
                                                    v-model="style.fundo"
                                                    tipoInput = "color"
                                                    label= 'Adicionar Cor'
                                                    placeholder= 'Cor de fundo api'
                                                />
                                        </div>

                                        <InputComponent 
                                            @inputValue="text.texto = $event"
                                            classeInput = "form-control"
                                            v-model="text.texto"
                                            tipoInput = "text"
                                            label= 'Mensagem'
                                            placeholder= 'Mensagem'
                                        />

                                        <InputComponent
                                            @inputValue="style.fundoBox = $event"
                                            v-model="style.fundoBox"
                                            tipoInput = "color"
                                            label= 'Cor da caixa de texto'
                                            placeholder= 'Cor da caixa de texto'
                                        />

                                        <InputComponent
                                            @inputValue="style.fundoText = $event"
                                            v-model="style.fundoText"
                                            tipoInput = "color"
                                            label= 'Cor do Texto'
                                            placeholder= 'Cor do Texto'
                                        />

                                    </div>
                                </div>
                            </AccordioComponent>

                            <!-- Footer -->
                            <AccordioComponent titleAccordion="Footer" idParam="cores" @click="mobile()">
                                <div class="col-sm form-group form--colors">
                                    <div class="colors">

                                        <div class="form-check">
                                            <label class="form-check-label" for="checkboxTwo">Segundo Número</label>
                                            <input class="form-check-input" type="checkbox" id="checkboxTwo" v-model="param.otherNumber">
                                        </div>

                                        <div v-if="param.otherNumber" class="form-check">
                                            <label class="form-check-label" for="checkboxTwo">{{ param.ligacao == false ? 'Botão para ligação' : 'Botão whatsapp' }}</label>
                                            <input class="form-check-input" type="checkbox" id="checkboxTwo" v-model="param.ligacao">
                                        </div>

                                        <InputComponent 
                                            @inputValue="text.botao = $event"
                                            classeInput = "form-control"
                                            v-model="text.botao"
                                            tipoInput = "text"
                                            label= 'Texto Botão'
                                            placeholder= 'Texto Botão'
                                        />

                                        <InputComponent v-if="param.otherNumber"
                                            @inputValue="text.segundobotao = $event"
                                            classeInput = "form-control"
                                            v-model="text.segundobotao"
                                            tipoInput = "text"
                                            label= 'Texto Segundo Botão'
                                            placeholder= 'Texto Segundo Botão'
                                        />

                                        <InputComponent
                                            @inputValue="style.footer = $event"
                                            v-model="style.footer"
                                            tipoInput = "color"
                                            label= 'Cor do footer'
                                            placeholder= 'Cor do footer'
                                        />

                                        <InputComponent
                                            @inputValue="style.botao = $event"
                                            v-model="style.botao"
                                            tipoInput = "color"
                                            label= 'Cor do botão'
                                            placeholder= 'Cor do botão'
                                        />

                                        <InputComponent v-if="param.otherNumber"
                                            @inputValue="style.botaoTwo = $event"
                                            v-model="style.botaoTwo"
                                            tipoInput = "color"
                                            label= 'Cor do botão 2'
                                            placeholder= 'Cor do botão 2'
                                        />

                                        <InputComponent
                                            @inputValue="style.botaoText = $event"
                                            v-model="style.botaoText"
                                            tipoInput = "color"
                                            label= 'Cor de Texto botão'
                                            placeholder= 'Cor de Texto botão'
                                        />

                                    </div>
                                </div>
                            </AccordioComponent>

                            <!-- PARÂMETROS -->
                            <AccordioComponent titleAccordion="Parametros" idParam="parametros" @click="mobile()">
                                <div class="col-sm param">
                                    <div class="form-check posicao">
                                        <p>Posição da API</p>
                                        <input class="form-check-input" type="checkbox" id="checkbox" v-model="style.posicao">
                                        <label class="form-check-label" for="checkbox">{{ style.posicao == true ? 'Direita' : ' Esquerda' }}</label>
                                    </div>

                                    <div class="form-check posicao">
                                        <p>{{ param.topo == true ? 'Esconder Topo' : 'Mostrar Topo' }}</p>
                                        <input class="form-check-input" type="checkbox" id="checkbox" v-model="param.topo">
                                        <label class="form-check-label" for="checkbox">{{ param.topo == true ? 'Esconder' : 'Mostrar' }}</label>
                                    </div>

                                    <div class="form-check posicao">
                                        <p>{{ param.meio == true ? 'Esconder Meio' : 'Mostrar Meio' }}</p>
                                        <input class="form-check-input" type="checkbox" id="checkbox" v-model="param.meio">
                                        <label class="form-check-label" for="checkbox">{{ param.meio == true ? 'Esconder' : 'Mostrar' }}</label>
                                    </div>

                                    <InputComponent 
                                        @inputValue="param.number = $event"
                                        classeInput = "form-control"
                                        v-model="param.number"
                                        tipoInput = "text"
                                        label= 'Número Whats'
                                        v-mask="['(##) ####-####', '(##) #####-####']"
                                    />

                                    <InputComponent v-if="param.otherNumber"
                                        @inputValue="param.numberTwo = $event"
                                        classeInput = "form-control"
                                        v-model="param.numberTwo"
                                        tipoInput = "text"
                                        label= 'Segundo Número Whats'
                                        v-mask="['(##) ####-####', '(##) #####-####']"
                                    />
                                </div>

                            </AccordioComponent>

                            <!-- ANIMAÇÃO -->
                            <AccordioComponent titleAccordion="Animação" idParam="animacao" @click="mobile()">

                                <label class="form-check-label" for="checkbox">Animação Saída</label>
                                <select v-model="animacaoOut">
                                    <option value="animate__backOutDown">Back out Down</option>
                                    <option value="animate__backOutLeft">Back out Left</option>
                                    <option value="animate__backOutRight">Back out Right</option>
                                    <option value="animate__backOutUp">Back out Up</option>
                                    <option value="animate__rotateOut">animate__rotateOut</option>
                                    <option value="animate__hinge">animate__hinge</option>
                                    <option value="animate__rollOut">animate__rollOut</option>
                                    <option value="animate__zoomOutDown">animate__zoomOutDown</option>
                                    <option value="animate__zoomOutUp">animate__zoomOutUp</option>
                                </select>

                                <label class="form-check-label" for="checkbox">Animação Entrada</label>
                                <select v-model="animacaoEnter">
                                    <option value="animate__backInDown">Back in Down</option>
                                    <option value="animate__backInLeft">Back in Left</option>
                                    <option value="animate__backInRight">Back in Right</option>
                                    <option value="animate__backInUp">Back in Up</option>
                                    <option value="animate__rotateIn">animate__rotateIn</option>
                                    <option value="animate__rollIn">animate__rollIn</option>
                                    <option value="animate__zoomInDown">animate__zoomInDown</option>
                                    <option value="animate__zoomInUp">animate__zoomInUp</option>
                                </select>

                            </AccordioComponent>
                        </div>

                        <button type="button" class="btn btn-primary" @click="download()">Baixar API</button>
                    </div>
                </div>
            </div>

            <div :style="!style.posicao == true ? 'order: 1' : 'order: 2'">
                    <Api 
                        :topo= param.topo
                        :meio= param.meio
                        :posicao=style.posicao
                        :corTopo=style.top 
                        :corFonteTopo=style.topOther 
                        :corFundo=style.fundo
                        :corFundoBox=style.fundoBox 
                        :corFundoText=style.fundoText 
                        :corFooter=style.footer
                        :corBotao=style.botao 
                        :corBotaoTwo=style.botaoTwo 
                        :corBotaoText=style.botaoText 
                        :titleTopo=text.title 
                        :subtitle=text.subtitle
                        :textoBotao=text.botao 
                        :texto=text.texto 
                        :otherNumber=param.otherNumber
                        :segundobotao=text.segundobotao 
                        :paramFundo=param.fundo 
                        :imagemFundo=style.fundoImagem
                        :enterAnimacao = animacaoEnter
                        :OutAnimacao = animacaoOut
                    />
            </div>
        </div>
    </div>
</template>

<script>
import { mask } from 'vue-the-mask'
import InputComponent from './components/InputComponent.vue'
import Api from './components/Api.vue';
import AccordioComponent from './components/AccordioComponent.vue';
import TypeCss from './components/api/TypeCss.js';
import TypeHtml from './components/api/TypeHtml.js';
import TypeJs from './components/api/TypeJs.js';
import TypeText from './components/api/readme.js';

export default {
    name: "App",
    directives: { mask },
    components: { Api, AccordioComponent, InputComponent },
    data() {
        return {
            animacaoOut: 'animate__backOutDown',
            animacaoEnter: 'animate__backInDown',
            param: {
                number: '(41) 99999-9999',
                numberTwo: '(41) 99999-9999',
                otherNumber: false,
                ligacao: false,
                meio: true,
                topo: true,
                fundo: false
            },
            text: {
                title: "Nome da empresa",
                subtitle: "Normalmente responde imediatamente",
                botao: "Começar bate-papo",
                texto: "como podemos te ajudar?",
                segundobotao: "Começar bate-papo"
            },
            style: {
                top: "#004800",
                topOther: "#e6e6e6",
                fundo: "#d2d2d2",
                fundoBox: "#ffffff",
                fundoText: "#000000",
                footer: "#e6e6e6",
                botao: "#004800",
                botaoTwo: "#004800",
                botaoText: "#ffffff",
                posicao: true,
                fundoImagem: ''
            }
        };
    },
    props: {
        msg: String
    },
    methods: {
        download() {

            var newNumber = this.param.number.replace(/[()\s-]/g, '')
            var seconndNewNumber = this.param.numberTwo.replace(/[()\s-]/g, '')

            TypeCss.downloadcss(this.style, this.param)

            TypeHtml.downloadHtml(this.text, this.param, seconndNewNumber, newNumber, this.animacaoEnter)

            TypeJs.downloadJs(this.animacaoEnter, this.animacaoOut)
            
            TypeText.downloadText()
        },
        mobile() {
            if (screen.width <= 760) {
                document.querySelector('.card').style.display = 'none';
                document.querySelector('#icon__whats').style.display = 'block';
                document.querySelector('#icon__x').style.display = 'none';

            }
        },
        checkImage(imagem) {
            document.querySelector('.card__body').style = "background-image:url(" + imagem + ");"
            this.style.fundoImagem = "background-image: url(" + imagem + ") !important"
        }
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

.container {
    max-width: 99.9% !important;
}

.fundos #checkbox {
    margin: 6px 10px 15px 10px;
}

label {
        color: grey;
        font-size: 17px;
        font-family: system-ui;
    }

.form-check img {
    width: 25%;
}

h2 {
    padding: 0px 30px 0;
    font-size: 1.8rem;
    text-align: center;
    color: #01A884;
}

hr {
    width: 75%;
    margin: 0 auto 20px;
}

.form-check-input:checked {
    background-color: #01a884 !important;
    border-color: #01a884 !important;
}

.home {
    display: flex;
}

input#favcolor {
    width: 125px;
}

.form {
    position: relative;
    min-height: 100vh;
    width: 40% !important;
    margin: 0 auto !important;
    background: linear-gradient(42deg, rgba(2,0,36,1) 0%, rgba(9,121,93,1) 56%, rgba(0,212,255,1) 100%);
}

.cont {
    background: white;
    width: 90%;
    margin: 50px auto;
    padding: 20px 10px 30px;
    border-radius: 20px;
}

.cont h2 {
    color: #086755;
}

.cont hr {
    margin: 5px auto 15px;
}

.inputs input.form-control {
    margin-bottom: 20px;
}

.inputs {
    height: fit-content;
}

.colors #favcolor {
    margin-bottom: 15px;
}

.param input {
    margin-bottom: 20px;
}

button.btn.btn-primary {
    background: white;
    border: 2px solid linear-gradient(42deg, rgba(2,0,36,1) 0%, rgba(9,121,93,1) 56%, rgba(0,212,255,1) 100%) !important;
    color: rgba(9,121,93,1);
    transition: 0.3s
}

button.btn.btn-primary:hover {
    scale: 1.09;
    background: white;
    border: 2px solid linear-gradient(42deg, rgba(2,0,36,1) 0%, rgba(9,121,93,1) 56%, rgba(0,212,255,1) 100%) !important;
    color: rgba(9,121,93,1);
}

.btn {
    width: 77%  !important; 
    margin: 0 auto !important; 
    font-weight: 600 !important; 
}

.param .posicao {
    margin: 15px 0;
}

.param .posicao p {
    margin-left: -21px;
    color: grey;
}

select {
    width: 75%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #a5a5a5;
    margin-bottom: 20px !important;
    color: grey;
}

@media(max-width: 480px) {
    h2 {
        padding: 0px 10px 0;
        font-size: 1.3rem;
    }

    .cont {
        width: 100%;
        margin: 20px auto;
        padding: 20px 5px;
        border-radius: 20px;
    }

    .form {
        width: 100% !important;
    }
}</style>
