import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import {Dropdown,DropdownToggle,DropdownMenu,DropdownItem,DropdownButton} from 'reactstrap';

 class Home extends Component{
   
    
    constructor(props) {
        super(props);
        
        this.state=
        {
            itemData:this.props.items
        }
       
        
      }
   
    
      sortByNameHandler=()=>
    {

        const itemData=this.props.items.sort((a,b)=>a.title.localeCompare(b.title))
        this.setState=
        {
            itemData:itemData
        }
       
       
    }
    


    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
       
        
        let itemList = this.state.itemData.map(item=>{
            
            return(
              
                
                <div className="card" key={item.id}>
                        
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            
                            <span to="/" className="add-btn" onClick={()=>{this.handleClick(item.id)}}><button>Add</button></span>
                        </div>

                        <div className="card-content">
                            <span className="card-title">{item.title}</span>
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                        
                 </div>
                 
                 

            )
        })

        return(
            
           

            <div className="container">
           
           
           
             { console.log(this.state.itemData)}  
             
            <button className="btn btn-primary" onClick={()=>this.sortByNameHandler()}>Sort by Name</button>
            <button className="btn btn-success" onClick={()=>this.sortByPriceHandler()}>Sort by  Price</button>

            
             <div>
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>

            
        </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)