import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { connect } from 'react-redux'
import {Component} from 'react';



class Navbar extends Component{
    render()
    {
         
        return(
            <nav className="nav">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><img src={logo} alt="logo"></img></Link></li>
                        <li><div className="cart-counter"><p>{this.props.items.length}</p></div></li>
                       
                        
                    </ul>
                </div>
            </nav>
   
        
    )
    }
    
}

const mapStateToProps = (state)=>{
    return {
        items: state.addedItems,
    }
  }
  const mapDispatchToProps= (dispatch)=>{
    
    return{
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Navbar);