import React, { Component } from 'react';

export default class CommunityDetails extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            error: null,
            isLoaded: false,
            posts: []
        }
    }
    
    //called the first time the component loads
    //get house list by community id
    componentDidMount() {
        const total = 0;
        fetch("https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes/?myid=${communityId}")

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
            return (<div>{posts.map(post => (<div>${post.price}</div>))}</div>);
        }
    }
}

