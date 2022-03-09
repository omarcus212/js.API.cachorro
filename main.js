'use strict'





const pesquisarcachorro = async (raca) =>{

    const url = `https://dog.ceo/api/breed/${raca}/images`;

    const reponse = await fetch(url);

    const data = await reponse.json();


    return data;


}


const criarimg = (imagem) =>{
    
    const img = document.createElement('img');

    img.scr = imagem;

    return img;

}




const carregarimg = async () =>{

const container = document.getElementById('imagen-container');

const raca = document.getElementById('raca').value;

const imagem = await pesquisarcachorro(raca);

const tagimgs = imagem.message.map(criarimg)

container.replaceChildren(...tagimgs);


}




document.getElementById('pesquisar').addEventListener('click', carregarimg);


