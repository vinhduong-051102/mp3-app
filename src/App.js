import Title from './components/Title';
import './App.scss';
import  ItemComponent  from '../src/components/ItemComponent'
import DB from './db'


function App() {
  const appCallBack = (data) => {
    console.log(data);
  }
  const datas = DB().data.items
  return (
    <div className="App">
      <div>
        <h1 className="f-54">Mới phát hành</h1>
      </div>

      <Title 
        data={datas}
        appCallBack = {appCallBack}
      />
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
