et formDatas = []
let formKeys = []
let clientDatas = {
    Nome :'' ,
    Cel :''  ,
    Maquina :''
}

let maquina
let produto=[] 

const containerPoptions = document.querySelector('#container-p-options')
const containerOptions = document.querySelector('#container-options')

const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const option5 = document.querySelector('#option5')

option1.addEventListener('click' , () => {
        containerPoptions.classList.add('hidden')
        alert('Produto Selecionado , agora clique em ok e depois  no botão verde!')
        if(option1.innerHTML === 'Pá carregadeira' ){
            maquina = 'Pá carregadeira'
            console.log(maquina)
            produto[0] = maquina
        } 
})

option2.addEventListener('click' , () => {
    containerPoptions.classList.add('hidden')
    alert('Produto Selecionado , agora clique em ok e depois  no botão verde!')  
    if(option2.innerHTML === 'Retrô escavadeira' ){
        maquina = 'Retrô escavadeira'
        console.log(maquina)
        produto[0] = maquina
    } 
})

option3.addEventListener('click' , () => {
    containerPoptions.classList.add('hidden')
    alert('Produto Selecionado , agora clique em ok e depois  no botão verde!')   
    if(option3.innerHTML === 'Escavadeira Hidráulica' ){
        maquina = 'Escavadeira Hidráulica'
        console.log(maquina)
        produto[0] = maquina
    } 
})

option4.addEventListener('click' , () => {
    containerPoptions.classList.add('hidden')
    alert('Produto Selecionado , agora clique em ok e depois  no botão verde!')   
    if(option4.innerHTML === 'Rolo compactador' ){
        maquina = 'Rolo compactador'
        console.log(maquina)
        produto[0] = maquina
    } 
})

option5.addEventListener('click' , () => {
    containerPoptions.classList.add('hidden')
    alert('Produto Selecionado , agora clique em ok e depois  no botão verde!')   
    if(option5.innerHTML === 'Pranchas' ){
        maquina = 'Pranchas'
        console.log(maquina)
        produto[0] = maquina
    } 
})

const button = document.querySelector('#button')

button.addEventListener('click' , ()=>{
    let propertKeys = Object.keys(clientDatas)
    for (let i = 0; i <= 1; i++){
        let input = document.querySelector('#form .inputs')
        
        formDatas[i] = input.value
        input.classList.remove('inputs')

         formKeys[0] = propertKeys[0] + ':' + ' ' + formDatas [0] + ' '
         formKeys[1] = propertKeys[1] + ':' + ' ' + formDatas [1] + ' ' +  propertKeys[2]  + ':' + ' ' + produto[0]
    }
   
   window.open('https://wa.me/14996797612?text=' + formKeys)
})
