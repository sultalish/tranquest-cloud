import React from 'react'
import "./DashBoard.css"
import Tasks from "./Tasks"

const DashBoard = () => {
    return (
        <div>
            <div class="header">
                <h1>
                    Tranquest Cloud
                </h1>
                <div className="info">
                    Our mission is to connect people and try to improve your live.
                    <br />
                    We have a task manager that will let you set the goals for the upcoming future and track your progress based on the 'HP' bar.
                    <br />
                    Don't forget to check out our Global Chat feature where you can share thoughts or get motivation from other users of the app!
                </div>
            </div>
            <div class="row">
                <div class="side">
                    Tasks
                    <div>
                    </div>
                </div>
                {/* <div class="main">...</div> */}
            </div>
        </div>
    )
}
export default DashBoard;