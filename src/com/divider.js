import React from 'react';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

function divdr(props) {
    return (<Divider sx={{ borderColor: 'white', width: '100%' }} light={false} variant="middle" >
        <Chip sx={{ color: 'black', fontSize: '18px', letterSpacing: '0.07em', textTransform: 'capitalize' }} label={props.name} />
    </Divider>)
}
export default divdr;