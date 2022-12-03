import "./styles.scss";
import CreatePlayer from "../List/createPlayer";

export function Header({todo}) {
    return (
        <div className="teams">
            <form>
                <input type="checkbox"/>
            </form>
            <div className="teams_title">
                <span>{todo.firstName} {todo.lastName}</span>
            </div>
            <div>
                <span>{todo.name}</span>
            </div>
            <CreatePlayer />
        </div>
    )
}