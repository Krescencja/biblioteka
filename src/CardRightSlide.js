import './App.css';


{/* WERSJA ROBOCZA TEGO JESZCZE MI SIE NIE CHCE ROBIC XD  */}

function CardRightSlide(props) {

    return (
        <main className='container-fluid'>
            <hr></hr>
            <div className='card-blog'>
                <div id='carouselExample' className='carousel slide'>
                    <div className='carousel-inner'>
                        <div className='carousel-item active'>
                            <img src={props.ImageCarouselOne} className='d-block' alt='img 1'></img>
                        </div>
                        <div className='carousel-item'>
                            <img src={props.ImageCarouselTwo} className='d-block' alt='img 2'></img>
                        </div>
                        <div className='carousel-item'>
                            <img src={props.ImageCarouselThree} className='d-block' alt='img 3'></img>
                        </div>
                    </div>
                    <button className='carousel-control-prev' type='button' data-bs-target='#carouselExample' data-bs-slide='prev'>
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div className='card-blog-right'>
                    <h3>{props.title}</h3>
                    <p className='card-blog-text'>{props.description}</p>
                </div>
                
            </div>
        </main>
    );
}

export default CardRightSlide;