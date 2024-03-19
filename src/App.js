import logo from './logo.svg';
import './App.css';
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
