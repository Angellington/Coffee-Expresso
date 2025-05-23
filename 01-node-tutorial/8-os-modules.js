// modulos que interagem com o sistema operacional

const os = require('os')

let info = os.cpus()
// console.log(info)
let  userinfo = os.userInfo()

// console.log(userinfo)
// {
//     uid: 1000,
//     gid: 1000,
//     username: 'minerva',
//     homedir: '/home/minerva',
//     shell: '/bin/bash'
//   }
//   minerva@minerva:~/D


// method returns the system uptime in seconds
console.log(`They System uptima is ${os.uptime()} in seconds! `)
// They System uptima is 1018.04 in seconds! 

const currentOS = { name: os.type(), release: os.release(), totalMem: os.totalmem(), freeMem: os.freemem() }

console.log(currentOS)
// {
//     name: 'Linux',
//     release: '6.11.0-26-generic',
//     totalMem: 24909123584,
//     freeMem: 18709663744
//   }