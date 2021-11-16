import React from 'react';

class LikeButton extends React.Component {
  state = {
    counter: 0,
    backgroundColor: 'pink',
  };
  clickHandler = () => {
    const colorList = [
      'purple',
      'blue',
      'green',
      'yellow',
      'orange',
      'red',
      'pink',
    ];
    const newColor = colorList[Math.floor(Math.random() * colorList.length)];

    this.setState((state) => ({
      counter: state.counter + 1,
      backgroundColor: newColor,
    }));
  };

  render() {
    return (
      <button
        onClick={this.clickHandler}
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        {this.state.counter} Likes
      </button>
    );
  }
}

export default LikeButton;
