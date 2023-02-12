import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Height from '@mui/icons-material/Height';
import WidthLess from '@mui/icons-material/WidthNormal';
import Width from '@mui/icons-material/WidthFullSharp';
import Reset from '@mui/icons-material/ReplayRounded';
import Exapnd from '@mui/icons-material/OpenInBrowserOutlined';
import Unfold from '@mui/icons-material/UnfoldLess';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';



    
const Ch = function (props) {
    let [width,setWidth]= React.useState(400)
    let [height,setHeight]= React.useState(200);
    let [key,setKey]= React.useState(1)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    React.useEffect(()=>{},[] )
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 1090,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
  };
  return (<>
    <Card sx={{ minWidth:width, maxWidth:width , m: 2 }}>
          
      <CardHeader style={{letterSpacing:'0.05em'}} titleTypographyProps={{variant:'h4', color :'#222222', backgroundColor: "",letterSapcing:5 }} style = {{fontSize:"40px !important"}} title={props.name.charAt(0).toUpperCase() + props.name.slice(1)} />
      <Typography variant="body2" color="text.secondary" component="p">
            {
             props.title
            }
          </Typography>

          <IconButton onClick= {()=>{(setWidth(width-100))}} aria-label="height">
              <WidthLess color= "error"/>
     </IconButton>
      <IconButton onClick= {()=>{(setHeight(height-300))}} aria-label="height">
              <Unfold color= "error" />
     </IconButton>
     <IconButton onClick= {()=>{(setHeight(height+300))}} aria-label="height">
              <Height color= "success"/>
     </IconButton>
     <IconButton onClick= {()=>{(setWidth(width+200))}} aria-label="height">
              <Width color= "success"/>
     </IconButton>

     <IconButton onClick= {()=>{(setKey(1+key))}} aria-label="height">
              <Reset color= "info"/>
     </IconButton>
     <IconButton onClick= {handleOpen} aria-label="height">
              <Exapnd color= "info"/>
     </IconButton>
      <iframe key={key} width = {width} height= {height} src={props.url} title="React Tutorials"></iframe>
            
    </Card>
          <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <iframe key = {key} width = {1090} height= {1400} src={props.url} title="React Tutorials"></iframe>
          </Box>
        </Modal>
        </>
  );
}

export default Ch;
