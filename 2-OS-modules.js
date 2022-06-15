const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//methods return the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)

const path = require('path')
console.log(path.sep)

// Also note: 'path.join ('/content', 'subfolder', 'test.txt'), path.resolve(__dirname), path.basename'