import './App.css';
import styled from 'styled-components';
import theImagetwo from './img/wpis2.jpg';



function CardRight(props) {
   const BgImageLeft = styled.div`
    background-image: url(${props => props.theImage});
    background-repeat: no-repeat;
    background-position: 0 20%;
    background-size: cover;
    width: 60%;
    height: 40vh;
    box-shadow: 0 0 30px black inset;
    border-top-right-radius: 100%;
    border-bottom-right-radius: 100%;
    `;
    return (
        <main className='container-fluid'>
            <hr></hr>
            <div className='card-blog'>
            <BgImageLeft 
                theImage={props.image}/>
                <div className='card-blog-right'>
                    <h3>{props.title}</h3>
                    <p className='card-blog-text'>{props.description}</p>
                </div>
                
            </div>
        </main>
    );
}

export default CardRight;