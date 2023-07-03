import * as React from 'react';
import Ch from './ch';
import Dividr from './divider';
import AddBox from '@mui/icons-material/AddBox';
import AddChapter from './addChapter'
import axios from 'axios';



const mystyle = {
  display: "flex",
  flexBasis: '100%',
  maxWidth: "100%",
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly'
};

export default function Facebook(props) {
  const [showfield, setShowField] = React.useState(false);
  const [ts,setTs] = React.useState([])
  React.useEffect(()=>{
    axios.get("http://localhost:8080/api/chap/?parent_tech="+props.tech)
            .then(response => {
                console.log(response.data);
                setTs(response.data)


                // Handle response
            })
  },[]);

  
  return (
    <>

      <div className={"odd evenodd"} style={mystyle}>
      <Dividr className="divider" id={props.tech} name={props.tech} />
        
        {props.keys.map((v, i) => (
        <><Ch id={'k' + i+v} tech={props.tech} name={v} data={props.data[v]} url={props.data[v].url}
          title={props.data[v].title}
          type={props.data[v].type === 'topics' ? 'topics' : 'iframe'}
          topics={props.data[v].topics}


        /></>))
        
        }
      {!showfield &&  <AddBox onClick={()=>{setShowField(true)}} sx={{pt:2}} tech = {props.tech}/>}
      {showfield && <AddChapter fnshow={()=>{setShowField(!showfield)}} tech={props.tech}/>}
      {ts.map((v,i)=>{
        return (<><Ch id={'k' + i+v} tech={props.tech} name={v.name}  /></>)
      })}
        </div>




    </>
  );
}
