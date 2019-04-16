import React, {Component} from 'react';
import House from '../House/House'
import {Link, HashRouter } from 'react-router-dom';



    // DEAL WITH ALL OF THIS HOOPLA

export class Dashboard extends Component{
    constructor(){
        super();
        this.state = {
            userInput: ''
        }
    }
    updateInput = (input) => {
        this.setState({
            userInput: input
        })
    }


    render(){
        let {house} = this.props
        let mappedHouses = house.map(house => {
            return(
                <div key = {house.id}>
                    <h2>Name: {house.name}</h2>
                    <h2>Address: {house.address}</h2>
                    <h2>City: {house.city}</h2>
                    <h2>State: {house.theState}</h2>
                    <h2>Zipcode: {house.zipcode}</h2>
                
                </div>

            )
        })

        return(
            <body>
                <div className='mappedHouses'>{mappedHouses}</div>
                <button>
                <Link to={"../Wizard/Wizard"}>Add New Property</Link>
                </button>


            </body>
        )




        
    }
}

export default Dashboard;