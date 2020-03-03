import React, { Component } from 'react'
import logo from './logo.png'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


export default class Header extends Component {
    render() {
        return (
            <div>
                <img src={logo}></img>
                <h4>Search for Your Favourite Movie!</h4>
                <Button variant="contained" size="large" color="primary" >
                   Go for it!
        </Button>
            </div>
        )
    }
}
