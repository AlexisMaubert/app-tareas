import './App.css';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className='app-tareas'>
      <div className='contenedor-titulo'>
        <h1 className='titulo'>
          TAREAS
        </h1>
      </div>
      <div className='tareas-lista'>
        <h2>
          Mis tareas
        </h2>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
