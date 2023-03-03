import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import topics from '../topics/topics'
import Exapnd from '@mui/icons-material/OpenInBrowserOutlined';

export default function BasicPopover(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    // const [open, setOpen] = react.useState(false)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
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
            console.log(nStr);
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
                        variant: 'h6', color: '#222222',
                        backgroundColor: "", letterSapcing: 5
                    }}
                    style={{ fontSize: "40px !important" }}
                    title={props.val.charAt(0).toUpperCase() + props.val.slice(1)} />

            </Card>
            <Popover
                sx={{ p: 2 }}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >          <Button ><a
                href={topics[p]['url']}
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: 2 }}
            >
                <Exapnd color="info" />
            </a>
                </Button>
                <Typography sx={{ p: 2, letterSpacing: '0.07em', wordSpacing: '0.05em' }}>

                    <div dangerouslySetInnerHTML={{
                        __html:
                            //  (topics[p][v])?.replace('Example:', "<span style = 'color:#FF643c'>Example</span>")
                            highlight(topics[p][v], search)

                    }}></div>

                    {/* {topics.ptname.val} */}
                </Typography>
            </Popover>
        </>
    );
}
