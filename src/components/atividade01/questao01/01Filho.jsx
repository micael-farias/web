
const resultadoImc = (imc) =>{
    if(imc < 18){
        return <h3>Abaixo do peso</h3>
    }

    if(imc > 24){
        return <h3>Acima do peso</h3>
    } 

    return <h3>Peso Ideal</h3>
}

export const Filho = ({altura, peso}) =>{

    const imc = peso/(altura*altura)

    return <h1>
        Misericordia, o filho tem IMC = {imc.toFixed(2)} portanto ele está/tem {resultadoImc(imc)}
    </h1>
}