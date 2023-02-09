import * as React from 'react';
import {useState} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Height from '@mui/icons-material/Height';
import WidthLess from '@mui/icons-material/WidthNormal';
import Width from '@mui/icons-material/WidthFullSharp';
import Reset from '@mui/icons-material/ResetTvRounded';
import Unfold from '@mui/icons-material/UnfoldLess';
import Modal from './modal';



// import { height } from '@mui/system';


    
const Ch = function (props) {
    let [width,setWidth]= React.useState(430)
    let [height,setHeight]= React.useState(10);
    let [key,setKey]= React.useState(100)

    React.useEffect(()=>{},[] )

  return (
    <Card sx={{ minWidth:345, maxWidth:width , m: 4 }}>
          
      <CardHeader title={props.name} />
      <Typography variant="body2" color="text.secondary" component="p">
            {
              "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
            }
          </Typography>
      <IconButton onClick= {()=>{(setHeight(height-300))}} aria-label="height">
              {/* <MoreVertIcon /> */}
              <Unfold color= "secondary" />
     </IconButton>
     <IconButton onClick= {()=>{(setHeight(height+300))}} aria-label="height">
              {/* <MoreVertIcon /> */}
              <Height color= "success"/>
     </IconButton>
     <IconButton onClick= {()=>{(setWidth(width+200))}} aria-label="height">
              {/* <MoreVertIcon /> */}
              <Width color= "success"/>
     </IconButton>
     <IconButton onClick= {()=>{(setWidth(width-100))}} aria-label="height">
              {/* <MoreVertIcon /> */}
              <WidthLess color= "secondary"/>
     </IconButton>
     <IconButton onClick= {()=>{(setKey(1+key))}} aria-label="height">
              {/* <MoreVertIcon /> */}
              <Reset color= "info"/>
     </IconButton>
            <Modal url = "https://beta.reactjs.org/" />
      <iframe key = {key} width = {width} height= {height} src="https://beta.reactjs.org/" title="React Tutorials"></iframe>
      
      {/* <CardContent>
          <Typography variant="body2" color="text.secondary" component="p">
            {
              "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
            }
          </Typography>
      </CardContent> */}
    </Card>
  );
}

export default Ch;
