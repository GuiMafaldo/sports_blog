import { Link } from "react-router-dom"
import HeaderPage from "../../components/Header"
import { AsideBarNoticias, CabecalhoFutebol, ContainerGeralPage, ContainerNoticiasFutebol, ContentNoticias } from "./styles"
import FooterPage from "../../components/Footer"

const PageFutebol = () => {
    return(
        <ContainerGeralPage>
            <CabecalhoFutebol>
                <HeaderPage />
                <div className="menu-list">
                    <span className="title">FUTEBOL PELO MUNDO</span>
                    <span className="back-menu"><Link className="back" to='/'>Voltar</Link>
                        <img src="/image/return.png" 
                        alt="back to menu" />
                    </span>
                </div>
            </CabecalhoFutebol>
            <ContainerNoticiasFutebol>
                <AsideBarNoticias>
                    <div>
                        <img src="https://via.placeholder.com/100x70" alt="" />
                        <p>assunto materia</p>
                        <a href="#">link da materia</a>
                    </div>
                    <hr />
                    <div>
                        <img src="https://via.placeholder.com/100x70" alt="" />
                        <p>assunto materia</p>
                        <a href="#">link da materia</a>
                    </div>
                    <hr />
                    <div>
                        <img src="https://via.placeholder.com/100x70" alt="" />
                        <p>assunto materia</p>
                        <a href="#">link da materia</a>
                    </div>
                    <hr />
                    <div>
                        <img src="https://via.placeholder.com/100x70" alt="" />
                        <p>assunto materia</p>
                        <a href="#">link da materia</a>
                    </div>
                    <hr />
                    <div>
                        <img src="https://via.placeholder.com/100x70" alt="" />
                        <p>assunto materia</p>
                        <a href="#">link da materia</a>
                    </div>
                    <hr />
                </AsideBarNoticias>
                <ContentNoticias>
                    <div className="cards-noticias">
                        <img src="https://via.placeholder.com/200x200" alt="" />
                        <h3>Titulo noticia</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            In, eius atque ipsa eos rerum ex dicta veniam est? Consequuntur ipsam 
                            et laborum quisquam eius magnam amet quidem perspiciatis! Dolores, 
                            harum!
                        </p>
                        <a href="#">Link materia completa</a>
                    </div>
                    <div className="cards-noticias">
                        <img src="https://via.placeholder.com/200x200" alt="" />
                        <h3>Titulo noticia</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            In, eius atque ipsa eos rerum ex dicta veniam est? Consequuntur ipsam 
                            et laborum quisquam eius magnam amet quidem perspiciatis! Dolores, 
                            harum!
                        </p>
                        <a href="#">Link materia completa</a>
                    </div>
                    <div className="cards-noticias">
                        <img src="https://via.placeholder.com/200x200" alt="" />
                        <h3>Titulo noticia</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            In, eius atque ipsa eos rerum ex dicta veniam est? Consequuntur ipsam 
                            et laborum quisquam eius magnam amet quidem perspiciatis! Dolores, 
                            harum!
                        </p>
                        <a href="#">Link materia completa</a>
                    </div>
                    <div className="cards-noticias">
                        <img src="https://via.placeholder.com/200x200" alt="" />
                        <h3>Titulo noticia</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            In, eius atque ipsa eos rerum ex dicta veniam est? Consequuntur ipsam 
                            et laborum quisquam eius magnam amet quidem perspiciatis! Dolores, 
                            harum!
                        </p>
                        <a href="#">Link materia completa</a>
                    </div>
                </ContentNoticias>
            </ContainerNoticiasFutebol>
            <FooterPage />
        </ContainerGeralPage>
    )
}

export default PageFutebol