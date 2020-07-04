import React, { FC } from 'react';

import './Successes.scss';
import { SuccessesProps } from './Successes.types';

const Successes: FC<SuccessesProps> = (props): JSX.Element => {
    const {
        hoursOfHacking,
        numberOfAttendees,
        projectsSubmitted,
        numberOfPrizes,
        numberOfWorkshops,
        numberOfSponsors,
        iteration,
    } = props;

    return (
        <section className="SUCCESS">
            <div className="font-black hackathons-title">
                HackMerced {iteration}<br />
            </div>
            <div className="wrapper clearfix center">
                <div className="card ">
                    <h1>{hoursOfHacking}</h1>
                    <h2>hours of hacking</h2>
                </div>
                <div className="card card2">
                    <h1>{numberOfAttendees}+</h1>
                    <h2>attendees</h2>
                </div>
                <div className="card card3">
                    <h1>{projectsSubmitted}</h1>
                    <h2>projects submitted</h2>
                </div>
            </div>
            <div className="wrapper clearfix center">
                <div className="card card4">
                    <h1>{numberOfPrizes}k+</h1>
                    <h2>amount of prizes</h2>
                </div>
                <div className="card card5">
                    <h1>{numberOfWorkshops}</h1>
                    <h2>workshops</h2>
                </div>
                <div className="card card6">
                    <h1>{numberOfSponsors}</h1>
                    <h2>sponsors</h2>
                </div>
            </div>
        </section>
    );
};

export default Successes;