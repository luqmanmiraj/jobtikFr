const algo = {

    'String': {
        title: '', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String',
        
        type: 'topics',
        //String topics:
        topics: [{
            cat: 'All String Methods', val: ['toArray', 'substring', 'reverse', 'replace', 'toLowerCase', 'toUpperCase', 'capitalize', 'trim', 'length', 'toNumber', 'toFlaot', 'charCodeAt', 'endsWith', 'startWith', 'includes', 'lastIndexOf', 'match', 'matchAll', 'repeat', 'indexOf', 'trimEnd', 'TrimStart', 'search', 'toCharArray', 'removeCharAt','charFrequency/ char count','insertAt','concat','substring','substr','chunks',
            ]
        }],
        
        
        
        
        des: '',

    },
    'Arrays': {
        title: '', url: 'https://luqmanmiraj.github.io/teks/arraysMoz.html',
        type: 'topics',
        topics: [
            {
                cat: 'All Topics', val: ['array declarations','Array.from', 'entries', 'every', 'fill', 'filter', 'find',
                    'findindex', 'flat', 'forEach', 'includes', 'join', 'lastIndexOf','map','push ','pop','reduce','reduceRight','reverse','shift','unshift','slice','sort','splice',
                    'toLocaleString', 'toString', 'remove at','insertAt','length','min','max',
                
                ]

            },
            /* { cat: 'iterations', val: ['concat', 'slice', 'charAt', ''] },
            // { cat: '', val: ['concat', 'slice', 'charAt', ''] },

            { cat: 'cuustom', val: ['concat', 'slice', 'charAt', 'charCodeAt'] }, */
        ],
        des: ''
    },
    //Adding Map topics
    'Map': {
        title: '', url: 'https://luqmanmiraj.github.io/teks/mapMoz.html',
        type: 'topics',
        topics: [
            {
                cat: 'Map Methods', val: ['add()', 'set()', 'get()', 'size/length', 'clear/empty', 'delete()', 'create/declare', 'map keys array', 'map values array', 'forEach()', 'maptoObj', 'keysortedmap', 'valuesortedmap', 'equals()', 'update()', 'map to array', 'merge()', 'RemoveWithKey', 'Rem-WithValue', 'has/check', 'hasValue', 'extract', 'fromEntries', 'clone/copy', 'loop()',
                ]
                 
            },
            




        ],
        des: ''
    },
    'Object': { title: '', url: '', 
    
    type: 'topics',

    //Object topics:
    topics: [{
        cat: 'Map Methods', val: ['assign','clone/copy','preventExtension','defineProperties','entries','freeze','getOwnPropertyDescription','hasOwnProperty','fromEntries','isSealed','values','seal','getwonpropertynames','getprotoypeOf','isExtensibile','getOwnpropertySymbols','keys','isFrozen','loop','obj recursive loop','ValueSortedObject','keysSortedObject','extract as object','merge','equals','toEntries','removeWithkey','RemoveWithValue',
                ]
    }],
    

    
    des: '' },
    //adding Set topics
    'Set': { title: '', url: '', 
    
    type  : 'topics',
    topics: [{
        cat: 'Set Methods', val: ['Create()', 'add(algo)', 'has()', 'Clear()', 'delete()', 'entries', 'forEach()', 'toArray()','length/size',
        ]
    }], 
    
    des: '' },


    'var types': { title: '', url: '', 
    
    type: 'topics',
    //var types topics:
    topics: [{


        cat: 'Set Methods', val: ['var','Declaration and Initialization','Scope','Naming Conventions','VaR',' Risk Management',' VaR Calculation Methods','VaR Applications',' VaR Limitations','Backtesting VaR Models',' Conditional VaR (CVaR)',
    ]
    }],
    
    
    
    des: '' },
    'Json': { title: 'Topics', url: '', 
    type : 'topics',
    //Json topics:
    topics: [{
        cat: 'Set Methods', val: ['json text to js object (json.parse)', 'json arrays', 'json objects', 'json.stringyfy',
        ]
    }],
    
    
    des: '' },

    'JSON Diff Checker': { title: 'Diff Checker', url: 'https://json-diff.com/', des: '' },
    'JSON Beautifier Editor': { title: 'Beutifier Editor', url: 'https://json-diff.com/', des: '' },
    'JSON Parser': { title: 'Parser', url: 'https://jsonparser.org/', des: '' },
    'JSON Validator': { title: 'Validator', url: 'https://tools.learningcontainer.com/json-validator/', des: '' },
    'Big O Cheat Sheet': { title: 'CheatSheet', url: 'https://flexiple.com/algorithms/big-o-notation-cheat-sheet/', des: '' },
    'Sorting Algorithms': { title: 'CheatSheet', url: 'https://www.codecademy.com/learn/cspath-cs-102/modules/data-structures-and-algorithms-sorting-algorithms/cheatsheet', des: '' },
    'Algo CheatSheet': { title: 'CheatSheet', url: 'https://www.technocamps.com/wp-content/uploads/2020/11/V3_Algorithms_CheatSheetEN.pdf', des: '' },
    //adding topics
    'regex': { title: '', url: '',

    type: 'topics',
    //regex topics:
    topics: [{
        cat: 'Declaration', val: ['character classes', 'anchors', 'escaped', 'lookaround', 'group', 'quantifiers', 'falgs', 'exec',
        ]
    },
         { cat: 'String methods take regex object', val: ['match', 'matchall', 'replaceAll', 'search','split',] },

            { cat: 'custom methods:: ', val: ['highlightTextWithColor', 'isSentencecorrect', 'swapWords', 'nthNumber','reptitionEncryption','Capitalize','camelCase','phone check','password(length, cpaital,small,digit)','combine two reg expression with  or relation ','getdigitswithLength(n)',
        
        ] },

],
    des: '' },

//Regext Cheat Sheet
    'Regex': { title: 'CheatSheet', url: 'https://regexlearn.com/cheatsheet', des: '' },

//Regex Playground
    'Regex ': { title: 'Playground', url: 'https://regexlearn.com/playground', des: '' },

    'error': { title: '', url: '', des: '' },

    //adding docs

    'Numbers': { title: 'Guide', url: 'https://www.qualitygurus.com/permutations-and-combination/', des: '' },

    //adding topics
    'Numbers/Math': { title: '', url: 'https://www.qualitygurus.com/permutations-and-combination/',
    
    type: 'topics',
    //Numbers/Math topics:
    topics: [{
        cat: 'All', val: ['abs', 'ceil', 'floor', 'max', 'Round', 'fround', 'random', 
        'trunc', 'min', 'positiveInfinity', 'negatvieInfinifty', 'toBinary', 'todecimal', 
        'tochars', 'fromchars', 'Factorial', 'arithemtic series', 'arithmetc progression', 
        'geomatric series', 'geomatric proogression', 'Rounding', 'numbers', 'isInteger', 'parseFloat', 
        'parseInt', 'toString', 'Number.parseInt', 'floats', 'float ceil', 
        'combs n permutations', 'see n make four methods ', 'perm with reptition ',
         'permWithoutRepition', 'Prototype', 'IcombWithReptiiton', 'CombWithoutReptition',
        ]
    }],

    
    
    
    
    des: '' },




    //adding topics
    'operators': { title: 'operators and keywords', url: '',
    
    type: 'topics',
    //operators topics:
    topics: [{

        cat: 'All', val: ['Assignment', 'Comparison', 'Arithmetic', 'Bitwise', 'Logical', 
        'BigInt', 'String', 'Conditional(ternary)', 'Comma', 'Unary', 'Relational', 'Destructuring', 
        'spread', 'typeof', 'new', 'super', 'instanceof', 
        'void', 'keywords and identifiers ', ]
    }],
    
    des: '' },









    'impport': { title: '', url: '', des: '' },
    'Functions': { title: '', url: '', des: '' },
    //adding url
    'DateTime': {
        title: '', url: 'https://www.w3schools.com/js/js_date_methods.asp',

        type: 'topics',
        //DateTime topics:
        topics: [{
            cat: 'All DateTime Methods', val: ['createDate', 'getDate', 'getDay', 'getfullYear', 'getHours', 'getMilliseconds', 'getMicroseconds',
                                'getMonth', 'getSeconds', 'getTime', 'getUTCDate', 'getUtcDay', 'getUTCFullYear', 'getUTCHours', 'getUTCMilliseconds',
                                'getUTCMinutes', 'getUTCMonth', 'getUTCSeconds', 'getYear','parse', 'setDate', 'setFullYear', 'setHours',
                                'toDatestring', 'toGMTString', 'toISOString', 'toJSON', 'toLocaleDateString', 'toLocaleTimeString', 'toLocaleString',
                                'toString', 'toTimeString', 'toUTCString', 'UTC', 'valueOf', 'setMilliseconds', 'setMinutes',
                                'setMonth', 'setSeconds',


            ]
        }],

        des: ''
    },
    'Env': { title: '', url: '', des: '' },
    'DP': { title: '', url: '',

    //  adding dp topics
    
    type : 'topics',
    topics: [{

        cat: 'All', val: ['stairCase', 'houseRobber', 'ComposeRanges ', 'mapDecoding', 'FillingBlock', 'maximalSquare', 'regularExpressionMatching', 'paintHouse', 'largest increasing sequence','k-Palindrom',
    ]

    }],

    
    
    des: '' },
    'Combs': { title: '', url: '', des: '' },
    //ading topics
    'Matrix algos': { title: '', url: '',

    type: 'topics',
    //Matrix algos topics:
    topics: [{
        cat: 'All Matrix algos', val: ['contagious matrixx traversing ' , 'discrete materix traversing', '45 deg matrix traversing', 'getelementsAroundelement', 'columnup/down traversing', 'swap elements', 'swap matrixes', 'forward diagonal traversing (up/down)', 'backword diagonal travesing(up/down)', 'rotate matrix 90 Deg(clockwise/anticlockwise)','flip matrix(forword/backword/upword/downword)',
        ]
    }],
    
    
    
    des: '' },

    'Tree n Graph': { title: '', url: '',
    
    type: 'topics',
    //Tree n Graph topics:
    topics: [{
        cat: 'All Matrix algos', val: ['tree basic','Graph','tree advance ','dfs bfs',
        ]
    }],
    
    
    des: '' },
    'Sort search': { title: '', url: '',

    type: 'topics',
    //Sort search topics:
    topics: [{
        cat: 'All Matrix algos', val: ['bubble sort', 'merge sort', 'mergeK arryas', 'quicksort', 'higherversion2', 'sortbystring', 'sorted square arrasy', 'dfs,bfs', 'backtrackin',
        ]
    }],
    
    
    
    des: '' },
    'series': { title: '', url: '', des: '' },
    //Adding data
    'big O': { title: '', url: 'https://medium.com/dataseries/how-to-calculate-time-complexity-with-big-o-notation-9afe33aa4c46', 

    type: 'topics',
    //big O topics:
    topics: [{
        cat: 'All', val: ['What is BIG O', 'O(1)', 'O(n)', 'quardratic O(n2)', 'log(n)', 'O(nlog(n))', 'O(n3)', 'O(2n)', 'O(n!)',
        ]
    }],
        
    
    
    des: '' },
    'Cheat': { title: 'Cheat Sheet', url: 'https://overapi.com/javascript', des: '' },
    //Adding TS stack Here

    'TS': {
        title: '', url: 'https://luqmanmiraj.github.io/teks/ts.html',
        type: 'topics',
        topics: [
            {
                cat: 'All TS Topics', val: ['Apply|Bind|Call', 'Async Await', 'Async|Defer', 'Callback', 'Class', 'Closure',
                    'Currying', 'Event Loop', 'EventBubble', 'Generators', 'Generics', 'HOF', 'Hoisting', 'Interface', 'Memoization', 'Patterns', 'Promise',
                    'Prototyping', 'Scope', 'Ts vs Js', 'WebSocket',
                ]
            },
        ],

        des: ''
    },


}



export default algo



