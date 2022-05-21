import RoundedButton from "../../components/RoundedButton/RoundedButton";
import NavBar from "../../components/Navigation/NavBar";

function AboutComponent() {
    return (
        <div>
            <NavBar header="About" />
            <h1>This is About page component</h1>
            <RoundedButton name="Click To Go Home" />
            <input placeholder="Enter your name"/>
        </div>
    );
}

export default AboutComponent;