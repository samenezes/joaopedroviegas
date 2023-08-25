
import './pagina.css'
function Pagina(){
    
    function categoria(){
        fetch('https://opentdb.com/api.php?amount=30&category=15').then(legenda=> legenda.json()
        .then(dados=>{

                     var legenda = document.querySelector("#category")
                     var tipo = document.querySelector("#type")
                     var dificuldade = document.querySelector("#difficulty")
                     var pergunta = document.querySelector("#question")
                     var resposta = document.querySelector("#correct_answer")
                     

                     legenda.innerHTML = `${dados.content}`
                     tipo.innerHTML = `${dados.content}`
                     dificuldade.innerHTML = `${dados.content}`
                     pergunta.innerHTML = `${dados.content}`
                     resposta.innerHTML = `${dados.content}`

        }))
    }
    



    return(
    <>
        <h1>Filtro</h1>
        <div>
            <button onClick={categoria()} id="botao">CLICK HERE!</button>
        </div>
        <div>
            <figure>
                <figcaption id="legenda"></figcaption>
                <figcaption id="tipo"></figcaption>
                <figcaption id="dificuldade"></figcaption>
                <figcaption id="pergunta"></figcaption>
                <figcaption id="resposta"></figcaption>
                

                
            </figure>
                
        </div>


</>



)
}
export default Pagina