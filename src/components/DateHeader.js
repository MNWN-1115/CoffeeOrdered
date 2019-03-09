import React from 'react'
import moment from 'moment'

const DateHeader = () => {
    return (
        <div class='date'>
            <p>{moment().format('MMM')}</p>
            <p>{moment().format("Do")}</p>
        </div>
    )
}

export default DateHeader;
