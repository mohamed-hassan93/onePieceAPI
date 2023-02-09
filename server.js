
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 2330


app.use(cors());

const crewmates = {

    'luffy': {
        'Name': 'Luffy',
        'Status': 'Captain',
        'Devil Fruit User': 'Yes',
        'Devil Fruit': 'Gomu Gomu No Mi',
        'Haki': 'Arnmament, Observation, Conqueror',
        'Bounty': 3000000000,
        'Wanted Poster': 'https://static.wikia.nocookie.net/onepiece/images/1/17/Monkey_D._Luffy%27s_Seventh_Wanted_Poster.png/revision/latest?cb=20220620183756'
    },

    'zoro': {
        'Name': 'Zoro',
        'Status': 'Swordsman',
        'Devil Fruit User': 'No',
        'Devil Fruit': 'N/Ap',
        'Haki': 'Arnmament, Observation, Conqueror',
        'Bounty': 1111000000,
        'Wanted Poster' : 'https://static.wikia.nocookie.net/onepiece/images/5/5d/Roronoa_Zoro%27s_Current_Wanted_Poster.png/revision/latest?cb=20161222000618'
    },

    'nami': {
        'Name': 'Nami',
        'Status': 'Navigator',
        'Devil Fruit User': 'No',
        'Devil Fruit': 'N/Ap',
        'Haki': 'Unconfirmed',
        'Bounty': 366000000,
        'Wanted Poster' : 'https://static.wikia.nocookie.net/onepiece/images/3/3b/Nami%27s_Current_Wanted_Poster.png/revision/latest?cb=20160619204508'
    },

    'usopp': {
        'Name': 'Usopp',
        'Status': 'Sniper',
        'Devil Fruit User': 'No',
        'Devil Fruit': 'N/Ap',
        'Haki': 'Observation',
        'Bounty': 500000000,
        'Wanted Poster': 'https://static.wikia.nocookie.net/onepiece/images/5/5e/God_Usopp%27s_Wanted_Poster.png/revision/latest?cb=20160619204644'
    },

    'sanji': {
        'Name': 'Sanji',
        'Status': 'Cook',
        'Devil Fruit User': 'No',
        'Devil Fruit': 'N/Ap',
        'Haki': 'Armament, Observation',
        'Bounty': 1032000000,
        'Wanted Poster': 'https://static.wikia.nocookie.net/onepiece/images/c/ca/Sanji%27s_Current_Wanted_Poster.png/revision/latest?cb=20190331050119'
    },

    'chopper': {
        'Name': 'Chopper',
        'Status': 'Doctor',
        'Devil Fruit User': 'Yes',
        'Devil Fruit': 'Hito Hito No Mi',
        'Haki': 'Unconfirmed',
        'Bounty': 1000,
        'Wanted Poster': 'https://static.wikia.nocookie.net/onepiece/images/7/75/Tony_Tony_Chopper%27s_Current_Wanted_Poster.png/revision/latest?cb=20160619204650'
    },


    'nico robin': {
        'Name': 'Nico Robin',
        'Status': 'Archaeologist',
        'Devil Fruit User': 'Yes',
        'Devil Fruit': 'Hana Hana No Mi',
        'Haki': 'Unconfirmed',
        'Bounty': 930000000,
        'Wanted Poster' : 'https://static.wikia.nocookie.net/onepiece/images/b/b8/Nico_Robin%27s_Current_Wanted_Poster.png/revision/latest?cb=20161222000656'
    },

    'franky': {
        'Name': 'Franky',
        'Status': 'Shipwright',
        'Devil Fruit User': 'No',
        'Devil Fruit': 'N/Ap',
        'Haki': 'Unconfirmed',
        'Bounty': 394000000,
        'Wanted Poster': 'https://static.wikia.nocookie.net/onepiece/images/1/1d/Franky%27s_Wanted_Poster.png/revision/latest?cb=20130624084046'
    },

    'brook': {
        'Name': 'Brook',
        'Status': 'Musician',
        'Devil Fruit User': 'Yes',
        'Devil Fruit': 'Yomi Yomi No Mi',
        'Haki': 'Unconfirmed',
        'Bounty': 383000000,
        'Wanted Poster': 'https://static.wikia.nocookie.net/onepiece/images/0/09/Brook%27s_Concert_Wanted_Poster.png/revision/latest?cb=20160619204634'
    },

    'jinbe': {
        'Name': 'Jinbe',
        'Status': 'Helmsman',
        'Devil Fruit User': 'No',
        'Devil Fruit': 'N/Ap',
        'Haki': 'Observation, Armament',
        'Bounty': 1100000000,
        'Wanted Poster': 'https://static.wikia.nocookie.net/onepiece/images/7/71/Jinbe%27s_Current_Wanted_Poster.png/revision/latest?cb=20211121074902'
    },

    'buggy the clown - you goofed': {
        'Name': 'Buggy the Clown - You Goofed',
        'Status': 'Pirate King',
        'Devil Fruit User': 'Yes',
        'Devil Fruit': 'Bara Bara No Mi',
        'Haki': 'Unconfirmed',
        'Bounty': 3189000000,
        'Wanted Poster': 'https://static.wikia.nocookie.net/onepiece/images/2/22/Buggy%27s_Wanted_Poster.png/revision/latest?cb=20130215232715'
    },

}



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    
})


app.get('/api/:name', (req, res) => {
    let crewMate = req.params.name.toLowerCase()
    if (crewmates[crewMate]){
        res.json(crewmates[crewMate])
    }else{
        res.json(crewmates['buggy the clown - you goofed'])
    }
    console.log(crewmates[crewMate])
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`I\'m going to be the pirate king! Catch our crew in on ${PORT}!`)
})