import React,{useState} from 'react'
import { Accordion, Table, Tabs,Tab } from 'react-bootstrap'
import SportsB from '../components/Sports/ScoresB'
import SportsG from '../components/Sports/ScoresG'
import Culti from '../components/culti/Scores'
import Techy from '../components/techy/Scores'

function Home() {
    const [key, setKey] = useState('culti');
  return (
    <>
    <div className="relative container vh-100">
      <h2>OVERALL LEADERBOARD</h2>
      <div className='w-full mx-auto'>
        <div class="infogram-embed" data-id="6336eb78-9a40-48ee-8ae9-020972a531d8" data-type="interactive" data-title="Bar Chart"></div>
      </div>
    </div>
    
    <div className='relative w-75 mx-auto my-5 vh-100 '>
      <div className='relative w-50 mx-auto my-5'>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="culti" title="Culti" tabClassName="profile-tabitem">
            <div className='w-full mx-auto'>
              <div class="infogram-embed" data-id="52ac07a1-91aa-439d-9ff1-5ea8dbcda46b" data-type="interactive" data-title="Copy: Bar Chart"></div>
            </div>
            <Culti />
          </Tab>
          <Tab eventKey="Techy" title="Techy" tabClassName="profile-tabitem">
            <div className='mx-auto' >
              <div className="infogram-embed" data-id="1b06acc0-587e-4a32-b755-ab5695bf3b53" data-type="interactive" data-title="Copy: Culti"></div>
            </div>
            <Techy />
          </Tab>
          <Tab eventKey="SportsB" title="Sports Boys" tabClassName="profile-tabitem">
            <div class="infogram-embed" data-id="24969d67-560e-482d-9284-4e8400d58742" data-type="interactive" data-title="Copy: Techy"></div>
              <SportsB />
          </Tab>
          <Tab eventKey="SportsG" title="Sports Girls" tabClassName="profile-tabitem">
            <div class="infogram-embed" data-id="24969d67-560e-482d-9284-4e8400d58742" data-type="interactive" data-title="Copy: Techy"></div>
            <SportsG />
          </Tab>
        </Tabs>
      </div>
    </div>
    <div className='relative'>

    </div>
    </>
  );

}

export default Home