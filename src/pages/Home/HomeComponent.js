import RoundedButton from "../../components/RoundedButton/RoundedButton";
import NavBar from "../../components/Navigation/NavBar";
import './Home.css'

function HomeComponent() {

    return (
        <div>
            <NavBar/>
            <h1 style={{ fontFamily: 'revert', color: 'green', fontStyle: 'italic' }}>This is Home Page Component</h1>
            <RoundedButton text="Click To Go About"/>
            <button type="button" className="btn btn-success">Success</button>
        </div>
    );
}

export default HomeComponent;