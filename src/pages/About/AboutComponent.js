import RoundedButton from "../../components/RoundedButton/RoundedButton";
import NavBar from "../../components/Navigation/NavBar";

function AboutComponent() {
    return (
        <div>
            <NavBar />
            <h1>This is About page component</h1>
            <RoundedButton text="Click To Go Home" />
        </div>
    );
}

export default AboutComponent;