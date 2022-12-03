import {Header} from "../Header/header";

function TeamList({props}) {

    return (
        <div className="list">
            {props.map((todo) => {
                return (
                   <Header key={todo.id} todo={todo}/>
                )
            })}
        </div>
    )
}
export default TeamList;