// Modules
const names = require(`./4-name`)
console.log(names)
const sayHi = require(`./5-utils`)
const data = require(`./6-alternative-flavor`)
console.log(data)

require(`./7-mind-grenade`)

sayHi(`Son`)
sayHi(names.john)