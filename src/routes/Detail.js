import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    const getMovieInfo = async () => {
        const json = await (await (fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        )).json();

        setMovie(json.data.movie);
        setLoading(false);
    }

    useEffect(() => (
        getMovieInfo()
    ), []);

    return (
        <div>
            {loading ? <h1>Loading...</h1> :
                <div>
                    <button>
                        <Link to="/">back</Link>
                    </button>
                    <div>
                        <img src={movie.medium_cover_image} alt={movie.id}></img>
                        <h2>{movie.title}</h2>
                        <h4>Rating {movie.rating}</h4>
                        <h4>Likes {movie.like_count}</h4>
                        <p>Description {movie.description_full}</p>
                    </div>
                </div>
            }

        </div>
    );
}

export default Detail;