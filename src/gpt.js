import React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Gpt(props) {

    return (<>< Box >

        <><Box>
            <Typography sx={{ p: 2, color: '#333', letterSpacing: '0.07em', wordSpacing: '0.05em', minHeight: '700px', minWidth: '800px' }}>
                ChatGpt {props.gpt}
                <div dangerouslySetInnerHTML={{
                    __html: props.gpt
                }}>
                </div>
            </Typography>
        </Box>
        </>




    </Box ></>
    );

}
