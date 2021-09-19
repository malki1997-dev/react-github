
import React, { Component } from 'react'
import axios from 'axios';
import User from './User';

export class UsersItem extends Component {
    
  state={

user:{}

  }


    componentWillMount()
    {
      const login=this.props.match.params.login;

      axios.get(`https://api.github.com/users/${login}`).
      then(res=>{
          this.setState({
              user: res.data
          })
      })
    }
    
    render() {
        const {user}=this.state;
        return (
            <div>
              <user user={user}/>
            </div>
        )
    }
}

export default UsersItem
