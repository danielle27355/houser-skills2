
const houses = [
    {
        id: 1,
        name: 'Apartmento Uno',
        address: '6665 Dupont Circle',
        city: 'Phoenix',
        state: 'Arizona',
        zipcode: '85034'
    },
    {
        id: 2,
        name: 'Apartmento Dos',
        address: '45 Dupant Circle',
        city: 'Seattle',
        state: 'Washington',
        zipcode: '65034'
    },
    {
        id: 3,
        name: 'Apartmento Tres',
        address: '6555 Dupont Circle',
        city: 'Phoenix',
        state: 'Michigan',
        zipcode: '35034'
    }
]


module.exports = {
    getHouses: (req, res, next) => {
        res.status(200).send(houses);
    },

    // postHouse: (req, res => {
    //     const{name, address, city, state, zipcode} = req.body;
    //     console.log("it works", req.body);
    //     const newHouse = {
    //         name : name,
    //         address : address,
    //         city : city,
    //         state : state,
    //         zipcode : zipcode
    //     }
    //     getHouses.push(newHouse);
    //     console.log(getHouses);
    //     res.status(200).send(getHouses);
    // })
}