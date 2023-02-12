import * as React from 'react';
import Ch from './ch';
import rt from '../Data'

const mystyle = {
    display:"flex",
    flexBasis:'100%',
    maxWidth: "100%",
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent:'space-evenly'
     };
    
    //"Hooks":{ title : "" , url : "",  des :" " },
export default function Facebook() {


  let k = Object.keys(rt).sort((a,b)=>a.localeCompare(b))
    console.log(rt)
  return (
    <div style = {mystyle}>
      {k.map(v=>(
        <> 
          <Ch id = "1" name = {v} data = {rt[v]}
          title={rt[v].title}
           url={ (rt[v].url).length>1?rt[v].url:"https://docs.google.com/document/d/e/2PACX-1vQ7g4x84LU2rc1o6su8ssSTXCXU2fPo7pguSyBO_QIqI08bcL0sr1FifQlwiepKpuwlPjm_9TL3SpjP/pub?embedded=true"}  />
          

        </>
      ))}
     
      {/* <Ch id = "2"/>
      <Ch  id = "3"/>
      <Ch id = "4" />
      <Ch  id = "5"/>
      <Ch id = "6"/>
      <Ch  id = "7"/>
      <Ch id = "8"/> */}
    </div>
  );
}
