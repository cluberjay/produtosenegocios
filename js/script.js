let formDatas = []
let formKeys = []
let clientDatas = {
    Nome :'' ,
    Cel :''  ,
}

const button = document.querySelector('#button')

button.addEventListener('click' , ()=>{
    let propertKeys = Object.keys(clientDatas)
    for (let i = 0; i <= 1; i++){
        
         let input = document.querySelector('#form .inputs')
        
         formDatas[i] = input.value
         
         input.classList.remove('inputs')

         formKeys[i] = propertKeys[i] + ':' + ' ' + formDatas [i] + ' '
    }

    console.log(formKeys)
   
    window.open('https://wa.me/14996797612?text=' + formKeys)
})
