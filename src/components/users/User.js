import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class User extends Component {
    render() {

      const {login,avatar_url,html_url,repos_url}=this.props.user;

        return (
            <div>
                <div className="card">
               <img className="card-img-top" src={this.props.user.avatar_url} alt=""/>
               <div className="card-body">
                 <h4 className="card-title">{this.props.user.login}</h4>
                 <p className="card-text">
                   <Link to={'/users/'+login} className="btn btn-primary">show more</Link>
                   <a href={this.props.user.repos_ur} className="btn btn-dark">Repository</a>
                  
                 </p>
               </div>      
             </div>
            </div>
        )
    }
}

export default User
