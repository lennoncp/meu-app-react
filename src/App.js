import React, {useState} from 'react';
import Lista from './Lista'

function App() {

  const [lista, setLista] = useState(['Lista 1', 'Lista 2'])

  return (
    <>
      <Lista lista={lista} />
      <input type="text" />
      <button>Add a Lista</button>
      <button>Remover Selecionados</button>
      <br />
      <label>0 itens na Lista</label>
    </>
  );
}

export default App;
