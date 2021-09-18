import React, { Component } from 'react'

export class Searchuser extends Component {

state=
{
search:'salam'
}

handleForm=(e)=>
{
this.setState({

  search:e.target.value

})
}

searchUsers=(e)=>{

e.preventDefault();
this.props.getUserSearch(this.state.search)

}


    render() {

    const{search}=this.state;

        return (
            <div>
                
<form onSubmit={this.searchUsers}>

  <div className="form-group">
  
    <input type="text" onChange={this.handleForm} value={search} placeholder="search users..." id="search" class="form-control" />
  </div>

 <button className="btn btn-danger btn-block" >search</button>


</form>


            </div>
        )
    }
}

export default Searchuser
