import React, { Component } from 'react';
class Home extends Component {
    constructor() {
        super();
    }
    mapRestaurants() {
        const restaurant = this.state.restaurant.map((restaurant, index) =>
            <div className="rows">
            <div className="col-sm-3 my-3" key={index}>
                <div className="card mb-4">
                    <img src={restaurant.restaurantImg} className="card-img-top" style={{ height: 193 }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{restaurant.restaurantName}</h5>
                        <p className="card-text text-secondary font-italic">
                            {restaurant.restaurantSpeciality}
                        </p>
                        <a href="#" className="card-link">View Menu</a>
                    </div>
                </div>
            </div>
    </div >
        )
        return restaurant
    }

    render() {
        return (
            <div className="row">
                {this.mapRestaurants()}
            </div>
        )
    }
}
export default Home;