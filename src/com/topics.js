import * as React from 'react';
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';


function topics(props) {


    return (<Card
        // onClick={handleOpen}
        // onMouseEnter={mouseEnter}
        // onMouseLeave={mouseLeave}
        sx={{ minWidth: 180, maxWidth: 180, m: 2 }}>

        <CardHeader style={{ letterSpacing: '0.07em' }} titleTypographyProps={{ variant: 'h6', color: '#222222', backgroundColor: "", letterSapcing: 5 }} style={{ fontSize: "40px !important" }} title={props.name.charAt(0).toUpperCase() + props.name.slice(1)} />
        {/* <Typography variant="body2" color="text.secondary" component="p">
      {
        props.title
      }
    </Typography> */}
    </Card>)

}
export default topics
