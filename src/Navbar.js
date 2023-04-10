import './App.css';

function Navbar() {
  return (
    <nav className='navbar sticky-top navbar-expand-lg'>
      <div className='container'>
        <a className='navbar-brand' href='#'>Strona główna</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <a className='nav-link' href='#'>Strona 1</a>
          <a className='nav-link' href='#'>Strona 2</a>
          <a className='nav-link' href='#'>Strona 3</a>
          </div>
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;
