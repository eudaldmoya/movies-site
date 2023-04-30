import React, { useState } from 'react';
import { Link } from 'react-router-dom';

 class SearchFormComponent extends React.Component {

   constructor() {
     super();

     this.state = {
       value: '',
     }
     this.handleChange = this.handleChange.bind(this);
   }
   
   handleChange(event) {
     this.setState({
       value: event.target.value,
     });
   }

   render() {
     return  <form className='form'>
     <input className='input' type="text" placeholder='Search' value={this.state.value} onChange={this.handleChange}/>
     {this.state.value === ''? 
     <Link to={'/'}><input className='submit' type="submit" value="Submit"/></Link>
     : <Link to={`/search/${this.state.value}`} state = {this.state.toggle}><input className='submit' type="submit" value="Submit"/></Link>}
   </form>
   }
 }

 export default SearchFormComponent;