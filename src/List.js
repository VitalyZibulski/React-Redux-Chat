import React from 'react';

const data = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
];

const List = () => (
    <ul>
        {data.map((item,index) =>(
            <li key={index}>{item}</li>
        ))}
    </ul>
)

export default List;