const db = {
    'mysql cs': { title: '', url: '', des: '' },
    'MySQL': { title: '', url: 'https://www.tutorialspoint.com/mysql/index.htm', des: '' },

    'sqlite3': {
        title: '', url: 'https://www.tutorialspoint.com/sqlite/sqlite_installation.htm',
        type: 'topics',
        topics: [
            {
                cat: 'All', val: ['Array.from', 'spread', 'fill', 'flat', 'sort', 'splice',
                    'copywithin', 'Object.keys(ob)', 'Object.values()', 'concat', 'clone', 'reverse',
                    ''
                ]
            },

        ],
        des: ''
    },

    'Mongo DB cs': { title: '', url: '', des: '' },
    'Mongo DB ': { title: '', url: '', des: '' },


    'sequelize cs': { title: '', url: '', des: '' },
    'sequelize ': {
        type: 'topics',
        title: '',
        url: 'https://sequelize.org/docs/v6/getting-started/',
        des: '',
        topics: [
            {
                cat: 'All', val: ['seq install', 'Model Instance',
                    'Model Query', 'Finders', 'getter setter',
                    'validations', 'raw query', 'Associations', 'Paranoid', 'Eager Loading', 'Data Types',
                    'Seq with AWS', 'Migrations', 'Hooks', 'Indexes', 'sub queries', 'Transactions'
                ]

            }, {
                cat: 'Query', val: ['insert', 'findAll', 'where operators', 'update', 'delete', 'bulk Create', 'order and Groups',
                    'findOne', 'limits', 'aggregators', 'findByPk', 'findOne', 'findOrCreate', 'findAndCountAll'
                ]
            }

        ],
    },

    'mongose CS': { title: '', url: '', des: '' },
    'mongoose ': { title: '', url: '', des: '' },

    'DynamoDbCS ': { title: '', url: '', des: '' },
    'DynamoDb': { title: '', url: '', des: '' },


    'Redis CS': { title: '', url: '', des: '' },
    'RabitMQ CS': { title: '', url: '', des: '' },

    'DB Perfor': { title: '', url: '', des: '' },
    'Query Optim': { title: '', url: '', des: '' },

    'Multitanent': { title: '', url: '', des: '' },
    'Indexing': { title: '', url: '', des: '' },
    'Backup': { title: '', url: '', des: '' },
    'Joins': { title: '', url: '', des: '' },



}

export default db