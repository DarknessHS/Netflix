import './App.css';
import { categories } from './api';
import { Row } from './Row.css';

function App() {
  return (
    <div className="App">

      {categories.map( ( category) => {

        return <Row title={category.title} />
      })}

    </div>
  );
}

export default App;
