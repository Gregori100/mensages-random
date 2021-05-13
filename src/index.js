const messages = [
    "Diego",
    "Ana",
    "Pedro",
    "Juan",
    "Laura",
    "Carolina",
    "Paula"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)]
    console.log(message)
}

module.exports = {randomMsg}