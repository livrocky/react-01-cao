import './App.css';
import img from './logo.jpg';
import img1 from './headerImg.jpg';

function App() {
  return (
    <div className='App'>
      <header>
        <div className='img-bcg'>
          <img className='logo-image' src={img} alt='logo' />
        </div>
        <div className='container'>
          <nav className='main-nav'>
            <a href='index.html' className='nav-link'>
              Home
            </a>
            <a href='add-car.html' className='nav-link'>
              Product
            </a>
            <a href='add-car.html' className='nav-link'>
              Company
            </a>
            <a href='add-car.html' className='nav-link'>
              Contact
            </a>
          </nav>
        </div>
      </header>
      <div className='main-img'>
        <img className='header-image' src={img1} alt='logo' />
      </div>
      <article className='info-cards' >
        <div className='card' >
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quod iste fugit ex similique, odio fuga beatae totam cupiditate earum ad aut blanditiis, deserunt id quaerat at natus magnam nobis!</p>
        </div>
        <div className='card' >
          <h2>Company</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quod iste fugit ex similique, odio fuga beatae totam cupiditate earum ad aut blanditiis, deserunt id quaerat at natus magnam nobis!</p>
        </div  >
        <div className='card' >
          <h2>Services</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quod iste fugit ex similique, odio fuga beatae totam cupiditate earum ad aut blanditiis, deserunt id quaerat at natus magnam nobis!</p>
        </div>
      </article>
      <main className='main' >
        <div className='half-content' >
        <div className='content' >
          <h1>Content</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ratione dignissimos iusto reiciendis, consectetur modi quam! Porro repellendus totam, sapiente provident nulla odio. Id quisquam neque consequuntur labore. Suscipit, iste.</p>
        </div>
        <div className='subheader' >
       <h2>Sub Header</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quasi molestias? Molestiae quam fuga, eligendi rerum placeat consequuntur illum veniam quos optio natus alias architecto culpa amet dolore, esse tenetur saepe maxime ex fugiat, est incidunt. Ipsa, blanditiis. Adipisci, amet!amet dolore, esse tenetur saepe maxime ex fugiat, est incidunt. Ipsa, blanditiis. Adipisci, amet!</p>
        </div>
        </div>
        <div className='navigation' >
          <h2>Navigation</h2> 
           <div className='menu' >
          <p>Home</p>
          <p>Product</p>
          <p>Company</p>
          <p>Contact</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
