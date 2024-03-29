
const rt = {
    "Hooks": {
        title: "",
        url: "https://docs.google.com/document/d/e/2PACX-1vRCzxsEAPbdFSl8mMopl5oH1VJjW2zaQ_XM2thkKgrr7Ww5bVFrOj6ozavRhqL7UzmQgQqMssQdUH5k/pub?embedded=true",
        des: " ",

        type: 'topics',
        topics: [{
            cat: 'React Hooks', val: ['useState', 'useEffect', 'useContext', 'useRef', 'useReducer',
                'useCallback', 'useMemo', 'useDebugValue', 'useDeffferedValue', 'useID',
                'useImperativeHandel', 'useSyncExternalStore', 'useLayoutEffect', 'useInsertioneffect',
                'customHooks', 'useTransition'
            ]
        }]
    },
    "RT doc": { title: "", url: "https://docs.google.com/document/d/e/2PACX-1vR-M1O-OWAIjS7a2qLorGTXJxMr7H3cbShCMZD_Lpg9C0o6sTV1McmB0N6eEQmp8-LJoL2HgvCI9AHZ/pub?embedded=true", des: " " },
    "JSX": {
        title: "", url: "https://beta.reactjs.org/learn/writing-markup-with-jsx",
        type: 'topics',
        topics: [{
            cat: 'all', val: ['Summary', 'Array rendering', 'conditional rendering', 'js in jsx', 'calss names', 'styling',
                'Fragment', 'profile', 'strictMode', 'Suspence', 'Events', 'Dangerously inner Html',
                'ref dom manipulation', 'Html comps', 'paasing fn', 'this binding', 'props',
                'input', 'option', 'progress', 'select', 'textarea']
        }], des: " "
    },
    'Styling': { title: '', url: '', des: '' },
    'html to jsx': { title: '', url: 'https://transform.tools/html-to-jsx', des: '' },

    "RenderDom": { title: "", url: "https://beta.reactjs.org/reference/react-dom/render", des: " " },
    "Components": {
        title: "", url: "https://beta.reactjs.org/reference/react/components", des: " ",
        type: 'topics',
        topics: [{ cat: 'all', val: ['Suspense', 'StrictMode', 'Profiler', 'Fragment'] }],

        shortCode: "rtbcomps"
    },
    // "data binding":{ title : "" , url : "",  des : " " },
    // "state":{ title : "" , url : "",  des : " " },
    'Functions/ API': {
        title: '', url: '', des: '',
        type: 'topics', topics: [{ cat: 'All', val: ['createPortal', 'flushSync', 'findDomNode', 'hydrate', 'render', 'unmountComponentAtNode', 'createRoot', 'hydrateRoot'] }]
    },
    "lifecycle": { title: "", url: "https://www.codecademy.com/learn/react-101/modules/react-102-lifecycle-methods-u/cheatsheet", des: " " },
    "events": { title: "", url: "https://legacy.reactjs.org/docs/events.html", des: " " },
    "Error": { title: "", url: "https://reactjs.org/docs/error-boundaries.html", des: " " },
    "portals": { title: "", url: "https://beta.reactjs.org/reference/react-dom/createPortal", des: " " },
    "profiles": { title: "", url: "https://beta.reactjs.org/reference/react/Profiler", des: " " },
    "Performance ": {
        title: "", url: "https://reactjs.org/docs/optimizing-performance.html", des: " ",


    },
    "Performance Topics": {
        title: "", url: "https://reactjs.org/docs/optimizing-performance.html", des: " ",
        type: 'topics',
        //https://www.codementor.io/blog/react-optimization-5wiwjnf9hj
        topics: [{
            cat: 'all', val: ['production Build', 'signle file builds', 'Bunch', 'Broserfiy', 'webpack',
                'profiling comps', 'Virtualizing Long Lists', 'Avoid reconcilitaion', 'Immutation',
                'Dependency optimization', 'Use fragment', 'Avoid Inline Function', 'Throttling', 'Debouncing',
                'dont use Index as key', 'avoid props initial state', 'no spread bespecific in passing props',
                'use Reselect in Redux', 'memoization', 'css first ', 'web worker cpu intensive tasks', 'CDN', 'SSR', 'Gzip']
        }]

    },
    "HOC": { title: "", url: "https://reactjs.org/docs/higher-order-components.html", des: " " },
    // "Ajax":{ title : "" , url : "https://www.npmjs.com/package/react-axios",  des : " " },
    "Forms": { title: "", url: "https://formik.org/docs/overview", des: " " },
    "Redux Tut": { title: "", url: "https://react-redux.js.org/tutorials/quick-start", des: " " },
    "Redux": {
        title: "", url: "https://react-redux.js.org/tutorials/quick-start", type: 'topics',
        topics: [{
            cat: 'All', val: ['Summary', 'useSelector', 'useDispatch', 'useStore', 'batch', 'connect',
                'Provider', 'configureStore', 'createSlice']
        }], des: " "
    },


    'Redux Exp': { title: '', url: 'https://codesandbox.io/s/github/reduxjs/redux-essentials-counter-example/tree/master/?from-embed', des: '' },
    // "GraphQL":{ title : "" , url : "https://www.npmjs.com/package/graphql-react#examples",  des : " " },
    "Next.js": { title: "", url: "https://nextjs.org/docs/getting-started", des: " " },
    "Storybook": { title: "", url: "https://storybook.js.org/docs/react/get-started/whats-a-story", des: " " },
    "Routing": { title: "", url: "https://v5.reactrouter.com/web/guides/quick-start", des: " " },
    // "storage":{ title : "" , url : "",  des : " " },
    // "Social login":{ title : "" , url : "",  des : " " },
    // "AppSync":{ title : "" , url : "",  des : " " },
    "cache": { title: "", url: "https://upmostly.com/tutorials/how-to-integrate-cache-in-react-applications", des: " " },
    // "Architecture":{ title : "" , url : "",  des : " " },
    "webVitals": {
        title: "", url: "https://moz.com/learn/seo/performance-metrics", des: " ", type: 'topics',
        'topics': [{ cat: 'Core', val: ['LCP', 'FID', 'CLS'] }]

    },

    "Testing": {
        title: "", url: "https://testing-library.com/docs/react-testing-library/cheatsheet", des: " "
    },
    "Material ui": { title: "", url: "https://luqmanmiraj.github.io/teks/mui.html", des: " " },
    'Virtual Dom': { title: '', url: 'https://legacy.reactjs.org/docs/faq-internals.html#:~:text=What%20is%20the%20Virtual%20DOM,This%20process%20is%20called%20reconciliation.', des: '' },
    // "CSS moz ":{ title : "" , url : "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes",  des : " " },

}
const git = {}
const linux = {}
const shell = {}
const js = {}
const typescript = {}
const php = {}
const html = {}
const css = {}
const node = {}
const mysql = {}
const aws = {}
const rn = {}
export default rt


// //TODOs
// Redux-- > topics
// Performance-- > topics
// debuging-- > topics
// Func / APIs-- >
// jsx Comps-- > topics-- > built in comps, html jsx
// events-- > topics all events 
// rt chap wise shortcodes n with examples shortcodes



