import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';


export default function AddChapter(props) {
    const [text,setText] = React.useState('')
    const [shortcode,setShortcode] = React.useState('')
    const [open, setOpen] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

React.useEffect(()=>{

},[success])

    // const [text,setText] = React.useState('')

function addchapter(){
    let pdata = {
        "name": text,
        "parent_tech": props.tech,
        "shortcode":shortcode
    }
    let tut ={
        "title": text,
        "description": "Description",
        "html":"<b>Content</b>",
        "published": "true",
        "parent":props.chap,
        "tech":props.tech,
        "shortcode": shortcode
    }
    let url = props.chap?"http://localhost:8080/api/tutorials": "http://localhost:8080/api/chap"
    axios
    .post(url ,props.chap? tut:pdata)
    .then(response => {
        console.log(response.data);
        setOpen(true);
        setSuccess(true)


        // setContent(response.data.html)
        // setUpdateID(response.data.id ? response.data.id : 0)


    }).error((err)=>{
        setSuccess(false)
        props.fnshow();

    })
}
function onchapChange(v){
    setText(v);
}
const handleClose = () => {

    setOpen(false);
  };
    return (<>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch",background:'white',mt:2 }
        }}
        noValidate
        autoComplete="off"
      >
        <div>
         {!success  &&
         <div>

            <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Title or name"
            onChange={e => onchapChange(e.target.value)}
          />
        <TextField
            id="shortcode"
            label="Optional"
            defaultValue="Shortcode"
            onChange={e => setShortcode(e.target.value)}
          />
                {<Button onClick={()=>{addchapter()}} sx ={{mt:4}}variant="contained">submit</Button>}


            </div>
}
                
                
                {success && <Button onClick={()=>{setSuccess(false);props.fnshow()}} sx ={{mt:1.2}} variant="contained">Successfully Added Close</Button>}


        </div>

    </Box>

          </>
  );
}