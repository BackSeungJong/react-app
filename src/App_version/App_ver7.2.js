import { useEffect, useState } from "react";

function App() {

    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [money, setMoney] = useState(0);
    const [cost, setCost] = useState(1);

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);

    const onChange = (event) => setMoney(event.target.value);
    const onSelect = (event) => {
        setCost(event.target.value)
    };


    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>

            {loading ? <strong>Loading...</strong> :
                <select onChange={onSelect}>
                    <option>Select Coin!</option>
                    {coins.map((coinItem) =>
                        <option
                            key={coinItem.id}
                            value={coinItem.quotes.USD.price}
                        >
                            {coinItem.name}({coinItem.symbol}): ${coinItem.quotes.USD.price} USD
                        </option>
                    )
                    }
                </select>
            }
            <h3>Please enter the amount</h3>
            <div>
                <input value={money} onChange={onChange} /> $
            </div>
            {money !== 0 ? `you can get ${money / cost}` : null}
        </div>
    );
}

export default App;