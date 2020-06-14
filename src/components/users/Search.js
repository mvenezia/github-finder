import React, { Component } from 'react'

class Search extends Component {
    state = {
        userSearch: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    onSubmit = (e) => {
        e.preventDefault()
        this.props.searchUsers(this.state.userSearch)
        this.setState({ userSearch: '' })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="userSearch" placeholder="Search Users..." value={this.state.userSearch} onChange={this.onChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
            </div>
        )
    }
}

export default Search
