import React from 'react';

const ListViewItem = (props) => {
    return (
        <div class="ListViewItem">
        <p>{props.item.Coffee}</p>
        <p>{props.item.Method}</p>
        <p>{props.item.Number_of_Cases}</p>
        <p>{props.item.Packets_per_Case}</p>
        <p>{props.item.Ship_date}</p>
        <p>{props.item.Star}</p>
        <p>{props.item.Order}</p>
        </div>
    )
}

export default ListViewItem;
