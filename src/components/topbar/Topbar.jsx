import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="tobpbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">sbmadmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBagde">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBagde">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img src="https://images.pexels.com/photos/2010812/pexels-photo-2010812.jpeg?cs=srgb&dl=pexels-konstantin-mishchenko-2010812.jpg&fm=jpg" alt="" className="topAvatar"/>
                </div>
            </div>
        </div>
    )
}
