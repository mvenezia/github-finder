import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
    state = {
        userSearch: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    onSubmit = (e) => {
        e.preventDefault()
        this.props.searchUsers(this.state.userSearch)
        this.setState({ userSearch: '' })
    }

    onClear = (e) => {
        e.preventDefault()
        this.props.clearUsers()
    }
    
    render() {
        const {
            showClear
        } = this.props

        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="userSearch" placeholder="Search Users..." value={this.state.userSearch} onChange={this.onChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {
                    showClear
                    ? <button className="btn btn-light btn-block" onClick={this.onClear}>Clear</button>
                    : null
                }
                
            </div>
        )
    }
}

export default Search
