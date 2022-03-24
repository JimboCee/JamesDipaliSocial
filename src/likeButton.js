import React from 'react'

class likeButton extends React.Component {
    
    state = {
        likes: 0
    };
    
    render () {
        return <button onClick={this.state.likes}>Likes: {this.state.likes}</button>
    }

    addLike = () => {
        let newCount = this.state.likes +1;
        this.setState({
            likes: newCount
        });
    };
}
export default likeButton