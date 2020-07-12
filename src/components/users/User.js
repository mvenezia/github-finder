import React, { Component } from 'react'

export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.username)
    }
    
    render() {
        if (!this.props.user) {
            return null
        }

        const {
            name,
            avatar,
            url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user

        const { loading } = this.props

        return (
            <div>{ name }</div>
        )
    }
}

export default User