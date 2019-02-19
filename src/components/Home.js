import React,{Component} from 'react'
import PaginationExample from './PaginationExample'
import { connect } from "react-redux";

class Home extends Component{
    constructor()
    handleSearch = ()=>{
        console.log("Serach button clicked")
       // this.props.actions.getInvoices();

    }
    sortBy =(key) =>{

    }
 render(){

        console.log(this.state)

     return(
         <section className="section">
             <div className="container">


         <div className="field">
             <div className="control">
                 <div className="select is-primary">
                     <select>
                         <option>beef</option>
                         <option>With options</option>
                     </select>
                 </div>
             </div>

         </div>
             <div className="field">
                 <div className="control">
                     <div className="select is-success">
                         <select>
                             <option>invoce</option>
                             <option>With options</option>
                         </select>
                     </div>
                 </div>
             </div>
                 <a className="button is-primary" onClick={this.handleSearch}>Search</a>
                 <PaginationExample invoice={this.props.data} sortBy={this.sortBy} numberofPages={this.props.data.length /10}/>
             </div>


         </section>


     )
 }
}

const  mapStateToProps = (state )=>{
    return {
        data: state.data
    }
}
export default connect(mapStateToProps)( Home);