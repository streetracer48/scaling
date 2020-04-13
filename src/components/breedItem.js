import React, { Component } from 'react'
import { Link } from 'react-router-dom';
 class BreedItem extends Component {
  render() {
      const {breed} = this.props
      console.log('data more',breed)
    return (
      <div className="col-md-3" >
        <div className="card">
            <div className="card-body">
    <h5 className="card-title">{breed.name}</h5>
                <Link className="muted" to="/cat-details">details....</Link>
            </div>
    </div>
</div>
    )
  }
}

export default BreedItem
