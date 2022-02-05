// map 함수를 통한 화면에 배열 뿌리기

import { useEffect, useState } from "react";

function App() {

    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);

    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDos((currentArray) => [toDo, ...currentArray]);
        setToDo("");
    };

    useEffect(() => console.log(toDos), [toDos]);


    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    value={toDo}
                    onChange={onChange}
                    type="text"
                    placeholder="Write your to do..."
                >
                </input>

                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((toDoItem, index) => (<li key={index}>{toDoItem}</li>))}
            </ul>
        </div >
    );
}

export default App;
