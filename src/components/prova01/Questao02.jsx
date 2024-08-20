import { useState } from "react"


export const Questao02 = () => {
    // Criei um estado pra guardar a ultima posição que foi usada, no caso é um boleano que estou guardando já que há apenas duas posições possíveis
    const [ ultimaPosicao,setUltimaPosicao ] = useState(true)

    // A partir da ultima posição eu monto a url que vai exibir a imagem, se o valor for positivo vai mostrar a imagem de frente, negativo de costas
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ultimaPosicao ? "" : "back/"}25.png`

    // Qquando eu clicar no botão, o valor de ultima posição vai mudar, no caso estou negando o valor atual e a url será alterad
    
    return <div>
        <img src={url}/>
        <button onClick={ () => setUltimaPosicao(!ultimaPosicao)} >Clique aqui para mudar a posição</button>
    </div>
}

