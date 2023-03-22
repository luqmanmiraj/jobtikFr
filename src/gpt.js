import React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Gpt(props) {

    return (<>< Box >

        <><Box sx={{ color: "#222", whiteSpace: 'pre-wrap' }}>
            GPT

            <Typography sx={{ p: 2, color: '#333', letterSpacing: '0.07em', wordSpacing: '0.05em', minWidth: '300px' }}>
                {props.gpt.replace('<code>', '<span class="coding">').replace('</code>', '</span>')}
                <div dangerouslySetInnerHTML={{
                    __html: props.gpt.replace('/[<code>]/ig', '<span class="coding">').replace('/</code>/ig', '</span>')
                }}>
                </div>
            </Typography>

        </Box>
        </>




    </Box ></>
    );

}

