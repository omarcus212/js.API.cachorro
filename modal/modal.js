


const abrirmodal = () =>{

    document.getElementById('modal-container').classList.add('active');
    

}


const fechar = () =>{
    document.getElementById('modal-container').classList.remove('active');
}

document.getElementById('imagem-container').addEventListener('click', abrirmodal);
document.getElementById('fecharbtn').addEventListener('click', fechar);