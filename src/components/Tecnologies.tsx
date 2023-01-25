import React from 'react';

import {
    logoBootstrap,
    logoCss,
    logoExpress,
    logoHtml,
    logoJavascript,
    logoMongoDB,
    logoNodeJs,
    logoReact,
} from '../assets/logos';

export const Tecnologies = () => {
    return (
        <section id="tecnologies" className="tecnologies">
            <div className="tecnologies__container container">
                <div className="tecnologies__texts">
                    <h2 className="tecnologies__title underline-degradated">Tecnologías</h2>
                </div>
                <div className="tecnologies__items">
                    <div className="tecnologies__item">
                        <img src={logoHtml} alt="" />
                    </div>
                    <div className="tecnologies__item">
                        <img src={logoCss} alt="" />
                    </div>
                    <div className="tecnologies__item">
                        <img src={logoJavascript} alt="" />
                    </div>
                </div>
                <div className="tecnologies__items">
                    <div className="tecnologies__item">
                        <img src={logoMongoDB} alt="" />
                    </div>
                    <div className="tecnologies__item">
                        <img src={logoExpress} alt="" />
                    </div>
                    <div className="tecnologies__item">
                        <img src={logoReact} alt="" />
                    </div>
                    <div className="tecnologies__item">
                        <img src={logoNodeJs} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};
