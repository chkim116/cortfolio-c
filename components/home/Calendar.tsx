import React from "react";
import ReactTooltip from "react-tooltip";
import GitHubCalendar from "react-github-calendar";

const Calendar = ({ userId }: { userId: string }) => {
    return (
        <GitHubCalendar
            username={userId}
            blockSize={10}
            blockMargin={4}
            // years={[2021]}
        >
            <ReactTooltip delayShow={50} html />
        </GitHubCalendar>
    );
};

export default Calendar;
