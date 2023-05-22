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
import ts from '../teks/ts';
import Dividr from './divider';


import Divider from '@mui/material/Divider';
import { useSlotProps } from '@mui/base';


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
  let t = Object.keys(ts).sort((a, b) => a.localeCompare(b))







  let j = Object.keys(js).sort((a, b) => a.localeCompare(b))
  let ar = [j, k];
  // console.log(rt)
  return (
    <>
      <Dividr name="algo" />
      <div className={"even"} style={mystyle}>
        {j.map((v, i) => (
          <>
            <Ch id={'j' + i} name={v}
              tech="Algo"
              data={rt[v]}
              title={js[v].title}
              type={js[v].type == 'topics' ? 'topics' : 'iframe'}
              topics={js[v].topics}
              url={(js[v].url).length > 1 ? js[v].url : "https://docs.google.com/document/d/e/2PACX-1vQ7g4x84LU2rc1o6su8ssSTXCXU2fPo7pguSyBO_QIqI08bcL0sr1FifQlwiepKpuwlPjm_9TL3SpjP/pub?embedded=true"} />

          </>
        ))}
      </div>

      <Dividr name="TS" />
      <div className={"odd"} style={mystyle}>{t.map((v, i) => (
        <><Ch id={'k' + i} tech="TS" name={v} data={ts[v]} url={ts[v].url} /></>))}</div>

      <Dividr name="React" />
      <div className={"odd"} style={mystyle}>{k.map((v, i) => (

        <><Ch id={'k' + i} name={v}
          // data={rt[v]}
          tech="React"
          title={rt[v].title}
          type={rt[v].type == 'topics' ? 'topics' : 'iframe'}
          topics={rt[v].topics}
          // data={rt[v]}
          url={rt[v].url} /></>))}</div>

{/* name={v} data={fr[v]} url={fr[v].url} */}
 {/* <><Ch id={'k' + i} tech="Front-End" name={v} data={fr[v]} url={fr[v].url} /></>))}</div> */}
      <Dividr name="Front-End" />
      <div className={"even"} style={mystyle}>{f.map((v, i) => (
       
        

        <>
        {console.log("v")}
        {console.log(fr[v])}
        {console.log(fr[v].type)}
        <Ch id={'k' + i} name={v}
        tech="Front-End"
        title={fr[v].title}
        type={fr[v].type == 'topics' ? 'topics' : 'iframe'}
        topics={fr[v].topics}
        url={fr[v].url}
         /></>))}</div>




      <Dividr name="ReactNative" />
      <div className={"odd"} style={mystyle}>{n.map((v, i) => (
        <><Ch id={'k' + i} tech="ReactNative" name={v} data={rn[v]} url={rn[v].url} /></>))}</div>

      <Dividr name="BackEnd" />
      <div className={"even"} style={mystyle}>{b.map((v, i) => (
        <><Ch id={'k' + i} tech="BackEnd" name={v} data={bk[v]} url={bk[v].url} /></>))}</div>

      <Dividr name="DevOps" />
      <div className={"even"} style={mystyle}>{g.map((v, i) => (
        <><Ch id={'k' + i} tech="DevOps" name={v} data={git[v]} url={git[v].url} /></>))}</div>

      <Dividr name="Cloud" />
      <div className={"even"} style={mystyle}>{c.map((v, i) => (
        <><Ch id={'k' + i} tech="Cloud" name={v} data={cl[v]} url={cl[v].url} /></>))}</div>

      <Dividr name="DB" />
      <div className={"even"} style={mystyle}>{d.map((v, i) => (
        <><Ch id={'k' + i} tech="DB" name={v} data={db[v]} url={db[v].url}
          data={db[v]}
          title={db[v].title}
          type={db[v].type == 'topics' ? 'topics' : 'iframe'}
          topics={db[v].topics}


        /></>))}</div>

    </>
  );
}
