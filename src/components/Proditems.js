import React from 'react';

const Proditems = ({ data }) => {

    return (
        <div className="card-conatiner">
            <div className="row">
                {
                    data.map(data =>
                        <div className="col-md-3">
                            <div className="card" style={{ "width": "1rem;" }}>
                                <img src={data.preview} className="card-img-top" alt="Card images" />
                                <div className="card-body">
                                    
                                        <h5 className="card-title">{data.name}</h5>
                                        <p className="card-text">{data.brand}.</p>
                                        <center>
                                        <p className="card-text">Rs: {data.price}</p>
                                        <a href={data.id} className="btn btn-primary">Add</a>
                                        </center>
                                    
                                </div>
                            </div>
                        </div>

                    )}


            </div>
        </div>
    );
}

export default Proditems;
