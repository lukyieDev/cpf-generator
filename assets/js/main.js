import  {gerarCPF}  from "./gerarCPF.js";
class geraCPF {
    constructor(){
        this.gerarBTN = document.querySelector('.gerarBTN')
        this.result = document.querySelector('.resultado')
        this.checkOutBTN = document.querySelector('.dotCheckout')
        this.gerarValido = gerarCPF
        this.gerar = this.renderCPF()
    }

    renderCPF(){
        this.gerarBTN.addEventListener('click', ()=>{
            if(!this.checkOutBTN.checked){
                this.CPFgerar()
                return
            }
            this.CPFgerar()
            $('.cpf').mask('000.000.000-00')
        })
    }

    CPFgerar(){
            this.result.textContent = ''
            const cpfInput = document.createElement('input')
            cpfInput.setAttribute('readonly', true)
            cpfInput.classList.add('cpf')
            cpfInput.value = this.gerarValido()

            this.result.appendChild(cpfInput)
    }
}
const geradorDeCPF = new geraCPF()
geradorDeCPF



