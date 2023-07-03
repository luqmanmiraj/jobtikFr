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
import AddBox from '@mui/icons-material/AddBox';
import AddChapter from './addChapter'
 import style from './chaps.css'
 import Chaps from './chaps';


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
  const [showfield, setShowField] = React.useState(false);


  let k = Object.keys(rt).sort((a, b) => a.localeCompare(b))
  let g = Object.keys(git).sort((a, b) => a.localeCompare(b))
  let n = Object.keys(rn).sort((a, b) => a.localeCompare(b))
  let f = Object.keys(fr).sort((a, b) => a.localeCompare(b))
  let b = Object.keys(bk).sort((a, b) => a.localeCompare(b))
  let c = Object.keys(cl).sort((a, b) => a.localeCompare(b))
  let d = Object.keys(db).sort((a, b) => a.localeCompare(b))
  let j = Object.keys(js).sort((a, b) => a.localeCompare(b))

  let ar = [
    ["Algo", j , js],["React",k,rt],
    ["Front End",f,fr],["React Native",n,rn],
    ["BackEnd",b,bk], ["Devops",g,git],
    ["cloud",c,cl],["DB",d,db]


]
  // console.log(rt)
  return (
    <>
    <br />
    <br />
    <div  style={{height:'97vh',overflow:"scroll"}}className="wrapperchap">
    { ar.map( v =>{
        return (<Chaps tech = {v[0]} keys={v[1]} data={v[2]} />)

    }) }

</div>



    </>
  );
}
