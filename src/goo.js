import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


export default function Goo(props) {

    return (<>< Box sx={{ color: "#222", background: "#eee", width: '100%', mt: 2,p:2 }}>
        {/* <Typography sx={{ display: 'block', width: '100%', pt: 3, pb: 3 }} variant='h4' >Google</Typography> */}

        <><Box sx={{ color: "#222", background: "#eee", display: 'flex' }}>

            <Box sx={{ width: '60%', display: 'flex' }}>
                {/* <Typography variant='h6' sx={{ p: 1, color: '#333', letterSpacing: '0.07em', wordSpacing: '0.05em', }}> */}

                <Link sx={{ color: '#333' }} target="-blank" href={props.goo[0].link} underline="hover">
                    <Card
                        sx={{ minWidth: 100, p: 1, marginLeft: 2 }}>
                        <Typography variant="h6" color="text.secondary" component="p">
                            {props.goo[0].snippet + "  \n " + props.goo[0].displayLink}

                        </Typography>
                    </Card>
                </Link>
                {/* </Typography> */}
            </Box>
            <Box sx={{ display: 'inline' }}>
                {props.goo.slice(1, 5).map((v, i) => {
                    return (
                        <Box sx={{ display: 'flex' ,flexDirection:'column'}}>

                            <Link sx={{ color: '#333' }} target="-blank" href={v.link} underline="hover">
                                <Card
                                    sx={{ width:'auto',minWidth: 150, padding: '5px', paddingLeft: '10px', paddingRight: '10px', marginLeft: 4, marginBottom: 0.5 }}>
                                    <Typography variant="h6" color="text.secondary" component="p">
                                        {(v.displayLink.replace('www.', '').replace('.com', ''))}

                                    </Typography>
                                </Card>
                            </Link>
                        </Box>)
                })}
            </Box>

        </Box>
        </>




    </Box ></>
    );

}

