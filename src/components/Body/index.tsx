import { BodyContent, CardContent, SectionContent } from "./styles"

const ContentBody = () => {
    return(
        <BodyContent>
            <div className="carousel-content">
                <h2>Principais noticias</h2>
                <div>
                    <img src="https://via.placeholder.com/1440x400" alt="" />
                </div>
            </div>
            <SectionContent>
                <CardContent>
                    <div className="content-card">
                        <img src="https://via.placeholder.com/100x100" alt="" />
                        <h3>Title here</h3>
                        <p>aqui vai o texto sobre a materia 
                            aqui vai o texto sobre a materia 
                            aqui vai o texto sobre a materia 
                            aqui vai o texto sobre a materia 
                        </p>
                    </div>
                </CardContent>
                <CardContent>
                    <div className="content-card">
                        <img src="https://via.placeholder.com/100x100" alt="" />
                        <h3>Title here</h3>
                        <p>aqui vai o texto sobre a materia 
                            aqui vai o texto sobre a materia 
                            aqui vai o texto sobre a materia 
                            aqui vai o texto sobre a materia 
                        </p>
                    </div>
                </CardContent>
                <CardContent>
                    <div className="content-card">
                        <img src="https://via.placeholder.com/100x100" alt="" />
                        <h3>Title here</h3>
                        <p>aqui vai o texto sobre a materia 
                            aqui vai o texto sobre a materia 
                            aqui vai o texto sobre a materia 
                            aqui vai o texto sobre a materia 
                        </p>
                    </div>
                </CardContent>
                <CardContent>
                    <div className="content-card">
                        <img src="https://via.placeholder.com/100x100" alt="" />
                        <h3>Title here</h3>
                        <p>aqui vai o texto sobre a materia 
                            aqui vai o texto sobre a materia 
                            aqui vai o texto sobre a materia 
                            aqui vai o texto sobre a materia 
                        </p>
                    </div>
                </CardContent>
            </SectionContent>

            <span>Ler mais materias
                <img src="/image/direita.png" alt="" />
            </span>
        </BodyContent>
    )
}

export default ContentBody