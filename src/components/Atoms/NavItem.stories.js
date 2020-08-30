import React from 'react';
import NavItem from './NavItem';
import {Router} from 'react-router-dom'


export default  { 
    title:'NavItem',
    component:NavItem
};


export const Primary = () => <Router><NavItem  /></Router> ;