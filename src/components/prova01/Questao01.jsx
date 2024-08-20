export const Questao01A = () => {
    const lista = [
        {a: 10, b: 3, c: 7},
        {a: 5, b: -3, c: 9},
        {a: 1, b: 9, c: 40},
    ]

    return Questao01B({lista})
}

function Questao01B({lista}){

    //Criei uma string pra ir concatenando os maiores elementos e mandar numa string só
    var maioresElementos = "Os maiores elementos: "

    //Criei um laço de repetição pra passar por cada objeto
    for (var i in lista) {

        // Pra cada item eu crio um objeto e converto os valores para interio
        var item = lista[i]
        i = parseInt(i)

        item.a = parseInt(item.a)
        item.b = parseInt(item.b)
        item.c = parseInt(item.c)

        console.log(item.a + " " + item.b + " " + item.c)
        maioresElementos+=`Objeto ${i + 1} ->`

        // Faço uma verificação pra cada propriedade verificando se ela é maior do que as outras presentes
        if(item.a > item.b && item.a > item.c){
            maioresElementos+=`A: ${item.a} ---------->`
        }else if(item.b > item.a && item.b > item.c){
            maioresElementos+=`B: ${item.b} ---------->`
        }else if(item.c > item.a && item.c > item.b){
            maioresElementos+=`C: ${item.c} ---------->`
        }

        maioresElementos+=""     
    }

    // Após verificar mostro os maiores elementos
    return <div>
        <p>{maioresElementos}</p>
    </div>;
}