import React from 'react'

const Hello = () =>{

    return React.createElement(
        'div',
        {id:'hello', className:'dummyClass'},
        React.createElement('h1',null,'Hello Iftekhar')
    )
}

export default Hello