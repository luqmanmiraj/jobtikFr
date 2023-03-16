import React from 'react';
function Search({ query }) {
    let [chatGPT, SetChatGPT] = React.useState('');
    let [google, setGoogle] = React.useState('');
    let [topics, setTopics] = React.useState('');
    React.useEffect(() => {
        if (query.length > 2) {
            console.log(query)
        }
    }, [query])

    return <div> result here</div>;
}
export default name