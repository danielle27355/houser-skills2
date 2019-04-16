import React, {Component} from 'react';
import {Link, HashRouter } from 'react-router-dom';

export class Wizard extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            theState: '',
            zipcode: ''
        }
    }

    render(){
        let{name, address, city, staaate, zipcode} = this.state;

        return(

            <body>
                <div>Wizard</div>

                <form>
                    <label>
                        Name:
                        <input type="text" 
                        onChange={event =>
                            this.setState({
                              name: event.target.value
                            })
                          } />
                    </label>
                    <label>
                        Address:
                        <input type="text" 
                        onChange={event =>
                            this.setState({
                              address: event.target.value
                            })
                          } />
                    </label>
                    <label>
                        City:
                        <input type="text" 
                        onChange={event =>
                            this.setState({
                              city: event.target.value
                            })
                          } />
                    </label>
                    <label>
                        State:
                        <input type="text" 
                        onChange={event =>
                            this.setState({
                              staaate: event.target.value
                            })
                          } />
                    </label>
                    <label>
                        Zipcode:
                        <input type="text" 
                        onChange={event =>
                            this.setState({
                              zipcode: event.target.value
                            })
                          } />
                    </label>
                </form>


                <button onClick={() => this.props.postHouse(name, address, city, staaate, zipcode)}>
                     Add to houses
                </button>
                <button>
                    <Link to={"../Dashboard/Dashboard"}>Cancel</Link>
            
                </button>



            </body>
            
        )
    }
}

export default Wizard;