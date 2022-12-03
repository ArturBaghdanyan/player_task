import {useState} from "react";
import TeamList from "./teamList";
function CreatePlayer() {
    const [state,setState] = useState([]);


    function handleClick() {
        setState([...state, <TeamList removeHandler={removeList} />])
    }

    function removeList(id) {
        const newList = state.filter((item) => item.id !== id);
        setState(newList);
    }
    return (
        <div>
            <span onClick={handleClick} className="remove">x</span>
        </div>
    )
}
export default CreatePlayer;