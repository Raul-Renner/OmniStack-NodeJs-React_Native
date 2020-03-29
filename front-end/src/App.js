import React from 'react';
import './global.css';
import Routes from './routes';

function App() { 
  return (
    <Routes />
  )
}


export default App;









//Componente : nada mais é uma funcao que retorna html
// JSX - JavaScript xml -  quanoo o html ta integrado dentro do JS

//FUNCAO UseState: usada para "manipular" a variavel de uma funcao,na qual
//esta é um array de 2 posicoes, onde a 1 posicao e a posicao do valor da variavel
// e a segunda posicao e a funcao ira ser utilizada para alterar o valor dessa variavel

  /**const [counter , setCounter] = useState(0);
  function increment(){
    setCounter( counter + 1);
    
  }
  return (
    //<Header title="Semana OmniStack11.0"/>
      <div>
          <button onClick={increment}>Incrementar</button>
      </div>
               // <Header>Contador: {counter}</Header>

    
  );
}
*/


/** PROPRIEDADE
 * mesmo conceito de propriedade do HTML
 * porem sao atributos passada para componentes ao inves de elementos
*/

/**ESTADO
 * Podemos entender ele como uma informacao que sera mantida pelo componente
 * por exemplo: um dados do usuario, que serao trabalhadas frequentemente no sistema
 */