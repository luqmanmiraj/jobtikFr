import * as React from 'react';
import { useEffect } from 'react';

import Divdr from './divider';
import Pop from './popover';
import axios from 'axios';

export default function Topics1(props) {

const [ts,setTs] = React.useState([])
  React.useEffect(()=>{
    axios.get("http://localhost:8080/api/tutorials/bychap?text="+props.tname)
            .then(response => {
                console.log(response.data);
                setTs(response.data)


                // Handle response
            })
  },[]);

 let el = (  ts.length>0? <> {ts.map( (v)=>{
  return <Pop ptname={v.title} val={v.title} val1={v.tech}  ind={v.id} tech={v.tech}/>


 })}</> :<> </>)
    {/* <h4>{props.tech + ' -> ' + props.name}</h4> */}
    // <Topics tname={props} topics={props.topics} myTech={props.tech}/>
  return (<>
    {props.topics.map((vo, i) => {
      console.log("checking topics")
      console.log(props)
      return (<>
        <Divdr name={vo.cat} />
        {vo['val'].map((v, i) => {

          return (
            <>
              <Pop ptname={props.tname} val={v} val1={props.myTech}  ind={i} tech={props.myTech}/>
              {/* <Card
                key={'topics' + i}
                sx={{ minWidth: 180, maxWidth: 180, m: 2, display: 'inline-block' }}>

                <CardHeader style={{ letterSpacing: '0.07em' }}
                  titleTypographyProps={{
                    variant: 'h6', color: '#222222',
                    backgroundColor: "", letterSapcing: 5
                  }}
                  style={{ fontSize: "40px !important" }}
                  title={v.charAt(0).toUpperCase() + v.slice(1)} />

              </Card> */}
            </>

          )
        }

        )
        }
        <h2>From DB</h2>
        {el}
      </>
      )



    })}



  </>)

}
// export default topics1