import PropTypes from 'prop-types'

function Student(props) {
    return (
        <div className="div">
            <img className="bikeimg" src={props.imgUrl} alt="Bike Image" />
            <p className="p1">Bike Brand:{props.bikeBrand}</p>
            <p className="p2">About Brand:{props.about}</p>
            <p className="p3">Rate out of 10:{props.rate}</p>
        </div>
    );
}

Student.propTypes = {
    imgUrl : PropTypes.any ,
    bikeBrand : PropTypes.string ,
    about : PropTypes.string ,
    rate : PropTypes.number
}

Student.defaultProps = {
    imgUrl : "no image",
    bikeBrand : "no brand",
    about : "no information",
    rate : 0
}



export default Student