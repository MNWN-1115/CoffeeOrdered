import React, { Component } from 'react'
import ListViewItem from './ListViewItem';
// import fakeData from '../Dummydata/fakeData';
import NavBar from './NavBar';
import request from '../Helpers/request';

class ListView extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentOrders: [],
            pageNumber: 1,
            pageLimits: [1,1]
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    componentDidMount() {
        
    }

    handleButtonClick(direction) {
        if(this.state.pageNumber === 1 && direction === -1) {
        } else {
            this.setState({ 
                pageNumber: this.state.pageNumber + direction
            })
        }
    }

    render () {

        var currentItems = this.state.currentOrders.slice(15 * (this.state.pageNumber - 1),  15 * this.state.pageNumber);
        console.log(currentItems);
        return (
            <div>
                <div>{currentItems.map(item => <ListViewItem item={item} />)}</div>
                <NavBar item={this.state.pageNumber} handleClick={this.handleButtonClick}/>
            </div>
        ) 
    }
}

export default ListView;
