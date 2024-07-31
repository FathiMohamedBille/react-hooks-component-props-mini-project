import React from 'react';
 //Remove the line if Header.css does not exist 
 //import
  './Header.css'; 
const Header = (props) => { 
return (
 <header className="header"> <h1>{props.name}</h1> </header> 
);
 };
 export default Header;
