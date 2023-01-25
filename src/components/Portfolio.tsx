import proyects from '../data/proyects';

export const Portfolio = () => {
    return (
        <main id="portfolio" className="portfolio">
            <div className="portfolio__container container">
                <div className="portfolio__texts">
                    <h2 className="portfolio__title underline-degradated">Portafolio</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quos
                        libero fugiat quae a repudiandae odio dolore nam incidunt aut dolores
                        laudantium eius quidem, tenetur sed possimus distinctio officia ut.
                    </p>
                </div>

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
            </div>
        </main>
    );
};
