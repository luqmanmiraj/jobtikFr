import * as React from 'react';

import Chip from '@mui/material/Chip';

function Chipss({ pre, post, words }) {
    let [chipColor, setChipColor] = React.useState('black');

    return <>
        {
            words.map(v => {
                return (<Chip
                    sx={{ color: chipColor, fontSize: '18px', letterSpacing: '0.06em', m: 1 }}
                    label={v}
                    onClick={onclick}
                // onDelete={handleDelete}

                />)

            })
        }</>
}
export default Chipss