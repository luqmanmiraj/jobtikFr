import React, {useState} from 'react';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';


function divdr(props) {

    const handleClick = (labelValue) => {
        props.abc(labelValue);
      };


// console.log("labelllllll")
// console.log(props)
// console.log("labelllllll")



    return (<><Divider sx={{ borderColor: 'white', width: '100%' }} light={false} variant="middle" >
        <Chip sx={{ color: 'black', fontSize: '18px', letterSpacing: '0.07em', textTransform: 'capitalize' }} label={props.name} />
    </Divider>
    
        {(props.Tame)&&
    <Divider sx={{ borderColor: 'white', width: '10%' }} light={false} variant="middle" >
        <Chip sx={{ color: 'black', fontSize: '18px', letterSpacing: '0.07em', textTransform: 'capitalize' }} label="js" onClick={() => handleClick("js")}/>
        <Chip sx={{ color: 'black', fontSize: '18px', letterSpacing: '0.07em', textTransform: 'capitalize' }} label="py" onClick={() => handleClick("py")}/>
    </Divider>
        }


    </>
    
    
    )
}
export default divdr;