import "./Home.css"
import product from "../assets/image-product-desktop.jpg"
import cart from "../assets/icon-cart.svg"

export const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="first-container">
            <img src={product} alt="product" className="image"/>
        </div>
        <div className="second-container">
            <div className="fake-title">P E R F U M E</div>
            <h1 className="title">Grabrielle <br /> Essence Eau <br /> De Parfum</h1>
            <p className="paragraph">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creater for the house of CHANEL.</p>
            <h1 className="price">$149.99<sup className="sup">$169.99</sup></h1>
            <button>
                <img src={cart} alt="cart" className="cart"/>
                 Add to cart
            </button>
        </div> 
      </div>
    </div>
  )
}


