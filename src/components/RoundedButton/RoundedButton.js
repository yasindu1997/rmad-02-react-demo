import './RoundedBtn.css';

function RoundedButton(props) {
    return (
        <button className='btn-round'>{props.name}</button>
    );
}

export default RoundedButton;