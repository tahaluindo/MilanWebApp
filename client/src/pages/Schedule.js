import React,{useState} from 'react'
import { Accordion, Table, Tabs,Tab } from 'react-bootstrap'
import Sports from '../components/Sports/Schedule'
import Culti from '../components/culti/Schedule'
import Techy from '../components/techy/Schedule'
function Schedule() {
    const [key, setKey] = useState('culti');
    return (
        <div className='relative w-75 mx-auto my-5 vh-100 '>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="culti" title="Culti" tabClassName="profile-tabitem">
            <Culti />
          </Tab>
          <Tab eventKey="Techy" title="Techy" tabClassName="profile-tabitem">
            <Techy />
          </Tab>
          <Tab eventKey="Sports" title="Sports" tabClassName="profile-tabitem">
            <Sports />
          </Tab>
        </Tabs>
        </div>
    )
}

export default Schedule