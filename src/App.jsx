import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import JobsView from './pages/JobsView';
import PrepView from './pages/PrepView';

function App() {
  // Initialize shared state variables
  const [showJobModal, setShowJobModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showPrepModal, setShowPrepModal] = useState(false);
  const [selectedPrepItem, setSelectedPrepItem] = useState(null)
  const [jobs, setJobs] = useState ([]);
  const [prepItems, setPrepItems] = useState([]);
  

  //Returns the Dashboard view passing the jobs and prepItems state variable arrays
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dash" replace />} />
      <Route path="/dash"
      element = {
      <Dashboard 
        jobs={jobs} setJobs={setJobs}
        prepItems={prepItems} setPrepItems={setPrepItems}
        showJobModal={showJobModal} setShowJobModal={setShowJobModal}
        selectedJob={selectedJob} setSelectedJob={setSelectedJob}
        showPrepModal={showPrepModal} setShowPrepModal={setShowPrepModal}
        selectedPrepItem={selectedPrepItem} setSelectedPrepItem={setSelectedPrepItem}   
      />}/>
      <Route path="/jobs"
      element = {
        <JobsView 
          jobs={jobs} setJobs={setJobs}
          showJobModal={showJobModal} setShowJobModal={setShowJobModal}
          selectedJob={selectedJob} setSelectedJob={setSelectedJob}
          />
      }/>
      <Route path="/prep"
      element = {
        <PrepView 
          prepItems={prepItems} setPrepItems={setPrepItems}
          showPrepModal={showPrepModal} setShowPrepModal={setShowPrepModal}
          selectedPrepItem={selectedPrepItem} setSelectedPrepItem={setSelectedPrepItem}
          />
      }/>
    </Routes>
  );
}


export default App
