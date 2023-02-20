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
                {date.toLocaleTimeString("pl", { weekday: "long", day: "numeric", month: "numeric", year: "numeric" })}
            </span>
        </div>
    );
};