import React, { Fragment } from 'react';
const HeroArea = () => {
  return (
    <section className="hero-section pt-5 pb-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="search">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title mb-3">Find Your Perfect Cat Breed</h3>
                                <form >
                                <div className="input-group mt-5">
                                    <input type="text" name="name"   className="form-control" placeholder="Search your breeds" />
                                    <div className="input-group-append" >
                                        <button onClick="" className="btn btn-outline-secondary">Search</button>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default HeroArea;
