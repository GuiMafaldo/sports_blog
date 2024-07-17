import ContentBody from "../Body"
import FooterPage from "../Footer"
import HeaderPage from "../Header"
import { ContainerGeral } from "./styles"

const ContainerPages = () => {
    return(
        <ContainerGeral>
            <HeaderPage />
            <ContentBody />
            <FooterPage />
        </ContainerGeral>
    )
}

export default ContainerPages