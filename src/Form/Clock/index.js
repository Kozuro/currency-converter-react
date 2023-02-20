import { useState, useEffect } from "react";
import "./style.css";

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    const refreshClock = () => {
        setDate(new Date());
    };

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return (

        <div className="clock">
            <span>
                Dzisiaj jest {date.toLocaleDateString("pl", { weekday: "long", day: "numeric", month: "long" })}, {date.toLocaleTimeString("pl")}
            </span>
        </div>
    );
};