import './App.css';
import styled from 'styled-components';
import theImageone from './img/wpis1.jpg';




function CardLeft(props) {
   
    const BgImageRight = styled.div`
    background-image: url(${props => props.theImage});
    background-repeat: no-repeat;
    background-position: 0 20%;
    background-size: cover;
    width: 60%;
    height: 40vh;
    box-shadow: 0 0 30px black inset;
    border-top-left-radius: 100%;
    border-bottom-left-radius: 100%;
`;

    return (
        <main className='container-fluid'>
            <hr></hr>
            <div className='card-blog'>
                <div className='card-blog-left'>
                    <h3>{props.title}</h3>
                    <p className='card-blog-text'>{props.description}</p>
                </div>
                <BgImageRight 
                theImage={props.image}/>{/* tu zostaw zeby dzialalo xd  */}
                 

            </div>
        </main>
    );
}

export default CardLeft;