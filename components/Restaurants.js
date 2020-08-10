import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions/allActions';
import {
    NavLink
} from 'react-router-dom';

class Restaurants extends Component {

    componentDidMount() {
        this.props.fetchRestaurants();
    }

    constructor() {
        super()
    }

    mapRestaurants() {
        const restaurantCards = this.props.reducer.map((restaurant, index) =>
            <div className="col-sm-3 my-3" key={index}>
                <div className="card mb-4">
                    <img src={restaurant.restaurantImg} className="card-img-top" style={{ height: 193 }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{restaurant.restaurantName}</h5>
                        <p className="card-text text-secondary font-italic">
                            {restaurant.restaurantSpeciality}
                        </p>
                        <NavLink to={"/restaurants/viewmenu/"+restaurant.restaurantId} className="card-link">View Menu</NavLink>
                    </div>
                </div>
            </div>
        )
        return restaurantCards
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron py-2 my-4">
                    <p className="display-3 text-center mb-0">All Restaurants</p>
                </div>

                <div className="row">
                    {this.mapRestaurants()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    reducer: state.reducer.restaurants
});

export default connect(mapStateToProps, { fetchRestaurants })(Restaurants);
