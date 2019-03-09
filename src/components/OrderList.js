import React from 'react';
import ListView from './ListView';

const OrderList = () => {
    return (
        <div class="orderList">
            <h3>ORDERS</h3>
            <div class="ListHeader">
                <p>Coffee</p>
                <p>Method</p>
                <p># of Cases</p>
                <p>Packets per Case</p>
                <p>Ship Date</p>
                <p>star</p>
                <p>Order</p>
            </div>
            <ListView />
        </div>
    );
}

export default OrderList;
