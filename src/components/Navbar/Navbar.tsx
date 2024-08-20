
import './Navbar.css'


function Navbar() {
  return (
    <div className='navbar'> 
    <h2 className='logo'>Dotly</h2>

    <ul className='navbar-menu'>
      <li>Features</li>
      <li>Products</li>
      <li>Pricing</li>
    </ul>

    <div className='navbar-right'>
      <button>Log in</button>
      <button>Sign up</button>
    </div>

    </div>
  )

}

export default Navbar;