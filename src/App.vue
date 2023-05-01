<template>
    <div class="container">
        <div class="row home">
            <div class="col-lg-6 form" :style="!style.posicao == true ? 'order: 2' : 'order: 1'">
                <div class="cont">
                    <div class="row">
                        <h2 class="headline headline--float">CONSTRUTOR DE API-WHATSAPP</h2>
                        <hr>
                        <div class="accordion" id="accordionExample">
                            <AccordioComponent titleAccordion="Texto" idParam="texto" @click="mobile()">
                                <div class="col-sm form-group inputs">
                                    <InputComponent 
                                        @inputValue="text.title = $event"
                                        v-model="text.title"
                                        tipoInput = "text"
                                        label= 'Título'
                                        placeholder= 'Título' />

                                    <InputComponent 
                                        @inputValue="text.subtitle = $event"
                                        v-model="text.subtitle"
                                        tipoInput = "text"
                                        label= 'Sub título'
                                        placeholder= 'Sub título' />

                                    <InputComponent 
                                        @inputValue="text.texto = $event"
                                        v-model="text.texto"
                                        tipoInput = "text"
                                        label= 'Mensagem'
                                        placeholder= 'Mensagem' />

                                    <InputComponent 
                                        @inputValue="text.botao = $event"
                                        v-model="text.botao"
                                        tipoInput = "text"
                                        label= 'Texto Botão'
                                        placeholder= 'Texto Botão' />

                                    <InputComponent 
                                        @inputValue="text.segundobotao = $event"
                                        v-model="text.segundobotao"
                                        tipoInput = "text"
                                        label= 'Texto Segundo Botão'
                                        placeholder= 'Texto Segundo Botão'/>
                                </div>
                            </AccordioComponent>

                            <AccordioComponent titleAccordion="Fundos" idParam="fundos" @click="mobile()">
                                <div class="col-sm form-group">
                                    <div class="fundos">
                                        <div v-if="param.fundo == true">

                                            <input class="form-check-input" type="checkbox" id="checkbox"
                                                v-model="param.fundo">
                                            <label class="form-check-label">adicionar Imagem</label>

                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault1"
                                                    @click="checkImage('https://photosglobal.s3.sa-east-1.amazonaws.com/fundo.jpg')">
                                                <img src="https://photosglobal.s3.sa-east-1.amazonaws.com/fundo.jpg">
                                            </div>

                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault2"
                                                    @click="checkImage('https://photosglobal.s3.sa-east-1.amazonaws.com/fundo2.jpg')">
                                                <img src="https://photosglobal.s3.sa-east-1.amazonaws.com/fundo2.jpg">
                                            </div>

                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault3"
                                                    @click="checkImage('https://photosglobal.s3.sa-east-1.amazonaws.com/fundo3.jpg')">
                                                <img src="https://photosglobal.s3.sa-east-1.amazonaws.com/fundo3.jpg">
                                            </div>
                                        </div>

                                        <div v-else>
                                            <input class="form-check-input mb-20" type="checkbox" id="checkbox"
                                                v-model="param.fundo">
                                                <label class="form-check-label">adicionar Cor</label>

                                            <InputComponent
                                                @inputValue="style.fundo = $event"
                                                v-model="style.fundo"
                                                tipoInput = "color"
                                                label= 'Adicionar Cor'
                                                placeholder= 'Cor de fundo api'/>
                                        </div>
                                    </div>
                                </div>
                            </AccordioComponent>

                            <AccordioComponent titleAccordion="Cores" idParam="cores" @click="mobile()">
                                <div class="col-sm form-group form--colors">
                                    <div class="colors">

                                        <InputComponent
                                            @inputValue="style.top = $event"
                                            v-model="style.top"
                                            tipoInput = "color"
                                            label= 'Cor do fundo topo'
                                            placeholder= 'Cor do fundo topo'/>

                                        <InputComponent
                                            @inputValue="style.topOther = $event"
                                            v-model="style.topOther"
                                            tipoInput = "color"
                                            label= 'Cor de Texto e ícone topo'
                                            placeholder= 'Cor de Texto e ícone topo'/>

                                        <InputComponent
                                            @inputValue="style.fundoBox = $event"
                                            v-model="style.fundoBox"
                                            tipoInput = "color"
                                            label= 'Cor da caixa de texto'
                                            placeholder= 'Cor da caixa de texto'/>

                                        <InputComponent
                                            @inputValue="style.fundoText = $event"
                                            v-model="style.fundoText"
                                            tipoInput = "color"
                                            label= 'Cor do Texto'
                                            placeholder= 'Cor do Texto'/>

                                        <InputComponent
                                            @inputValue="style.footer = $event"
                                            v-model="style.footer"
                                            tipoInput = "color"
                                            label= 'Cor do footer'
                                            placeholder= 'Cor do footer'/>

                                        <InputComponent
                                            @inputValue="style.botao = $event"
                                            v-model="style.botao"
                                            tipoInput = "color"
                                            label= 'Cor do botão'
                                            placeholder= 'Cor do botão'/>

                                        <InputComponent
                                            @inputValue="style.botaoText = $event"
                                            v-model="style.botaoText"
                                            tipoInput = "color"
                                            label= 'Cor de Texto botão'
                                            placeholder= 'Cor de Texto botão'/>

                                    </div>
                                </div>
                            </AccordioComponent>

                            <AccordioComponent titleAccordion="Parametros" idParam="parametros" @click="mobile()">
                                <div class="col-sm param">
                                    <div class="form-check posicao">
                                        <p>Posição da API</p>

                                        <label class="form-check-label" for="checkbox">{{ this.style.posicao == true ?
                                            'DIREITA' : 'ESQUERDA' }}</label>
                                        <input class="form-check-input" type="checkbox" id="checkbox"
                                            v-model="style.posicao">

                                    </div>

                                    <InputComponent 
                                        @inputValue="param.number = $event"
                                        v-model="param.number"
                                        tipoInput = "text"
                                        label= 'Número Whats'
                                        v-mask="['(##) ####-####', '(##) #####-####']" />

                                    <div class="form-check">
                                        <label class="form-check-label" for="checkboxTwo">{{ this.param.otherNumber == true
                                            ? 'REMOVER SEGUNDO NÚMERO' : 'ADICIONAR SEGUNDO NÚMERO' }}</label>
                                        <input class="form-check-input" type="checkbox" id="checkboxTwo"
                                            v-model="param.otherNumber">
                                    </div>

                                    <InputComponent v-if="param.otherNumber"
                                        @inputValue="param.numberTwo = $event"
                                        v-model="param.numberTwo"
                                        tipoInput = "text"
                                        label= 'Segundo Número Whats'
                                        v-mask="['(##) ####-####', '(##) #####-####']" />
                                </div>

                            </AccordioComponent>

                            <!-- <AccordioComponent titleAccordion="Animação" idParam="animacao" @click="mobile()">
                                <select v-model="selected">
                                    <option disabled value="">Please select one</option>
                                    <option>animate__backInDown</option>
                                    <option>animate__backInLeft</option>
                                    <option>animate__backInRight</option>
                                    <option>animate__backInUp</option>
                                </select>

                                <div>Selected: {{ selected }}</div>
                            </AccordioComponent> -->
                        </div>
                        <button type="button" class="btn btn-primary" @click="download()">Baixar API</button>
                    </div>
                </div>
            </div>

            <div class="col-lg-6" :style="!style.posicao == true ? 'order: 1' : 'order: 2'">
                    <Api :posicao=style.posicao :corTopo=style.top :corFonteTopo=style.topOther :corFundo=style.fundo
                        :corFundoBox=style.fundoBox :corFundoText=style.fundoText :corFooter=style.footer
                        :corBotao=style.botao :corBotaoText=style.botaoText :titleTopo=text.title :subtitle=text.subtitle
                        :textoBotao=text.botao :texto=text.texto :otherNumber=param.otherNumber
                        :segundobotao=text.segundobotao :paramFundo=param.fundo :imagemFundo=this.style.fundoImagem
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

export default {
    name: "App",
    directives: { mask },
    components: { Api, AccordioComponent, InputComponent },
    data() {
        return {
            selected: '',
            param: {
                number: '(41) 99999-9999',
                numberTwo: '(41) 99999-9999',
                otherNumber: false,
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
                fundo: "#ffe08b",
                fundoBox: "#ffffff",
                fundoText: "#000000",
                footer: "#e6e6e6",
                botao: "#004800",
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

            TypeHtml.downloadHtml(this.text, this.param, seconndNewNumber, newNumber)

            TypeJs.downloadJs()

            console.log(this.text)
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
    margin: 4px 10px 15px 0;
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
    background-image: url('https://photosglobal.s3.sa-east-1.amazonaws.com/fundo.jpg');
    position: relative;
    min-height: 100vh;
}

.cont {
    background: white;
    width: 90%;
    margin: 50px auto;
    padding: 40px 10px;
    border-radius: 20px;
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

button {
    width: 170px;
    margin: 0 auto;
}

button.btn.btn-primary {
    background: #01a884 !important;
    border: 1px solid #01a884 !important;
}

.param .posicao {
    margin: 15px 0;
}

.param .posicao p {
    margin-left: -21px;
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
}</style>
