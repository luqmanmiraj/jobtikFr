import React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Topiox(props) {

    return (<>< Box >

        <><Box sx={{ color: '#222', background: '#eee' }}>
            Topic

            <Typography sx={{ p: 2, color: '#333', letterSpacing: '0.07em', wordSpacing: '0.05em', minWidth: '300px' }}>
                <div dangerouslySetInnerHTML={{
                    __html: props.tar[0]
                }}>
                </div>
            </Typography>

        </Box>
        </>




    </Box ></>
    );

}

