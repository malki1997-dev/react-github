import React, { Component } from 'react'
import axios from 'axios'
import Searchuser from './Searchuser'

export class Users extends Component {

  constructor(props) {
      super(props)
  
      this.state = {
           users:[]

          
      }
  }
  
  getUsers=()=>{

 axios.get('https://api.github.com/users').
             then(response=>{
               this.setState({
                 users:response.data
               })
              })

  }

  componentDidMount()
  {
    this.getUsers();
  }

  searchUsersFromGit=(data)=>{

  if(data !='')
  {
    axios.get(`https://api.github.com/search/users?q={query}{&page,per_page,sort,order?q=${data}`).
    then(response=>{
      console.log(response)
    })
  }

  }


    render() {
        return (
            <div>

          <div class="row my-2">
  
        <div className="col-md-6">
          <Searchuser />
        </div>
            
          </div>


                      <div className="row">
             {this.state.users.map(user=>(
               <div className="col-md-4" key="user.id">
             <div class="card">
               <img class="card-img-top" src={user.avatar_url} alt=""/>
               <div class="card-body">
                 <h4 class="card-title">{user.login}</h4>
                 <p class="card-text">
                   <a href={user.html_url} className="btn btn-primary">show more</a>
                   <a href={user.repos_ur} className="btn btn-dark">Repository</a>
                   <span getUserSearch="searchUsersFromGit(data)"></span>
                 </p>
               </div>
             </div>
             </div>))}
                      </div>

            </div>
        )
    }
}

export default Users




