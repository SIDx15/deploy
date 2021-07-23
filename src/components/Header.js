

import FastfoodIcon from '@material-ui/icons/Fastfood';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

const Header = (props) => {



    return (
        <div class="jumbotron">
            <div class="adjust">
                <h1 className="display-1">Food Recipe</h1>
                <i><FastfoodIcon className="svg_icons" /></i>
            </div>
            <div class="input">
                <input type="text" class="form-control" placeholder="Search your fav recipe..."
                value={props.s}
                onChange={props.onInputchange}
                />
                    <span class="input-group-text" onClick={props.onsearch}><SearchIcon className="searchicon" /></span>
            </div>
        </div>
        )
}

export default Header
