import { perfil } from '../assets';
import { useState } from 'react';

export const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header id="header" className="header">
                <nav className="navbar">
                    <div className="navbar__container container">
                        <a href="#" className="header__logo">
                            <h3 className="logo">
                                <span>Alvaro</span>HJ
                            </h3>
                        </a>

                        <div className="navbar__links">
                            <a href="#header">Home</a>
                            <a href="#portfolio">Portafolio</a>
                            <a href="#tecnologies">Tecnologías</a>
                            <a className="btn-icon">
                                <i className="fa-solid fa-moon"></i>
                            </a>
                        </div>
                        <a id="btn-menu" className="btn-icon" onClick={(e) => setOpen(!open)}>
                            <i className="fa-solid fa-bars"></i>
                        </a>
                    </div>
                </nav>
                <div className="header__container container">
                    <div className="header__content">
                        <div className="header__texts">
                            <h1 className="header__title degradado-verde animate__animated animate__fadeInDown">
                                Alvaro Huaysara
                            </h1>
                            <h2 className="header__subtitle">Frontend Developer</h2>
                            <p className="header__description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
                                alias veritatis minus saepe,
                            </p>
                        </div>
                        <div className="header__links">
                            <a
                                href="https://twitter.com/AlvaroHJ21"
                                className="btn-icon"
                                target={'_blank'}
                            >
                                <i className="fa-brands fa-square-twitter"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/alvaro-huaysara-jauregui-397537223/"
                                className="btn-icon"
                                target={'_blank'}
                            >
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UCDZdX0MdyFi4EgtOiQ_knWQ"
                                className="btn-icon"
                                target={'_blank'}
                            >
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                            <a
                                href="https://github.com/AlvaroHJ21"
                                className="btn-icon"
                                target={'_blank'}
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>

                    <div className="header__perfil">
                        <img src={perfil} alt="" />
                    </div>
                </div>
            </header>
            <div className={`drop-down${open ? ' open' : ''}`}>
                <a onClick={() => setOpen(false)} href="#header">
                    Home
                </a>
                <a onClick={() => setOpen(false)} href="#portfolio">
                    Portafolio
                </a>
                <a onClick={() => setOpen(false)} href="#tecnologies">
                    Tecnologías
                </a>
                <a className="btn-icon">
                    <i className="fa-solid fa-moon"></i>
                </a>
            </div>
        </>
    );
};
