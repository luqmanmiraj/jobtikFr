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


import Divider from '@mui/material/Divider';


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





  let j = Object.keys(js).sort((a, b) => a.localeCompare(b))
  let ar = [j, k];
  // console.log(rt)
  return (
    <>
      <Divider sx={{ borderColor: 'white', width: '100%' }} light={false} variant="middle" > <Chip sx={{ coloe: 'white' }} label="Algos" /> </Divider>

      <div className={"even"} style={mystyle}>

        {j.map((v, i) => (
          <>
            <Ch id={'j' + i} name={v} data={rt[v]}
              title={js[v].title}
              url={(js[v].url).length > 1 ? js[v].url : "https://docs.google.com/document/d/e/2PACX-1vQ7g4x84LU2rc1o6su8ssSTXCXU2fPo7pguSyBO_QIqI08bcL0sr1FifQlwiepKpuwlPjm_9TL3SpjP/pub?embedded=true"} />

          </>
        ))}
      </div>


      <Divider sx={{ borderColor: 'white', width: '100%' }} light={false} variant="middle" > <Chip sx={{ coloe: 'white' }} label="React" /> </Divider>
      <div className={"odd"} style={mystyle}>{k.map((v, i) => (
        <><Ch id={'k' + i} name={v} data={rt[v]} url={rt[v].url} /></>))}</div>



      <Divider sx={{ borderColor: 'white', width: '100%' }} light={false} variant="middle" > <Chip sx={{ coloe: 'white' }} label="Front End" /> </Divider>
      <div className={"even"} style={mystyle}>{f.map((v, i) => (
        <><Ch id={'k' + i} name={v} data={fr[v]} url={fr[v].url} /></>))}</div>


      <Divider sx={{ borderColor: 'white', width: '100%' }} light={false} variant="middle" > <Chip sx={{ coloe: 'white' }} label="React Native" /> </Divider>
      <div className={"odd"} style={mystyle}>{n.map((v, i) => (
        <><Ch id={'k' + i} name={v} data={rn[v]} url={rn[v].url} /></>))}</div>


      <Divider sx={{ borderColor: 'white', width: '100%' }} light={false} variant="middle" > <Chip sx={{ coloe: 'white' }} label="Back End" /> </Divider>
      <div className={"even"} style={mystyle}>{b.map((v, i) => (
        <><Ch id={'k' + i} name={v} data={bk[v]} url={bk[v].url} /></>))}</div>


      <Divider sx={{ borderColor: 'white', width: '100%' }} light={false} variant="middle" > <Chip sx={{ coloe: 'white' }} label="DevOps" /> </Divider>
      <div className={"even"} style={mystyle}>{g.map((v, i) => (
        <><Ch id={'k' + i} name={v} data={git[v]} url={git[v].url} /></>))}</div>


      <Divider sx={{ borderColor: 'white', width: '100%' }} light={false} variant="middle" > <Chip sx={{ coloe: 'white' }} label="Cloud" /> </Divider>
      <div className={"even"} style={mystyle}>{c.map((v, i) => (
        <><Ch id={'k' + i} name={v} data={cl[v]} url={cl[v].url} /></>))}</div>

    </>
  );
}
