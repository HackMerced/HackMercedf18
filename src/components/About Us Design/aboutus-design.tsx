import React, { FC } from 'react';

import useWindowDimensions from '../WindowDimensions/WindowDimensions';
import ABOUTICON from '../../assets/images/about-icon.png';
import './aboutus-design.scss';

const AboutUsDesign: FC = (): JSX.Element => {
    const { width } = useWindowDimensions();

    return (
        <section className="about-us-design">
            <div className="about-us-design__title">About DesignMerced</div>
            <section className="about-us-design__content">
                {width < 600 ? (
                    <img src={ABOUTICON} alt="About Icon" className="about-us-design__content__logo" />
                ) : null}
                <article className="about-us-design__content__description">
                    <div id="one__design__box" className="about-us-design__box"></div>
                    <div id="two__design__box" className="about-us-design__box"></div>
                    <p className="about-us-design__content__description__text">
                        DesignMerced is UC Merced’s first virtual designathon, hosted by HackMerced for creatives and
                        design individuals in high school and college from around the world. DesignMerced is a 24-hour
                        event that will enhance designer&apos;s and creator&apos;s innovative skills and showcase their
                        uniqueness of solving design with technology. ‍ <br></br>
                        <br></br>Students with all levels of design experience are encouraged to join us and discover
                        their potential as problem-solvers, innovators, and future designers. Look forward to a day of
                        workshops, activities, networking, games, and more!
                    </p>
                </article>
                {width > 600 ? (
                    <img src={ABOUTICON} alt="About Icon" className="about-us-design__content__logo" />
                ) : null}
            </section>
        </section>
    );
};

export default AboutUsDesign;