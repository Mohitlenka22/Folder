import React from 'react'


function Home() {
    return (
        <div className='container my-3' style={{backgroundColor:'blue',borderBottom:'2px solid red',borderTop:'2px solid green'}}>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://logodix.com/logo/4647.png" style={{ backgroundColor: 'gray', width: '100%', height: '500px' }} className="d-block w-99" alt="..." />

                    </div>
                    <div className="carousel-item">
                        <img src='https://logodix.com/logo/1988000.png' style={{ backgroundColor: 'gray', width: '100%', height: '500px' }} className="d-block w-99" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://logodix.com/logo/4652.png" style={{ backgroundColor: 'gray', width: '100%', height: '500px' }} className="d-block w-99" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Home
