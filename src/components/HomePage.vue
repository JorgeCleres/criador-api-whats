<template>
  <div class="container">
  <div class="row home">
    <div class="col-lg-6 form" :style="!style.posicao == true ? 'order: 2' : 'order: 1'">
      <div class="cont">
        <div class="row">
            <h2 class="headline headline--float">CONSTRUTOR DE API-WHATSAPP</h2>
            <hr>
            <div class="accordion" id="accordionExample">
              <Accordio titleAccordion="Texto" idParam="texto" @click="mobile()">
                <div class="col-sm form-group inputs">
                  <label for="exampleInputEmail1">Título</label>
                  <input class="form-control" type="text" v-model="text.title" placeholder="Titulo">

                  <label for="exampleInputEmail1">Sub título</label>
                  <input class="form-control" type="text" v-model="text.subtitle" placeholder="Sub titulo">

                  <label for="exampleInputEmail1">Texto</label>
                  <input class="form-control" type="text" v-model="text.texto" placeholder="Mensagem">

                  <label for="exampleInputEmail1">Texto botão</label>
                  <input class="form-control" type="text" v-model="text.botao" placeholder="Texto botão">

                  <label v-if="param.otherNumber === true" for="exampleInputEmail1">Texto Segundo botão</label>
                  <input v-if="param.otherNumber === true" class="form-control" type="text" v-model="text.segundobotao" placeholder="Texto botão">

                </div>
              </Accordio>

              <Accordio titleAccordion="Fundos" idParam="fundos" @click="mobile()">
                <div class="col-sm form-group">
                  <div class="fundos">
                      <div v-if="param.fundo == true">
                        <input class="form-check-input" type="checkbox" id="checkbox" v-model="param.fundo">
                        <label class="form-check-label">adicionar Imagem</label>

                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" @click="checkImage('https://photosglobal.s3.sa-east-1.amazonaws.com/fundo.jpg')">
                              <img src="https://photosglobal.s3.sa-east-1.amazonaws.com/fundo.jpg">
                          </div>

                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" @click="checkImage('https://photosglobal.s3.sa-east-1.amazonaws.com/fundo2.jpg')">
                              <img src="https://photosglobal.s3.sa-east-1.amazonaws.com/fundo2.jpg">
                          </div>

                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" @click="checkImage('https://photosglobal.s3.sa-east-1.amazonaws.com/fundo3.jpg')">
                              <img src="https://photosglobal.s3.sa-east-1.amazonaws.com/fundo3.jpg">
                          </div>
                      </div>

                      <div v-else>
                        <input class="form-check-input mb-20" type="checkbox" id="checkbox" v-model="param.fundo">

                        <label for="exampleInputEmail1">adicionar Cor</label>
                        <input class="form-control" type="color" id="favcolor" name="favcolor" v-model="style.fundo">
                      </div>
                  </div>
                </div>
              </Accordio>
          
              <Accordio titleAccordion="Cores" idParam="cores" @click="mobile()">
                <div class="col-sm form-group form--colors">
                  <div class="colors">
                      <label for="exampleInputEmail1">Cor do fundo topo</label>
                      <input class="form-control" type="color" id="favcolor" name="favcolor" v-model="style.top">
                      
                      <label for="exampleInputEmail1">Cor de Texto e ícone topo</label>
                      <input class="form-control" type="color" id="favcolor" name="favcolor" v-model="style.topOther">             

                      <label for="exampleInputEmail1">Cor da caixa de texto</label>
                      <input class="form-control" type="color" id="favcolor" name="favcolor" v-model="style.fundoBox">

                      <label for="exampleInputEmail1">Cor do Texto</label>
                      <input class="form-control" type="color" id="favcolor" name="favcolor" v-model="style.fundoText">
                  
                      <label for="exampleInputEmail1">Cor do footer</label>
                      <input class="form-control" type="color" id="favcolor" name="favcolor" v-model="style.footer">

                      <label for="exampleInputEmail1">Cor do botão</label>
                      <input class="form-control" type="color" id="favcolor" name="favcolor" v-model="style.botao">

                      <label for="exampleInputEmail1">Cor de Texto botão</label>
                      <input class="form-control" type="color" id="favcolor" name="favcolor" v-model="style.botaoText">
                  </div>
                </div>
              </Accordio>

              <Accordio titleAccordion="Parametros" idParam="parametros" @click="mobile()">
                <div class="col-sm param">
                  <div class="form-check posicao">
                    <p>Posição da API</p>
                    <label class="form-check-label" for="checkbox">{{ this.style.posicao == true ? 'DIREITA' : 'ESQUERDA'}}</label>
                    <input class="form-check-input" type="checkbox" id="checkbox" v-model="style.posicao">
                  </div>

                  <label for="exampleInputEmail1">Número Whats</label>
                  <input class="form-control" type="text" v-model="param.number" placeholder="Titulo" v-mask="['(##) ####-####', '(##) #####-####']" />

                  <label v-if="param.otherNumber === true" >Segundo Número Whats</label>
                  <input v-if="param.otherNumber === true" class="form-control" type="text" v-model="param.numberTwo" placeholder="Segundo número" v-mask="['(##) ####-####', '(##) #####-####']" />

                  <div class="form-check">
                    <label class="form-check-label" for="checkboxTwo">{{ this.param.otherNumber == true ? 'REMOVER SEGUNDO NÚMERO' : 'ADICIONAR SEGUNDO NÚMERO'}}</label>
                    <input class="form-check-input" type="checkbox" id="checkboxTwo" v-model="param.otherNumber">
                  </div>

                </div>
              </Accordio>
            </div>
            <button type="button" class="btn btn-primary" @click="download()">Baixar API</button>
          </div>
        </div>
    </div>

    <div class="col-lg-6" :style="!style.posicao == true ? 'order: 1' : 'order: 2'">
        <Api 
          :posicao=style.posicao 
          :corTopo=style.top 
          :corFonteTopo=style.topOther 
          :corFundo=style.fundo
            
          :corFundoBox=style.fundoBox 
          :corFundoText=style.fundoText 
          :corFooter=style.footer 
          :corBotao=style.botao
            
          :corBotaoText=style.botaoText 
          :titleTopo=text.title 
          :subtitle=text.subtitle 
          :textoBotao=text.botao
            
          :texto=text.texto 
          :otherNumber = param.otherNumber
          :segundobotao = text.segundobotao
        />
    </div>
  </div>
</div>
</template>

<script>
import {mask} from 'vue-the-mask'
import Api from './Api.vue';
import Accordio from './Accordio.vue';
import TypeCss from './TypeCss.js';
import TypeHtml from './TypeHtml.js';
import TypeJs from './TypeJs.js';

export default {
  name: "HomePage",
  directives: {mask},
  data() {
    return {
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
      var newNumber = this.param.number.split('(').join('').split(')').join('').split(' ').join('').split('-').join('')
      var seconndNewNumber = this.param.numberTwo.split('(').join('').split(')').join('').split(' ').join('').split('-').join('')

      TypeCss.downloadcss(this.style.top, this.style.topOther, this.style.fundo, this.style.fundoBox, 
      this.style.fundoText, this.style.footer, this.style.botao, this.style.botaoText, this.style.posicao, this.param.fundo, this.style.fundoImagem)

      TypeHtml.downloadHtml(this.text.title, this.text.subtitle, this.text.botao, this.text.texto, 
      newNumber, seconndNewNumber, this.param.otherNumber, this.text.segundobotao)

      TypeJs.downloadJs(this.text.title, this.text.subtitle, this.text.botao, this.text.texto, 
      this.text.segundobotao)
    },
    mobile() {
      if (screen.width <= 760) {
        document.querySelector('.card').style.display = 'none';
        document.querySelector('#icon__whats').style.display = 'block';
        document.querySelector('#icon__x').style.display = 'none';
    
      }
    },
    checkImage(imagem) {
      document.querySelector('.card__body').style = "background-image:url("+imagem+");"
      this.style.fundoImagem = "background-image: url("+imagem+") !important"
    }
  },
  components: { Api, Accordio }
}
</script>

<style scoped>
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

  .colors #favcolor{
    margin-bottom: 15px;
  }

  .param input{
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
  }
</style>
