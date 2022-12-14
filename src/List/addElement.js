import {useState} from "react";

function AddElement({onAdd}) {
    const [text,setText] = useState("");
    return (
        <div>

            <form onSubmit={(e) => {
                e.preventDefault();
                onAdd(text);
                setText("")
            }}>
                <input type="text" value={text} onChange={(e) => {
                    setText(e.target.value)
                }}/>
                <button>player</button>
            </form>

        </div>
    )
}
export default AddElement;