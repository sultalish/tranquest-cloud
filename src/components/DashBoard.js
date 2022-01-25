import React, { useEffect, useState } from 'react';
import { auth, db } from '../service/firebase';
import "./DashBoard.css";
import Tasks from "./Tasks";
import axios from "axios";

const DashBoard = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    // random quote api
    const quoteAPI = async () => {
        let arrayOfQuotes = [];
        try {
            const data = await axios.get("https://api.quotable.io/random")
            arrayOfQuotes = data.data;
        } catch (error) {
            console.log(error);
        }

        try {
            setQuote(arrayOfQuotes.content)
            setAuthor(arrayOfQuotes.author)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        quoteAPI();
    }, []);

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
            <div className="row">
                <div className="info">
                    <div className="quote">
                        <h1 className="quote-header">
                            Quote of the day:
                        </h1>
                        <a className="quote-body">
                            "{quote}"
                            <br />
                            <br />
                            -{author}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DashBoard;