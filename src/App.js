import './App.css';
import { Avo } from './components/atividade02/questao03/ComponenteAvo';
import { Questao01A } from './components/prova01/Questao01';
import { Questao02, Render } from './components/prova01/Questao02';
import { Questao03 } from './components/prova01/Questao03';
import { Questao04 } from './components/prova01/Questao04';
function App() {
  return (
    <div className="App">
      <p>Questão 1:</p>
    <Questao01A/>
    <p>Questão 2:</p>
        <Questao02/>
        <p>Questão 3:</p>
        <Questao03/>
        <p>Questão 4:</p>
        <Questao04/>
    </div>
  );
}

export default App;
