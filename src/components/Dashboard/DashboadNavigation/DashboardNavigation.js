
import { NavLink } from 'react-router-dom'


const DashboardNavigation =()=>{
    return(
        <nav  className="navbar">
        <ul>
            <li><NavLink activeClassName="nav-link-selected" to="/categories/All">All</NavLink ></li>
            <li><NavLink activeClassName="nav-link-selected" to="/categories/Cats">Cats</NavLink ></li>
            <li><NavLink activeClassName="nav-link-selected" to="/categories/Dogs">Dogs</NavLink ></li>
            <li><NavLink activeClassName="nav-link-selected" to="/categories/Parrots">Parrots</NavLink ></li>
            <li><NavLink activeClassName="nav-link-selected" to="/categories/Reptiles">Reptiles</NavLink ></li>
            <li><NavLink activeClassName="nav-link-selected" to="/categories/Other">Other</NavLink></li>
        </ul>

        <style jsx>{`
            .nav-link-selected{
                background: red !important;
            }
            
            `}</style>
    </nav>

    );
}

export default DashboardNavigation;