// useEffect( func, dependencyList[]) : 내가 지정한 변수에 변화가 있을때만 실행

import Button from "../Button.js";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");

    const onClick = () => setValue((prev) => prev + 1);
    console.log("i run all the time");
    const onChange = (event) => setKeyword(event.target.value);

    useEffect(() => {                   // 1번만 실행
        console.log("CALL THE API...")
    }, []);

    useEffect(() => {                   // keyword 가 변화할 때 실행
        if (keyword !== "" && keyword.length > 5) {
            console.log("SERCH FOR", keyword);
        }
    }, [keyword]);

    useEffect(() => {                   // keyword, counter 하나라도 변화할 때 실행
        console.log("keyword & counter is changed");
    }, [keyword, counter]);

    return (
        <div>
            <div>
                <input
                    value={keyword}
                    onChange={onChange}
                    type="text"
                    placeholder="Serch here..."
                />
                <h1 className={styles.title}>Wecome Back!!!</h1>
                <Button text={"Continue"} />
            </div>
            <div>
                <h2>{counter}</h2>
                <button onClick={onClick}>click me</button>
            </div>
        </div>
    );
}

export default App;
