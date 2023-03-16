import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import Chip from '@mui/material/Chip';
import Reset from '@mui/icons-material/MinimizeRounded';
import Exapnd from '@mui/icons-material/Expand';
import Gpt from '@mui/icons-material/SearchRounded';
import Google from '@mui/icons-material/Google';
import TextField from '@mui/material/TextField';
import Widen from '@mui/icons-material/WidthFull';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Chipss from './chips';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import a from '../src//topics/artopics'
import axios from 'axios';
import Topics from './searcTopics';
import Chgpt from './gpt';
import Goo from './goo';
export default function BasicModal(props) {



    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let [width, setWidth] = React.useState(500)
    let [height, setHeight] = React.useState(600);
    let [key, setKey] = React.useState();
    let [overf, setOverf] = React.useState('scroll')
    let [words, setWords] = React.useState([]);
    let [query, setQuery] = React.useState('');
    let [chipColor, setChipColor] = React.useState('black');
    let [topicContent, setTopicContent] = React.useState([]);
    let [chgp, setChgp] = React.useState('');
    let [goo, setGoo] = React.useState('');




    // let [] = React.useState('');
    let pre = ['what', 'is', 'the', 'difference', 'between', 'in', 'how', 'why']


    let [searchButtons, SetShowSearchButtons] = React.useState(true);

    const style = {
        position: 'fixed',
        bottom: '5px !important',
        // top: '89% !important',

        right: '10px !important',
        // transform: 'translate(-50%, -50%)',
        width: width,
        bgcolor: 'background.paper',
        border: '5px solid #777',
        borderRadius: '10px',
        boxShadow: 24,
        p: 1,
        height: height,
        maxHeight: 1500,
        overflowY: overf,
        zIndex: 6666,
        transition: '300ms'
    };

    const findcolor = (v) => {
        if (v.length > 2 && a[v.charAt(0)].includes(v))
            return 'red'
        return chipColor
    }

    const search = async (q) => {
        console.log('searched query ->' + q);


        console.log('google resulr')

        axios
            .get("http://localhost:8080/api/chat/google?query=" + q, { query: q })

            .then(response => {
                console.log(response.data.items)
                setGoo(response.data.items)

            })
            .catch(err => {
                console.log("not found" + err);

            })

        await axios
            .get("http://localhost:8080/api/chat/dev2?query=" + q, { query: q })

            .then(response => {
                console.log(response.data)
                setChgp(response.data)


            })
            .catch(err => {
                console.log("not found" + err);
                setChgp('Not found')

            })
    }
    const searchTopic = async (q) => {
        console.log('searched topic->' + q);

        await axios
            .get("http://localhost:8080/api/tutorials?title=" + q)

            .then(response => {
                const temp = [];

                console.log(response.data[0].html);
                if (response.data[0].html) {
                    temp.push(response.data[0].html)
                    setTopicContent(temp)
                }
                // setContent(response.data[0].html)
                // setUpdateID(response.data[0].id ? response.data[0].id : 0)

                // Handle response
            })
            .catch(err => {
                console.log(err);
                setTopicContent(['Not found'])

            })
    }

    return (
        <div>
            <Box
                sx={style}
            >
                <Button onClick={() => { setHeight(height + 700); setWidth(width > 600 ? width : 700); setOverf('scroll'); SetShowSearchButtons(true) }}><Exapnd /></Button>
                <Button sx={{ paddingBottom: 3, width: '50px' }} onClick={() => { setWidth(200); setHeight(40); setOverf('hidden'); SetShowSearchButtons(false) }}><Reset /></Button>
                <Button onClick={() => { setWidth(width + 500) }}><Widen /></Button>

                <TextareaAutosize
                    onChange={(e) => {
                        setWords(Array.from(new Set(e.target.value.split(' '))))
                    }}
                    aria-label="minimum height"
                    minRows={2}
                    maxRows={7}
                    placeholder="Speech text"
                    style={{ width: '100%', fontSize: '20px', letterSpacing: '0.06em' }}
                />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Search keywords
                </Typography>
                <Box>
                    {pre.map(v => {
                        return (<Chip
                            sx={{ color: chipColor, fontSize: '18px', letterSpacing: '0.06em', m: 1 }}

                            label={v}
                            onClick={() => setQuery(query + ' ' + v)}
                        // onDelete={handleDelete}

                        />)

                    })}
                    {words.map(v => {
                        return (<Chip
                            sx={{ color: () => findcolor(v), fontSize: '18px', letterSpacing: '0.06em', m: 1 }}
                            label={v}
                            onClick={() => { setQuery(query + ' ' + v); setChipColor('green') }}
                            // onDelete={handleDelete}
                            onContextMenu={() => { searchTopic(v) }}

                        />)

                    })}

                </Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Searh query
                </Typography>

                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '98%' }}
                >
                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Query"
                        inputProps={{ 'aria-label': 'Query' }}
                        onChange={(e) => { setQuery(e.target.value) }} value={query}
                    />
                    <IconButton onClick={() => { search(query) }} type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                        <DirectionsIcon />
                    </IconButton>
                </Paper>
                {topicContent.length >= 1 ? <Topics tar={topicContent} /> : <></>}

                {chgp.length >= 2 ? <Chgpt gpt={chgp} /> : <></>}
                {goo.length >= 2 ? <Goo goo={goo} /> : <></>}


                {/* <TextField onChange={(e) => { setQuery(e.target.value) }} value={query} fullWidth label="Query" id="fullWidth" /> */}
                {searchButtons && (<>
                    <Button sx={{ position: 'absolute', right: '40px', bottom: '10px' }} onClick={() => { setWidth(width + 500) }}><Gpt /></Button>
                    <Button sx={{ position: 'absolute', right: '100px', bottom: '10px' }} onClick={() => { setWidth(width + 500) }}><Google /></Button></>)}


                {/* <iframe key={key} width={width} height={height} src={props.url} title="React Tutorials"></iframe> */}
            </Box>
            {/* </Popover> */}
        </div>
    );
}


// import React from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// const Dictaphone = () => {
//     const {
//         transcript,
//         listening,
//         resetTranscript,
//         browserSupportsSpeechRecognition
//     } = useSpeechRecognition();
//     const [mylistning, setListning] = React.useState(listening);

//     React.useEffect(() => { SpeechRecognition.startListening() }, [mylistning])

//     if (!browserSupportsSpeechRecognition) {
//         return <span>Browser doesn't support speech recognition.</span>;
//     }

//     return (
//         <div>
//             <p>Microphone: {listening ? 'on' : 'off'}</p>
//             <button onClick={SpeechRecognition.startListening}>Start</button>
//             <button onClick={SpeechRecognition.stopListening}>Stop</button>
//             <button onClick={resetTranscript}>Reset</button>
//             <p>{transcript}</p>
//         </div>
//     );
// };
// export default Dictaphone;
// import React from 'react';
// import useSpeechToText from 'react-hook-speech-to-text';

// export default function AnyComponent() {
//     const {
//         error,
//         interimResult,
//         isRecording,
//         results,
//         startSpeechToText,
//         stopSpeechToText,
//     } = useSpeechToText({
//         continuous: true,
//         useLegacyResults: false
//     });

//     if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

//     return (
//         <div>
//             <h1>Recording: {isRecording.toString()}</h1>
//             <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
//                 {isRecording ? 'Stop Recording' : 'Start Recording'}
//             </button>
//             <ul>
//                 {results.map((result) => (
//                     <li style={{ color: 'black' }} key={result.timestamp}>{result.transcript}</li>
//                 ))}
//                 {interimResult && <li>{interimResult}</li>}
//             </ul>
//         </div>
//     );
// }