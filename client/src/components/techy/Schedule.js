import React,{useEffect,useState} from 'react'
import { Accordion, Table } from 'react-bootstrap';
import Axios from "axios";
function Schedule() {
    var i=0;
    const itemRows = [];
    const [scores,setscores] = useState([])
    const Heads = [
        'Time', 'Event','Venue','Results'
    ]
    const Dates = ['25/02','26/02','27/02','28/02','01/03','02/03','03/03','04/03','05/03','06/03']
    for(var event in scores){
           const Date = Dates[i]
            var objs = scores[Date];
           const item =(<Accordion defaultActiveKey="0">
        <Accordion.Item eventKey={i}>
            <Accordion.Header>{Date}</Accordion.Header>
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
                                <td>{obj.Time}</td>
                                <td>{obj.Event}</td>
                                <td>{obj.Venue}</td>
                                <td>{obj.Results}</td>
                            </tr>
                        ))}
                         
                        </tbody>
                

                </Table>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        )
        itemRows.push(item)
        i+=1
   }
   useEffect(()=>{
    Axios.get('http://localhost:3001/schedule/techy').then((response)=>{
        setscores(response.data);
    })
},[])
   
    return (
        <div className='container relative'>
          {itemRows}  
        </div>
    )
}

export default Schedule