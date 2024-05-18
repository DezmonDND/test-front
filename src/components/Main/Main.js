import Header from "../Header/Header";
import TeamInfo from "../TeamInfo/TeamInfo";
import TeamProgress from "../TeamProgress/TeamProgress";
import TeamWarning from "../TeamWarning/TeamWarning";
import "./Main.css";

function Main() {
    return (
        <main className="main">
            <Header></Header>
            <div className="main__container">
                <TeamInfo></TeamInfo>
                <TeamProgress></TeamProgress>
                <TeamWarning></TeamWarning>
            </div>
        </main>
    );
}

export default Main;
