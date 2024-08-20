import { useState } from "react"
import { axios } from "axios"
import { useEffect } from "react"

export const Questao03 = () => {

    // Crio dos estados pra guardar a maior e menor população
    const [maiorPopulacao, setMaiorPopulacao] = useState({ capital: "Qualquer", populacao: "0" })
    const [menorPopulacao, setMenorPopulacao] = useState({ capital: "Qualquer", populacao: "0" })

    // Aqui faço um useEffect pra executar apenas uma vez a operação async await que ocorre, que no caso é buscar a maior e menor população
    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
            const data = await response.json();

            // Crio duas variaveis locais pra guardar a maior e menor população pra so no final quando encontrar ela atualiza o estado
            let maiorPopulacao = { capital: "Qualquer", populacao: 0 };
            let menorPopulacao = { capital: "Qualquer", populacao: 99999999 };

            data.forEach(item => {
                // pra cada uma verifica a população, se for maior ou menor que a atual, vai assumir sua posição
                const capital = item.capital ? item.capital[0] : "Desconhecida";
                const populacao = parseInt(item.population);

                if (populacao > maiorPopulacao.populacao) {
                    maiorPopulacao = { capital, populacao };
                }

                if (populacao < menorPopulacao.populacao) {
                    menorPopulacao = { capital, populacao };
                }
            });

            setMaiorPopulacao(maiorPopulacao);
            setMenorPopulacao(menorPopulacao);
        };

        fetchData();
    }, []);

    // Aqui faço um html pra exibir os dados
    return (
        <div className="populacao-container">
            <div className="populacao-card maior">
                <h2>Maior População</h2>
                <p><strong>Capital:</strong> {maiorPopulacao.capital}</p>
                <p><strong>População:</strong> {maiorPopulacao.populacao.toLocaleString()}</p>
            </div>
            <div className="populacao-card menor">
                <h2>Menor População</h2>
                <p><strong>Capital:</strong> {menorPopulacao.capital}</p>
                <p><strong>População:</strong> {menorPopulacao.populacao.toLocaleString()}</p>
            </div>
        </div>
    );
}

