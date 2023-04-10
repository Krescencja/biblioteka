import './App.css';
import avatar from './img/avatar.jpg'

function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
            <div className="card mb-3 mt-3">
            <div className="row g-0">
                <div className="col-md-5 ms-2 align-self-center ">
                    <div className='row g-0 pt-3 pb-3'>
                        <div className='col-md-3'>
                            <img src={avatar} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="card-body col-md-6  ms-3 align-self-center">
                            <h5 className="card-title">Nauczyciel Bibliotekarz</h5>
                            <p className="card-text">mgr Beata Kalinka</p>
                        </div>
                    </div>
                </div> 
                <div className="col-md-3 align-self-center ps-3 pb-3">
                <div className="card-body-h">
                    <h5 className="card-title">Godziny pracy biblioteki:</h5>
                    <p className="card-text">Poniedziałek: 8:00 - 14:00 </p>
                    <p className="card-text">Wtorek: 8:00 - 14:00 </p>
                    <p className="card-text">Środa: prace wewnętrzne </p>
                    <p className="card-text">Czwartek: 8:00 - 14:00</p>
                    <p className="card-text">Piątek: 8:00 - 14:00</p>
                </div>
                </div> 
               
                <div className="col-md-3  align-self-center">
                <div className="card-body">
                    <h5 className="card-text">Regulamin biblioteki</h5>
                </div>
                </div> 
            </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer;
