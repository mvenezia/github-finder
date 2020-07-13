import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import React, { Component, Fragment } from 'react'

export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.username)
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object,
        geUser: PropTypes.func,
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

        if (loading) return <Spinner />

        return (
            <Fragment>
                <Link
                    to={'/'}
                    className={'btn btn-light'}
                >
                    Back To Search
                </Link>
                Hireable: {' '}
                {
                    hireable ? <i className="fas fa-check text-success" />
                    : <i className='fas fa-times-circle text-danger' />
                }     
            </Fragment>
        )
    }
}

export default User
