
const express = require('express')
const app = express()
const PORT = 2330

const crewmates = {

    'luffy': {
        'Name': 'Luffy',
        'Status': 'Captain',
        'Devil Fruit User': 'Yes',
        'Devil Fruit': 'Gomu Gomu No Mi',
        'Haki': 'Arnmament, Observation, Conqueror',
        'Bounty': 3000000000
    },

    'zoro': {
        'Name': 'Zoro',
        'Status': 'Swordsman',
        'Devil Fruit User': 'No',
        'Devil Fruit': 'N/Ap',
        'Haki': 'Arnmament, Observation, Conqueror',
        'Bounty': 1111000000
    },

    'nami': {
        'Name': 'Nami',
        'Status': 'Navigator',
        'Devil Fruit User': 'No',
        'Devil Fruit': 'N/Ap',
        'Haki': 'Unconfirmed',
        'Bounty': 366000000
    },

    'usopp': {
        'Name': 'Usopp',
        'Status': 'Sniper',
        'Devil Fruit User': 'No',
        'Devil Fruit': 'N/Ap',
        'Haki': 'Observation',
        'Bounty': 500000000
    },

    'sanji': {
        'Name': 'Sanji',
        'Status': 'Cook',
        'Devil Fruit User': 'No',
        'Devil Fruit': 'N/Ap',
        'Haki': 'Armament, Observation',
        'Bounty': 1032000000
    },

    'chopper': {
        'Name': 'Chopper',
        'Status': 'Doctor',
        'Devil Fruit User': 'Yes',
        'Devil Fruit': 'Hito Hito No Mi',
        'Haki': 'Unconfirmed',
        'Bounty': 1000
    },


    'nico robin': {
        'Name': 'Nico Robin',
        'Status': 'Archaeologist',
        'Devil Fruit User': 'Yes',
        'Devil Fruit': 'Hana Hana No Mi',
        'Haki': 'Unconfirmed',
        'Bounty': 930000000
    },

    'franky': {
        'Name': 'Franky',
        'Status': 'Shipwright',
        'Devil Fruit User': 'No',
        'Devil Fruit': 'N/Ap',
        'Haki': 'Unconfirmed',
        'Bounty': 394000000
    },

    'brook': {
        'Name': 'Brook',
        'Status': 'Musician',
        'Devil Fruit User': 'Yes',
        'Devil Fruit': 'Yomi Yomi No Mi',
        'Haki': 'Unconfirmed',
        'Bounty': 383000000
    },

    'jinbe': {
        'Name': 'Jinbe',
        'Status': 'Helmsman',
        'Devil Fruit User': 'No',
        'Devil Fruit': 'N/Ap',
        'Haki': 'Observation, Armament',
        'Bounty': 1100000000
    },

    'buggy the clown - you goofed': {
        'Name': 'Buggy the Clown - You Goofed',
        'Status': 'Pirate King',
        'Devil Fruit User': 'Yes',
        'Devil Fruit': 'Bara Bara No Mi',
        'Haki': 'Unconfirmed',
        'Bounty': 3189000000
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