const {createLogger, transports, format} = require('winston')


const logger = createLogger({
    transports:[
        new transports.File({
            filename: 'Info.log',
            level: 'debug',
            format: format.combine(
                format.timestamp(), 
                format.json(), 
                format.prettyPrint()),
        })
    ]
})


module.exports = logger;