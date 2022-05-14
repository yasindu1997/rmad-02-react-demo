import './RoundedBtn.css';

function RoundedButton(props) {
    return (
        <button className='btn-round'>{props.text}</button>
    );
}

export default RoundedButton;