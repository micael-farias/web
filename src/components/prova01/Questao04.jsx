import React, { useState, useEffect } from "react";
import './MaiorEMenor.css'; // Certifique-se de ter o CSS importado

export const Questao04 = () => {
    const [maiorPopulacao, setMaiorPopulacao] = useState({ capital: "Qualquer", populacao: 0 });
    const [menorPopulacao, setMenorPopulacao] = useState({ capital: "Qualquer", populacao: 0 });

    useEffect(() => {
        // Função para criar uma Promise que retorna o array fixo localmente
        const getData = () => {
            return new Promise((resolve, reject) => {
                const data = [
                    { capital: ["Dublin"], population: 4994724 },
                    { capital: ["Nicosia"], population: 1207361 },
                    { capital: ["Madrid"], population: 47351567 }
                ];
                resolve(data);
            });
        };

        // Função assíncrona para buscar os dados
        const fetchData = async () => {
            const data = await getData();
            // Crio duas variaveis locais pra guardar a maior e menor população pra so no final quando encontrar ela atualiza o estado
            let maiorPopulacao = { capital: "Qualquer", populacao: 0 };
            let menorPopulacao = { capital: "Qualquer", populacao: 99999999 };
                
            // pra cada uma verifica a população, se for maior ou menor que a atual, vai assumir sua posição
            data.forEach(item => {
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
};
