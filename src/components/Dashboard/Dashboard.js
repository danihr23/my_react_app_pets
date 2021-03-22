import DashboardNavigation from './DashboadNavigation/DashboardNavigation'
import { Component } from 'react'
import Pet from '../Pet/Pet'
import * as petService from '../Services/petService'

class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pets: [],
            currCatecory: 'all'
        }
    }

    componentDidMount() {
        petService.getAll()
            .then(data => this.setState({ pets: data }))
    };

    componentDidUpdate(prevProps) {

        if (prevProps.match.params.category === this.props.match.params.category) {
            return
        }


        petService.getAll(this.props.match.params.category)
            .then(data =>

                this.setState({ pets: data, currCatecory: this.props.match.params.category }))
    }

    render() {

        console.log(this.state.pets);
        return (

            <
            section className = "dashboard" >
            <
            h1 > Dashboard < /h1> <
            DashboardNavigation / >
            <
            ul className = "other-pets-list" >

            {
                this.state.pets.map(pet =>
                    <
                    Pet key = { pet.id } {...pet }
                    />
                )
            }

            <
            /ul> <
            /section>

        );
    }
}


export default Dashboard;