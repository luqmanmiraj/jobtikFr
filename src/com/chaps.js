import * as React from 'react';
import Ch from './ch';
import rt from '../Data'

const mystyle = {
    display:"flex",
    flexBasis:'100%',
    maxWidth: "100%",
    flexDirection: 'row',
    flexWrap:'wrap'
     };
    
    //"Hooks":{ title : "" , url : "",  des :" " },
export default function Facebook() {

  let k = Object.keys(rt).sort( (a,b)=>(a-b) )
    console.log(rt)
  return (
    <div style = {mystyle}>
      {k.map(v=>(
        <> 
          <Ch id = "1" name = {v} data = {rt[v]}  />


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
