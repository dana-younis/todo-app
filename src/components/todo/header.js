import React from 'react';
function Header(props) {
    return(
        <header>
            <h1>To Do List:{props.incomplete} item pending</h1>
        </header>
    )
}
export default Header;