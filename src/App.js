import {useState, useRef} from 'react'
import './App.scss';
import ReactTable from 'react-table';


function App() {
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState([])
  const inputRef = useRef()
  const inputCurr = inputRef.current
  const data = []
  const handleAddJob = () => {
    setJobs(prev => [...prev, job])
    setJob('')
    inputCurr.focus()
  }
  return (
    <div className="App">
      <div className="header">
        <input
          placeholder="Enter job"
          onChange={(e) => setJob(e.target.value)}
          value = {job}
          ref={inputRef}
         />
        <button
          onClick={handleAddJob}
        >
          Add job
        </button>
      </div>
      
    </div>
  );
}

export default App;
