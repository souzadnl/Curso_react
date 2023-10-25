import Hello from './components/Hello';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

import './App.css';

function App() {

  const name = "Daniel"
  return (
    <div className="App">
      <Evento numero="1"></Evento>
      <Evento numero="2"></Evento>
      <Form></Form>
      <List></List>
      <Hello></Hello>
      <SayMyName nome = {name}></SayMyName>
      <Pessoa nome = "Daniel" idade = "19" profissao = "Desenvolvedor" foto="https://via.placeholder.com/150"></Pessoa>
    </div>
  );
}

export default App;
