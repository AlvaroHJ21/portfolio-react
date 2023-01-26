import React from 'react';
import proyects from '../data/proyects';

export const HTMLCSSJavascriptView = () => {
    return (
        <div className="portfolio__cards">
            {proyects.map((item, i) => (
                <div key={i} className="card">
                    <div className="card__img">
                        <img src={item.images[0]} alt="" />
                    </div>
                    <div className="card__body">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <a className="card__link btn" href={item.url} target={'_blank'}>
                            Más detalles
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};
