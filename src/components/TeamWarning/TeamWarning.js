import "./TeamWarning.css";
import warningLogo from "../../images/Group 310.png";

function TeamWarning() {
    return (
        <section className="team-warning">
            <h2 className="team-warning__title">Обратите внимание</h2>
            <ul className="team-warning__list">
                <li className="team-warning__list-element">
                    <img
                        className="team-warning__image"
                        src={warningLogo}
                        alt="Иконка Внимание"
                    ></img>
                    <p className="team-warning__text">Не прошли обучение: 1</p>
                </li>
                <li className="team-warning__list-element">
                    <img
                        className="team-warning__image"
                        src={warningLogo}
                        alt="Иконка Внимание"
                    ></img>
                    <p className="team-warning__text">
                        Не заходили на портал: 1
                    </p>
                </li>
                <li className="team-warning__list-element">
                    <img
                        className="team-warning__image"
                        src={warningLogo}
                        alt="Иконка Внимание"
                    ></img>
                    <p className="team-warning__text">
                        Не были более 2 недель: 1
                    </p>
                </li>
            </ul>
        </section>
    );
}

export default TeamWarning;
