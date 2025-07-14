import { useEffect, useState } from 'react';

import Dashboard from './pages/Dashboard.jsx';

function App() {
  // Initialize the state to empty arrays
  const [jobs, setJobs] = useState ([]);
  const [prepItems, setPrepItems] = useState([]);

  // temp variables for holding sample data
  const job1 = {
    id: 1,
      company: 'Google',
      role: 'Frontend Developer',
      source: 'LinkedIn',
      dateApplied: '2025-07-12',
      status: 'Applied',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
  };
  const job2 = {
    id: 2,
      company: 'Apple',
      role: 'Frontend Developer',
      source: 'Company Site',
      dateApplied: '2025-07-13',
      status: 'Applied',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
  };
  const prep1 = {
    id: 1,
    type: "Concept",
    title: "React.js study notes",
    notes: "React is a JS library that focuses on building single-page applications through component based architecture and updating a virtual copy of the DOM",
    tags: ["Javascript", "React", "Frontend"],
    difficulty: "Easy",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  const prep2 = {
    id: 2,
    type: "Question",
    title: "What is useState() in React?",
    notes: "The useState() is a built in React hook that allows state variables to be used across multiple decoupled components, being updated and manipulated by these components",
    tags: ["Javascript", "React", "Frontend"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  //Functions for abstracting the addition of a job or prep item to the state array, ensuring the previous state values are always used
  const handleAddJob = (newJob) => {
  setJobs((prev) =>
    [...prev, newJob].sort(
      //Sorts the new item by if it is more recent (by updatedAt date) than each item in the prev array
      (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
      )
    );
  };

  const handleAddPrep = (newPrep) => {
    setPrepItems((prev) =>
    [...prev, newPrep].sort(
      (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
      )
    );
  };

  //functions to keep useEffect clean
  const loadMockData = () => {
    handleAddJob(job1);
    handleAddJob(job2);
    handleAddPrep(prep1);
    handleAddPrep(prep2);
  }
  //useEffect with an empty dependency array ensures that these functions are only called one after the component mounts, and the temporary manual data is only loaded in once
  useEffect(() => {
  loadMockData();
}, []);

  //Returns the Dashboard view passing the jobs and prepItems state variable arrays
  return <Dashboard jobs={jobs} setJobs = {setJobs} prepItems={prepItems} setPrepItems={setPrepItems}/>
}


export default App
