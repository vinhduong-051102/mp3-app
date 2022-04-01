
import './App.scss';
import  ItemComponent  from '../src/components/ItemComponent'

function App() {
  const listMusic = [
    {
      id: 1,
      name: '1',
      singer: 'a1',
      description: 'd1' 
    },
    {
      id: 2,
      name: '2',
      singer: 'a2',
      description: 'd2' 

    },
    {
      id: 3,
      name: '3',
      singer: 'a3',
      description: 'd3' 
    }
  ]
  return (
    <div className="App">
      <h1>Mới phát hành</h1>
      {listMusic.map((sing, index) => 
        <ItemComponent 
          key = {index}
          props = {sing}
        />
      )}
    </div>
  );
}

export default App;
