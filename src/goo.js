import React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


export default function Goo(props) {

    return (<>< Box >

        <><Box>
            {props.goo.map((v) => {
                return (
                    <Typography sx={{ p: 2, color: '#333', letterSpacing: '0.07em', wordSpacing: '0.05em', }}>

                        <Link href={v.link} underline="hover">
                            {v.title}
                        </Link>
                        {/* <div dangerouslySetInnerHTML={{
                    __html: props.goo
                }}>
                </div> */}
                    </Typography>)
            })}

        </Box>
        </>




    </Box ></>
    );

}

