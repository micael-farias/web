const PlacaMae = ({nome, preco}) =>{

    return <div>
        <h2>Placa mãe dados</h2>
        <h3>Nome: {nome}</h3>
        <h3>Preco: {preco}</h3>
    </div>           
}

const Memoria = ({nome, preco}) =>{

    return <div>
        <h2>Memória dados</h2>
        <h3>Nome: {nome}</h3>
        <h3>Preco: {preco}</h3>
    </div>   
}

const PlacaDeVideo = ({nome, preco}) =>{
    return <div>
        <h2>Placa de video dados</h2>
        <h3>Nome: {nome}</h3>
        <h3>Preco: {preco}</h3>
    </div>   
}

export { PlacaMae, Memoria, PlacaDeVideo }

/*
import * as PC from './components/atividade01/02MeuPC';

function App() {
  return (
    <div className="App">
     <PC.PlacaMae nome={"Placa"} preco={12.0}/>
     <PC.Memoria nome={"Placa"} preco={12.0}/>
     <PC.PlacaDeVideo nome={"Placa"} preco={12.0}/>
    </div>
  );
}

export default App;

*/