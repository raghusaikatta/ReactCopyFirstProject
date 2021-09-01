import React,{useEffect, useState} from 'react';
import axios from 'axios';

const Product = (match) => {
    

    const [data, setData] = useState({});
    useEffect(() => {
        axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${match.params.id}`)
            .then(({data}) => {setData(data)
            })

    }, [])
   


    return ( <div>
    <h1>Product Page: {match.params.id}</h1>

    {
        data.map((item) =>{})
    }


    
    
    </div> );
    
}
 
export default Product;