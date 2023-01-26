import proyects from '../data/proyects';
import { TabProyects } from './TabProyects';

export const Proyects = () => {
    return (
        <main id="portfolio" className="portfolio">
            <div className="portfolio__container container">
                <div className="portfolio__texts">
                    <h2 className="portfolio__title underline-degradated">Proyectos</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quos
                        libero fugiat quae a repudiandae odio dolore nam incidunt aut dolores
                        laudantium eius quidem, tenetur sed possimus distinctio officia ut.
                    </p>
                </div>
                <TabProyects/>
            </div>
        </main>
    );
};
