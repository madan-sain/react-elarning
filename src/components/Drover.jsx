import React, { useState } from 'react'
import { NavLink } from "react-router-dom"

import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton, } from '@mui/material'
function Drover() {
    const [openDrover, setopenDrover] = useState(false);

    return (
        <div >
            <React.Fragment>|
                <Drawer open={openDrover} onClose={() => setopenDrover(false)}>
                    <List>
                        <ListItemButton onClick={() => setopenDrover(false)}>
                            <ListItemIcon>
                                <ListItemText>
                                    <ul className='drover'>
                                        <li> <img src='https://utkarsh.com/assets/images/logo.svg' class="logo" /></li>
                                        <NavLink to="/HOME">           <li>HOME</li>  </NavLink>
                                        <NavLink to="/About">             <li>ABOUT US</li></NavLink>


                                        <li>google</li>
                                        <li>google</li>
                                        <li>google</li>
                                        <li>google</li>
                                    </ul>

                                </ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    </List>
                </Drawer>

                <IconButton sx={{ color: 'white', right: '2px', top: "3px", position: "absolute" }} onClick={() => setopenDrover(!openDrover)}>
                  
                  <h1 className='bars'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></h1>
                </IconButton>

            </React.Fragment>


        </div>

    )
}

export default Drover