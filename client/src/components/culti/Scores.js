import React, { useEffect, useState } from 'react';
import { Accordion, Table } from 'react-bootstrap';

import Axios from "axios";
function Scores() {
    var i=0;
    const itemRows = [];
    const [scores,setscores] = useState([])
    const Heads = [
        'Team', 'Points'
    ]
    for(var event in scores){
        i+=1
        var objs = scores[event];
        const item =(<Accordion defaultActiveKey="0">
        <Accordion.Item eventKey={i}>
            <Accordion.Header>{event}</Accordion.Header>
            <Accordion.Body>
                <Table responsive="md" striped bordered hover>
                    <thead>
                        <tr>
                            {Heads.map((Head) =>
                            (
                                <th>{Head}</th>
                            ))}
                        </tr>
                    </thead>
                  
                        <tbody >
                        
                        {objs.map((obj)=>(
                            <tr>
                                <td>{obj.Team}</td>
                                <td>{obj.Points}</td>
                            </tr>
                        ))}
                         
                        </tbody>
                

                </Table>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        )
        itemRows.push(item)
   }
       
    useEffect(()=>{
        Axios.get('http://localhost:3001/data/culti').then((response)=>{
            setscores(response.data);
        })
    },[])
   
    return (
        <div className='container relative'>
          {itemRows}  
        </div>
    )
}

export default Scores