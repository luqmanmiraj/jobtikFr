import * as React from 'react';

import Divdr from './divider';
import Pop from './popover';

export default function topics1(props) {


  return (<>
    {props.topics.map((vo, i) => {
      return (<>
        <Divdr name={vo.cat} />
        {vo['val'].map((v, i) => {

          return (
            <>
              <Pop ptname={props.tname} val={v} ind={i} />
              {/* <Card
                key={'topics' + i}
                sx={{ minWidth: 180, maxWidth: 180, m: 2, display: 'inline-block' }}>

                <CardHeader style={{ letterSpacing: '0.07em' }}
                  titleTypographyProps={{
                    variant: 'h6', color: '#222222',
                    backgroundColor: "", letterSapcing: 5
                  }}
                  style={{ fontSize: "40px !important" }}
                  title={v.charAt(0).toUpperCase() + v.slice(1)} />

              </Card> */}
            </>

          )
        }

        )
        }
      </>
      )



    })}



  </>)

}
// export default topics1
