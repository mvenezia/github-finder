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
            company,
            avatar_url,
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
                    to='/'
                    className='btn btn-light'
                >
                    Back To Search
                </Link>
                Hireable: {' '}
                {
                    hireable ? <i className='fas fa-check text-success' />
                    : <i className='fas fa-times-circle text-danger' />
                }
                <div className='card grid-2'>
                    <div className='all-center'>
                        <img
                            src={avatar_url}
                            className='round-img'
                            alt='Avatar'
                            style={{ width: '150px' }}
                        />
                        <h1>{ name }</h1>
                        <p>Location: { location }</p>
                    </div>
                    <div>
                        {
                            bio &&
                            <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>
                        }
                        <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
                        <ul>
                            <li>
                                {
                                login &&
                                <Fragment>
                                    Username: { login }
                                </Fragment>
                                }
                            </li>
                            <li>
                                {
                                    company &&
                                    <Fragment>
                                        Company: {company}
                                    </Fragment>
                                }
                            </li>
                            <li>
                                {
                                    blog &&
                                    <Fragment>
                                        Website: {blog}
                                    </Fragment>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='badge badge-primary'>Followers: {followers}</div>
                <div className='badge badge-primary'>Following: {following}</div>
                <div className='badge badge-primary'>Public Repos: {public_repos}</div>
                <div className='badge badge-primary'>Followers: {public_gists}</div>
                </div>    
            </Fragment>
        )
    }
}

export default User
