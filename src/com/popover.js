import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import Exapnd from '@mui/icons-material/OpenInBrowserOutlined';
import Edit from '@mui/icons-material/Edit';
import Save from '@mui/icons-material/Save';
import { Modal } from '@mui/material';

import Editor from './editor'


import axios from 'axios';

export default function BasicPopover(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [showEditor, setShowEditor] = React.useState(false)
    const [content, setContent] = React.useState('Content');
    const [updateID, setUpdateID] = React.useState(0);
    const [showModal, setShowModal] = React.useState(false);



    // const [open, setOpen] = react.useState(false)


    const handleClick = (event) => {
        setShowModal(true)
        setAnchorEl(event.currentTarget);
        console.log("propssss")
        console.log(props)
        axios
            .get("http://localhost:8080/api/tutorials?title=" + props.val)
            .then(response => {
                console.log(response.data);
                setContent(response.data[0].html)
                setUpdateID(response.data[0].id ? response.data[0].id : 0)

                // Handle response
            })
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleCloseM = () => {
        setShowModal(false);
    };
    const save = () => {
        let pdata = {
            "title": props.val,
            "description": "Description",
            "html": content,
            "published": "true",
            "tech": props.tech,
            "parent": props.ptname
        }
        if (updateID > 0) {
            axios
                .put("http://localhost:8080/api/tutorials/" + updateID, pdata)
                .then(response => {
                    console.log(response.data);
                    // setContent(response.data.html)
                })
        } else {
            axios
                .post("http://localhost:8080/api/tutorials?title=" + props.val, pdata)
                .then(response => {
                    console.log(response.data);
                    // setContent(response.data.html)
                    setUpdateID(response.data.id ? response.data.id : 0)


                })
        }

        setShowEditor(false)


    };
    let timer = 0;
    const TIMEOUT = 1000;
    function mouseEnter(e) {
        timer = setTimeout(() => {
            setAnchorEl(e.target);
        }, TIMEOUT);
    }

    function mouseLeave() {
        clearTimeout(timer);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    let p = '' + props.ptname.toLocaleLowerCase();
    let v = '' + props.val.toLocaleLowerCase();

    function highlight(Str, p) {
        let specialChars = ["*", "?", "+", "(", ")", "=", "$"];
        let nStr = p;
        specialChars.map(v => {
            nStr = nStr.replace((new RegExp('[' + v + ']', 'gi')), "[" + v + "]")
        })
        return Str?.replace((new RegExp(nStr, 'gi')), "<span style = 'color:#FF643c'>" + p + "</span>")
    }

    // let search = "";
    let search = "* *?& f***g s+s (some";
    // some) $500 {some} ! ";

    return (
        <>
            {/* <Button aria-describedby={id} variant="contained" onClick={handleClick} >
                Open Popover
            </Button> */}
            <Card
                onMouseEnter={(e) => { mouseEnter(e) }}
                onMouseLeave={mouseLeave}
                aria-describedby={id} onClick={handleClick}
                key={'topics' + props.ind}
                sx={{ minWidth: 180, maxWidth: 180, m: 2, display: 'inline-block' }}>

                <CardHeader style={{ letterSpacing: '0.07em' }}
                    titleTypographyProps={{
                        variant: 'h6', color: '#222222', letterSapcing: 5, display: "flex",
                        flexDirection: "row", textAlign: 'center', justifyContent: 'center', whiteSpace: 'nowrap',
                             
                            
                            
                             


                        
                        
                

                    }}
                    title={props.val.charAt(0).toUpperCase() + props.val.slice(1)} />

            </Card>

            <Popover
                sx={{ p: 2, minWidth: '500px !important', maxWidth: '800px !important', marginLeft: 'auto ', marginRight: 'auto', top: '150px', backgroundColor: '#444', maxHeight: '780px' }}
                id={id}
                open={open}
                onClose={handleClose}

            >

                <Button onClick={() => { setShowEditor(true) }}>
                    <Edit color="info" />

                </Button>
                <Button onClick={() => { save(); setShowEditor(false) }}>
                    <Save color="info" />

                </Button>

                {showEditor ? <Editor name="Editor" defaultvalue={content ? content : 'default value'} onChange={(data) => setContent(data)} /> : <>
                    <Typography sx={{ p:2, letterSpacing: '0.07em', wordSpacing: '0.05em', minHeight: '700px', minWidth: '800px',
                    whiteSpace: 'nowrap',
                
                
                }}>

                        <div dangerouslySetInnerHTML={{
                            __html:

                                highlight(content, search)


                        }}></div>

                        {/* {topics.ptname.val} */}
                    </Typography>
                </>}
            </Popover>



        </>
    );
}
