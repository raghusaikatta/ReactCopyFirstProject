import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { auto } from 'async';
import './Movies.css';


const Movies = () => {

    const [input, setInput] = useState('');

    const changeHandler = (e) => {
        setInput(e.target.value)
    }



    const [mov, setMov] = useState([]);
    const [orgMovies, setOrgMovies] = useState([]);

    useEffect(() => {
        axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
            .then(response => {
                setMov(response.data.Search)
                setOrgMovies(response.data.Search)
            })
    }, [])

    console.log(mov);

    const submitHandler = (e) => {
        e.preventDefault();
        // const updatedProducts = orgProducts.filter(({name}) => name.includes(input))
        // setData(updatedProducts)

        const updatedMovies = orgMovies.filter(({ Title }) => Title.includes(input))
        setMov(updatedMovies)

    }


    return (


        <div>
            <center>
                <h3>Movie Search </h3>
                <form onSubmit={submitHandler}>
                    <input type="text" name="input" value={input} onChange={changeHandler} />
                    <input type="submit" name="submit" /> <br /><br />

                    {input} <br /> <br />
                </form>
            </center>




            <div style={{ "display": "flex", "flexGrow": "3", "flexWrap": "wrap", "justifyContent": "space-evenly" }}>
                {
                    mov.map((item) =>
                        <div style={{ "border-style": "groove" }}>
                            
                                <div class="container">

                                    <div class="overlay">

                                        <div class="text"><p>{item.Title} </p></div>
                                        <p>{item.Type}</p>
                                        <p>{item.Title}  {item.Year}</p>

                                    </div>

                                
                                <p>{item.Title} </p>
                                <img src={item.Poster} alt={item.Title} style={{ width: 250 }} />
                                </div>
                                {/* <p>{item.Type}</p>
                                <p>{item.Title}  {item.Year}</p>
                                <img src={item.Poster} alt={item.Title} style={{ width: 250 }} /> */}
                           
                        </div>
                    )
                }

            </div>
        </div>
    );
}

export default Movies;

