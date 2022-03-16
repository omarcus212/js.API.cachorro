'use strict'



const pesquisarRaca =  async () =>{

 const url = `https://dog.ceo/api/breeds/list/all`;

 const resposta = await fetch(url);

 const data = await resposta.json();

return Object.keys (data.message);

}


const pesquisarcachorro = async (raca) =>{

    const url = `https://dog.ceo/api/breed/${raca}/images`;

    const reponse = await fetch(url);

    const data = await reponse.json();

    return data;
    

}


const criarimg = (imagem) =>{
    
    const img = document.createElement('img');

    img.src = imagem;

    return img;

}





const carregarimg = async () =>{

const container = document.getElementById('imagem-container');

const raca = document.getElementById('raca').value;

const imagens = await pesquisarcachorro(raca);

const tagimg = imagens.message.map(criarimg)

container.replaceChildren(...tagimg);
console.log(container)



}


const carregaraca = async () =>{
const list = document.getElementById('lista-racas')
const raca = await pesquisarRaca();
list.innerHTML = `
       


    <option>
         ${raca.join("</option><option>")}
    </option>


     `

}









document.getElementById('pesquisar').addEventListener('click', carregarimg);
carregaraca();