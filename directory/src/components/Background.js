import React, { Component } from 'react';
import UserInfo from './UserInfo';

class Background extends Component {
	constructor() {
		super();

		this.state = {
			userId: 1,
		};
	}
	increase = () => {
		this.setState({ userId: this.state.userId + 1 });
	};

	decrease = () => {
		this.setState({ userId: this.state.userId - 1 });
	};

	render() {
		return (
			<div>
				<header id='home'>
					<h1>Home</h1>
				</header>
				<footer>
					<div className='mid'>
						<var UserInfo info={this.state.userId} />
					</div>
					<div>
						<button onClick={this.decrease}>previous</button>
						<button>edit</button>
						<button>delete</button>
						<button onClick={this.increase}>next</button>
					</div>
					<div className='box'>
						<box />
					</div>
				</footer>
			</div>
		);
	}
}

export default Background;
