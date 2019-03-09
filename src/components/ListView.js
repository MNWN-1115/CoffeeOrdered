import React, { Component } from 'react'
import ListViewItem from './ListViewItem';
import fakeData from '../Dummydata/fakeData';

class ListView extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentOrders: fakeData
        }
    }

    render () {
        return (
            <div>{this.state.currentOrders.map(item => <ListViewItem item={item} />)}</div>
        ) 
    }
}

export default ListView;
