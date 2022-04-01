import Title from './components/Title';
import './App.scss';
import  ItemComponent  from '../src/components/ItemComponent'
import DB from './db'

function App() {
  const datas = DB().data.items
  return (
    <div className="App">
      <h1>Mới phát hành</h1>
      <Title />
      {datas.map((data, index) => 
        <div key = {index}>
          <ItemComponent 
            props = {data}
          />
        </div>

      )}
    </div>
  );
}

export default App;
