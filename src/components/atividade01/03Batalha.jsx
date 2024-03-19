const Hero = ({nome, img}) => {
    return <div>
        <h1>Nome Herói: {nome} </h1>
        <img src={img}/>
    </div>
}

const Enemy = ({nome, img}) => {
    return <div>
        <h1>Vilão: {nome} </h1>
        <img src={img}/>
    </div>
}

const Arena = () => {
    return <div>
      <Hero nome={"Mulher Gavião"} img={"https://static.ndmais.com.br/2023/07/mulher-gaviao.jpg"} width={1400}/>
      <Enemy nome={"Cheetah"} img={"https://assets1.ignimgs.com/2020/08/22/cheetah-explained-1598118868656_160w.jpg?width=700"}/>
   </div>
}

const World = ({children}) =>{
    return <div>
        {children}
    </div>
}

export {Hero, Enemy, Arena, World}

/*
import { Arena, World } from './components/atividade01/03Batalha';
function App() {
  return (
    <div className="App">
      <World>
        <Arena/>
      </World>
     </div>
  );
}
*/