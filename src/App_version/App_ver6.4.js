// Cleanup function : 컴포넌트를 destroy할 때 실행되는 함수를 리턴할 수 있다.

import { useState, useEffect } from "react";

function Hello() {

    // function byeFn() {
    //   console.log("Bye :(");
    // }

    // function hiFn() {
    //   console.log("Hi :)");
    //   return byeFn;
    // }

    // useEffect(hiFn, []);

    useEffect(() => {
        console.log("Hi :)");
        return () => console.log("Bye :(");
    }, []);

    return (
        <h1>Hello</h1>
    );
}

function App() {

    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);

    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default App;
