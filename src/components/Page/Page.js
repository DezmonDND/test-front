import Header from "../Header/Header";
import TeamInfo from "../TeamInfo/TeamInfo";
import TeamProgress from "../TeamProgress/TeamProgress";
import TeamWarning from "../TeamWarning/TeamWarning";
import "./Page.css";

function Page() {
    return (
        <div className="page">
            <Header></Header>
            <main className="main">
                <TeamInfo></TeamInfo>
                <TeamProgress></TeamProgress>
                <TeamWarning></TeamWarning>
            </main>
        </div>
    );
}

export default Page;
