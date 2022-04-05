import Title from './components/Title';
import './App.scss';
import  ItemComponent  from '../src/components/ItemComponent'
import DB from './db'
import Header from './components/Header'
import { useState, useEffect } from 'react'

function App() {
  const [datas, setDatas] = useState(() => DB())
  const [input, setInput] = useState('')
  const appCallBack = (data) => {
    const newArr = [...data]
    setDatas(newArr)
  }
  const appInputCallBack = (data) => {
    setInput(data)
  }
  useEffect(() => {
    datas.sort((a, b) => b.duration - a.duration)
    const newArr = [...datas]
    setDatas(newArr)
  }, [])
  return (
    <div className="App">
      <Header 
        appInputCallBack = {appInputCallBack}
        appCallBack = {appCallBack}
        input = {input}
        datas = {datas}
      />
      <Title 
        data={datas}
      />
      {datas.map((data, index) => 
        <div key = {index}>
          <ItemComponent 
            props = {data}
            index = {index}
          />
        </div>
      )}
    </div>
  );
}

export default App;
