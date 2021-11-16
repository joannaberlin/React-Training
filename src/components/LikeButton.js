import React from 'react'

LikeButton = () => {
    return (
        this.setState(state => ({
            liked: !state.liked
        }))
    )
}

render() {
    return (
        <button onClick={this.LikeButton}>Like</button>
    )
}
