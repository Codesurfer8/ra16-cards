import './Card.css';

function Card(props) {
    return (
        <div className="container">
            {props.children}
            <div className="text-block">
                <h4 className='title'>{props.title}</h4>
                <p className='text'>{props.text}</p>
                <button className="btn">
                    <span className='btn-text'>Go somewhere</span>
                </button>
            </div>
        </div>
    )
}

export default Card;