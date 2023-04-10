import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero';
import Navbar from './Navbar';
import About from './About';
import CardLeft from './CardLeft';
import CardRight from './CardRight';
import CardRightSlide from './CardRightSlide';
import Footer from './Footer';
import theImageone from './img/wpis1.jpg';
import theImagetwo from './img/wpis2.jpg';
import theImagethree from './img/wpis3.jpg';
import A from './img/wpis3.jpg';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <About />
    <CardLeft 
        title='Międzynarodowy Dzień Książki'
        description='Z okazji Światowego Dnia Książki odbyło się spotkanie w bibliotece. Takie troszkę geograficznę. Uczniowie z klasy 2 b oraz zeróweczki wysłuchali przesłanie napisane przez greckiego pisarza  Vagelis Iliopoulos do wszystkich dzieci. Tegorocznym hasłem święta książki jest  "Jestem książką czytaj mnie".'
        image= {theImageone}
    />
    
    <CardRight 
        title='Wyniki pierwszego pojedynku'
        description='Przez dwa tygodnie trwały zmagania o to kto wygra. Drzwi do biblioteki na przerwach się nie zamykały, a bibliotekę odwiedzili chyba wszyscy uczniowie. Każdy chciał głosować i walczył o to by jego ulubiona postać wygrała. W piątek przeliczyliśmy głosy. A więc głosowało 244 osób. Wygrała Środa!!! otrzymała 127 głosów o 10 więcej niz Hermiona. Kolejny pojedynek już niebawem. '
        image= {theImagetwo}
    />
    <CardLeft 
        title='Gry bez prądu'
        description='Dziś było tylu graczy, że miejsca zabrakło. '
        image= {theImagethree}
    />
    <CardRight
        ImageCarouselOne={theImageone}
        ImageCarouselTwo={theImagetwo}
        ImageCarouselThree={theImagethree}
        title='Gry bez prądu'
        description='Dziś było tylu graczy, że miejsca zabrakło. '
    />
    <CardLeft 
        title='NOWY WPIS'
        description='NOWY WPIS '
        image= {A}
    />
    <Footer/>
  </React.StrictMode>
);
