import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Proditems from './Proditems';

const Products = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
            .then(response => setData(response.data))

    }, [])

    




    return (
        <div>

            

            
            {data.length >=1 ? <Proditems  data={data} /> : null }
            

            {/* {
                data.map(item => <div key={item.id}>
                    {item.brand} <br />
                    {item.name} <br />
                    <img src={item.preview} alt="abcd" style={{ "width": "250px" }} /> <br /> <br />

                </div>)
            } */}


            {/* <form  className="text-center" onSubmit={submitHandler}>
                <h4>Search the Products</h4>
                <input type="text" name="input" value={input} onChange={changeHandler}/>  
                <input type="submit" className="btn btn-primary" name="submit" /> <br />
                <p>search results are for your input: </p>{input}
            </form> */}
        </div>
    );
}

export default Products;