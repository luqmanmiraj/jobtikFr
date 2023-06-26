import * as React from 'react';
import Ch from './ch';
import rt from '../teks/rt'
import js from '../teks/algo'
import Chip from '@mui/material/Chip';
import git from '../teks/devOps'
import rn from '../teks/rn'
import fr from '../teks/fr'
import bk from '../teks/bk'
import cl from '../teks/cloud';
import db from '../teks/db';
import Dividr from './divider';
import algopy from '../teks/algopy';

 import style from './chaps.css'


 import Divider from '@mui/material/Divider';
 import { useSlotProps } from '@mui/base';
import Ap from '../teks/algopy';


const mystyle = {
  display: "flex",
  flexBasis: '100%',
  maxWidth: "100%",
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly'
};

//"Hooks":{ title : "" , url : "",  des :" " },
export default function Facebook() {

  const [oddEven, setOddeven] = React.useState('even');

  let k = Object.keys(rt).sort((a, b) => a.localeCompare(b))
  let g = Object.keys(git).sort((a, b) => a.localeCompare(b))
  let n = Object.keys(rn).sort((a, b) => a.localeCompare(b))
  let f = Object.keys(fr).sort((a, b) => a.localeCompare(b))
  let b = Object.keys(bk).sort((a, b) => a.localeCompare(b))
  let c = Object.keys(cl).sort((a, b) => a.localeCompare(b))
  let d = Object.keys(db).sort((a, b) => a.localeCompare(b))
  







  let j = Object.keys(js).sort((a, b) => a.localeCompare(b))
  // console.log(rt)
  return (
    <>
    <br />
    <br />
    <br />
      <Dividr id="algo" name="algo" />
      <div className={"even"} style={mystyle}>
        {j.map((v, i) => (
          <>
            <Ch id={'j' + i} name={v}
              tech="Algo"
              data={rt[v]}
              title={js[v].title}
              type={js[v].type === 'topics' ? 'topics' : 'iframe'}
              topics={js[v].topics}
              url={(js[v].url).length > 1 ? js[v].url : "https://docs.google.com/document/d/e/2PACX-1vQ7g4x84LU2rc1o6su8ssSTXCXU2fPo7pguSyBO_QIqI08bcL0sr1FifQlwiepKpuwlPjm_9TL3SpjP/pub?embedded=true"} />

          </>
        ))}
      </div>

      <Dividr id='react' name="Algo-Python" />
      <div className={"odd"} style={mystyle}>{k.map((v, i) => (

        <><Ch id={'k' + i} name={v}
          // data={rt[v]}
          tech="React"
          title={rt[v].title}
          type={rt[v].type === 'topics' ? 'topics' : 'iframe'}
          topics={rt[v].topics}
          // data={rt[v]}
          url={rt[v].url} /></>))}</div>

      

      <br />
      <Dividr id='react' name="React" />
      <div className={"odd"} style={mystyle}>{k.map((v, i) => (

        <><Ch id={'k' + i} name={v}
          // data={rt[v]}
          tech="React"
          title={rt[v].title}
          type={rt[v].type === 'topics' ? 'topics' : 'iframe'}
          topics={rt[v].topics}
          // data={rt[v]}
          url={rt[v].url} /></>))}</div>


      <Dividr id="frontend" name="Front-End" />
      <div className={"even"} style={mystyle}>{f.map((v, i) => (
        <><Ch id={'k' + i}
          tech="Front-End"
          title={fr[v].title}
          type={fr[v].type === 'topics' ? 'topics' : 'iframe'}
          topics={fr[v].topics}

          name={v} data={fr[v]}
          url={fr[v].url} /></>))}</div>

      <Dividr id='reactnative' name="ReactNative" />
      <div className={"odd"}  style={mystyle}>{n.map((v, i) => (
        <><Ch id={'k' + i} 
        tech="ReactNative"
        title={rn[v].title}
        type={rn[v].type === 'topics' ? 'topics' : 'iframe'}
        topics={rn[v].topics}
         name={v} data={rn[v]} 
         url={rn[v].url} /></>))}</div>


      <Dividr id="backend" name="BackEnd" />
      <div className={"even"} style={mystyle}>{b.map((v, i) => (
        <><Ch id={'k' + i} tech="BackEnd"
          title={bk[v].title}
          type={bk[v].type === 'topics' ? 'topics' : 'iframe'}
          topics={bk[v].topics}
          name={v} data={bk[v]}
          url={bk[v].url} /></>))}

      </div>

      <Dividr id='devops' name="DevOps" />
      <div className={"odd"} style={mystyle}>{g.map((v, i) => (
        <><Ch id={'k' + i} tech="DevOps" name={v} data={git[v]} url={git[v].url} /></>))}</div>

      <Dividr id='cloud' name="Cloud" />
      <div className={"even"} style={mystyle}>{c.map((v, i) => (
        <><Ch id={'k' + i} tech="Cloud" 
        title={cl[v].title}
        type={cl[v].type === 'topics' ? 'topics' : 'iframe'}
        topics={cl[v].topics}
         name={v} data={cl[v]} 
         url={cl[v].url} /></>))}</div>

      <Dividr id='db' name="DB" />
      <div className={"odd"} style={mystyle}>{d.map((v, i) => (
        <><Ch id={'k' + i} tech="DB" name={v} data={db[v]} url={db[v].url}
          data={db[v]}
          title={db[v].title}
          type={db[v].type === 'topics' ? 'topics' : 'iframe'}
          topics={db[v].topics}


        /></>))}</div>

    </>
  );
}
