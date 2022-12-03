import {useState, useEffect} from "react";
import AddElement from "./addElement";
import TeamList from "./teamList";

export function TeamItem() {
    const [items, setItems] = useState([
        {
            id: Math.random(),
            name: "Barcelona",
            createdAt: false
        },
        {
            id: Math.random(),
            name: "Real Madrid",
            createdAt: false
        },
        {
            id: Math.random(),
            firstName: "Lionnel",
            lastName: "Messi",
            createdAt: false
        },
        {
            id: Math.random(),
            firstName: "Cristiano",
            lastName: "Ronaldo",
            createdAt: false
        }
    ]);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    return (
        <div>

            <AddElement onAdd={(text) => {
                setItems([
                    ...items,
                    {
                        id: Math.random(),
                        name: text,
                        createdAt: false
                    }
                ])
            }} />
            <TeamList props={items}/>

        </div>
    )
}
