import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Proditems from './Proditems';

const Products = () => {

    const [data, setData] = useState([]);

    const [orgProducts, setOrgProducts] = useState([]);
    useEffect(() => {
        axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
            .then(({data}) => {
                setOrgProducts(data)
                setData(data)
            })

    }, [])

    const [input, setInput] = useState('');

    const changeHandler = (e) => {
        setInput(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const updatedProducts = orgProducts.filter(({name}) => name.includes(input))
        setData(updatedProducts)
        // fetch(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${input}`)
        //     .then(response => response.json())
        //     .then(data => console.log(data))
    }






    return (
        <div>

            <form className="text-center" onSubmit={submitHandler}>
                <h4>Search the Products</h4>
                <input type="text" name="input" value={input} onChange={changeHandler} />
                <input type="submit" className="btn btn-primary" name="submit" /> <br />
                <p>search results are for your input: </p>{input}
            </form>




            {data.length >= 1 ? <Proditems data={data} /> : null}





        </div>
    );
}

export default Products;