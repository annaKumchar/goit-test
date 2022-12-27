import React, { Component } from 'react';
import { CardSection, CardWrap } from './Header/Header.styled';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Statistics } from './Statistics/Statistics';
import { CardButton, CardButtonUnfollow } from './Button/Button.styled';

export class App extends Component {
  state = {
    followers: 100500,
    isFollowing: false,
  };

  componentDidMount() {
    const followers = localStorage.getItem('followers');
    const parsedFollowers = JSON.parse(followers);
    if (parsedFollowers) {
      this.setState({ followers: parsedFollowers });
    }
    const isFollowing = localStorage.getItem('isFollowing');
    const parsedIsFollowing = JSON.parse(isFollowing);
    if (parsedIsFollowing) {
      this.setState({ isFollowing: parsedIsFollowing });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.followers !== prevState.followers) {
      localStorage.setItem('followers', JSON.stringify(this.state.followers));
    }

    if (this.state.isFollowing !== prevState.isFollowing) {
      localStorage.setItem(
        'isFollowing',
        JSON.stringify(this.state.isFollowing)
      );
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      followers: prevState.isFollowing
        ? prevState.followers - 1
        : prevState.followers + 1,
      isFollowing: !prevState.isFollowing,
    }));
  };

  render() {
    const { followers, isFollowing } = this.state;
    return (
      <CardWrap>
        <CardSection>
          <Header />
          <Hero />
          <Statistics followers={followers} />
          {!isFollowing ? (
            <CardButton type="button" onClick={this.handleClick}>
              Follow
            </CardButton>
          ) : (
            <CardButtonUnfollow type="button" onClick={this.handleClick}>
              Following
            </CardButtonUnfollow>
          )}
        </CardSection>
      </CardWrap>
    );
  }
}
