import { BackgroundFooter, ContentFooter } from "./styles"

const FooterPage = () => {
    return(
        <BackgroundFooter>
            <ContentFooter>
                <p>&copy; Todos os direitos reservados Jul - 2024</p>
                <span>Desenvolvido por Guilherme</span>
            </ContentFooter>
            <div>
                <a href="https://github.com/GuiMafaldo" target="_blank" rel="noreferrer"><img src="/image/logogit1.svg" alt="Logo github" /></a>
                <a href="https://www.linkedin.com/in/guimafaldo/" target="_blank" rel="noreferrer"><img src="/image/link.svg" alt="Logo linkedin" /></a>
                <a href="https://www.instagram.com/mafaldo.gui/" target="_blank" rel="noreferrer"><img src="/image/insta.svg" alt="Logo instagram" /></a>
            </div>
        </BackgroundFooter>
    )
}

export default FooterPage