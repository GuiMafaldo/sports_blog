import { Link } from "react-router-dom"
import { ContentPageHeader, HeaderPageContent } from "./styles"

const HeaderPage = () =>{
    return(
            <ContentPageHeader>
                <div className="banner-content">
                    <img src="/image/banner.png" alt="banner blog" />
                </div>
                    <HeaderPageContent>
                        <h2>Pagina inicial</h2>
                        <ul>
                            <li>HOME</li>
                            <Link className="redirect" to='futebol'><li>futebol</li></Link>
                            <li>BASKETBALL</li>
                            <li>FUTEBOL AMERICANO</li>
                            <li>BASEBALL</li>
                            <li>ACESSAR AREA DE MEMBROS</li>
                        </ul>
                    </HeaderPageContent>
            </ContentPageHeader>
    )
}

export default HeaderPage