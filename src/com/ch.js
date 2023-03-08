import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Reset from '@mui/icons-material/ReplayRounded';
import Exapnd from '@mui/icons-material/OpenInBrowserOutlined';
import Widen from '@mui/icons-material/WidthFull';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import Topics from './topics'
const Ch = function (props) {
  let [width, setWidth] = React.useState(180)
  let [iwidth, setIwidth] = React.useState(1190)

  let [key, setKey] = React.useState(1)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  React.useEffect(() => { }, [])
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: iwidth + 100,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  let timer = 0;
  const TIMEOUT = 1000;

  function mouseEnter() {
    timer = setTimeout(() => {
      setOpen(true)
    }, TIMEOUT);
  }

  function mouseLeave() {
    clearTimeout(timer);
  }

  let el = (props.type == 'topics' ? <>
    <h4>{'ALgo->' + props.name}</h4>
    <Topics tname={props.name} topics={props.topics} />
  </> : <iframe key={key} width={iwidth} height={1000} src={props.url} title="React Tutorials"></iframe>)

  return (<>
    <Card onClick={handleOpen}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      sx={{ minWidth: width, maxWidth: width, m: 2 }}>

      <CardHeader style={{
        letterSpacing: '0.07em'
      }} titleTypographyProps={{ variant: 'h6', color: '#222222', backgroundColor: "", letterSapcing: 5 }} style={{ fontSize: "40px !important" }} title={props.name.charAt(0).toUpperCase() + props.name.slice(1)} />
      <Typography variant="body2" color="text.secondary" component="p">
        {
          props.title
        }
      </Typography>
    </Card>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div style={{ display: 'block', width: '200', float: 'right' }}>
          <Button sx={{ marginTop: '-5px' }} onClick={() => { (setKey(1 + key)) }} > <Reset color="info" /></Button>
          <Button ><a
            href={props.url}
            target="_blank"
            rel="noreferrer"
            style={{ marginTop: 2 }}
          >
            <Exapnd color="info" />
          </a>
          </Button>
          <Button
            onClick={() => { setIwidth(iwidth + 200) }}
            target="_blank"
            rel="noreferrer"
            style={{ marginTop: 2 }}
          >
            <Widen color="success" />
          </Button>
        </div>
        {el}
        {/* <iframe key={key} width={1190} height={1000} src={props.url} title="React Tutorials"></iframe> */}


      </Box>
    </Modal>
  </>
  );
}

export default Ch;
