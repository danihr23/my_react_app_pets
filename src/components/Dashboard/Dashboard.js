
import DashboardNavigation from './DashboadNavigation/DashboardNavigation'
import {Component} from 'react'
import Pet from '../Pet/Pet'


class Dashboard  extends Component {
    
    constructor(props){
        super(props)

        this.state={
            pets:[]
        }
    }

    componentDidMount (){
        fetch('http://localhost:5000/pets')
        .then(res=>res.json())
        .then(data=> this.setState({pets:data}))
        .catch(err=> console.log(err))
    };

    render (){

        console.log(this.state.pets);
    return(

        <section className="dashboard">
                <h1>Dashboard</h1>
               <DashboardNavigation/>
                <ul  className="other-pets-list">
                    
                    {this.state.pets.map(pet=>
                        <Pet key={pet.id} {...pet} />
                    )}
                    
                </ul>
            </section>
        
        );
    }
}


export default Dashboard;