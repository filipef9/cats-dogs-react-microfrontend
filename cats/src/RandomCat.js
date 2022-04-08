import { useEffect, useState } from "react";

const RandomCat = () => {
    const [randomCatImg, setRandomCatImg] = useState(null);

    const fetchRandomCat = () => {
        setRandomCatImg("");

        fetch('https://api.thecatapi.com/v1/images/search')
            .then(res => res.json())
            .then(catInfo => {
                console.log(catInfo);
                setRandomCatImg(catInfo[0].url);
            });
    };

    useEffect(() => {
        if (randomCatImg === null) fetchRandomCat();
    });

    return (
        <div>
            <header>
                <h3>Cat of the day</h3>
                <div>
                    <button onClick={() => fetchRandomCat()}>New Cat</button>
                </div>
                {randomCatImg !== ""
                    ? (
                        <div>
                            <img src={randomCatImg} width="400px" alt="Cat" />
                        </div>
                    )
                    : (
                        <div>Loading Image</div>
                    )
                }
            </header>
        </div>
    );
};

export default RandomCat;