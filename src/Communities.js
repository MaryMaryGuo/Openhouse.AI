import React, { Component } from 'react';
import CommunityDetails from './CommunityDetails.js';

export default class Communities extends Component {

    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            posts: []
        }
    }

    //called the first time the component loads
    //community list json file
    componentDidMount() {
        fetch("https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities")
            .then(response => response.json())
            .then(
                // handle the result
                (result) => {
                    this.setState({
                        isLoaded: true,
                        posts: result
                    });
                },
                // Handle error 
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                },
            )

    }

   
    render() {
        const { error, isLoaded, posts } = this.state;
        if (error) {
            return <div>Error in loading</div>
        } else if (!isLoaded) {
            return <div>Loading ...</div>
        } else {

            return(
                <div>
                    <ol className="item">
                    {
                        posts.map(post => (
                            <li key={post.id} align="start">
                                <div>
                                    <p className="title">{post.name}</p>
                                    <p className="body"><img src={post.imgUrl} /></p>
                                    <p className="body">{post.group}</p>
                                    {/* call house detail and get community house average price*/}
                                    {/* <CommunityDetails /> */}
                                    <CommunityDetails myid={post.id} />
                                </div>
                            </li>
                        ))
                    }
                    </ol>
                </div>
            );
        }
    }

}