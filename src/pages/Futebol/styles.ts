import styled from "styled-components";
import { HeaderPageContent } from "../../components/Header/styles";

export const ContainerGeralPage = styled.div`
    width: 90vw;
    margin: 0 auto;
    background-color: #e9e9e9;
`
export const CabecalhoFutebol = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90vw;
    margin: 0 auto;
    

    & ${HeaderPageContent} {
        display: none;
    }

    & .menu-list{
        background-color: #102DC8;
        width: 100%;
        height: 40px;
        margin-top: -10px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & .title{
            margin: 0 auto;
            margin-right: 36%;
            color: #fff;
            font-weight: 700;
            font-family: Helvetica;
        }

        & .back-menu{
            margin-right: 26px;
            font-weight: 700;
            font-family: Helvetica;
            display: flex;
            align-items: center;
            cursor: pointer;

            & .back{
                color: #fff;
                text-decoration: none; 
            }


            > img {
                width: 16px;
                height: 16px;
                margin-left: 10px;
                margin-top: 1px;
            }
        }

}

@media(max-width: 767px){
    width: 100vw;


    & .menu-list{
    
        & .title {
            margin: 0 auto;
            margin-right: 9%;
        }
    }
}
@media(min-width: 767px) and (max-width: 1024px){
    width: 100vw;


    & .menu-list{
    <div>
                    <img src="https://via.placeholder.com/200x200" alt="" />
                    <h3>titulo noticia</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        In, eius atque ipsa eos rerum ex dicta veniam est? Consequuntur ipsam 
                        et laborum quisquam eius magnam amet quidem perspiciatis! Dolores, 
                        harum!
                    </p>
                    <a href="#">Link materia completa</a>
                </div>
}

`
export const ContainerNoticiasFutebol = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100vw;
    margin: 0 auto;
    padding-bottom: 60px;
`
export const ContentNoticias = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 700px;
    gap: 30px;
    margin-top: 80px;
    margin-right: 200px;


    & .cards-noticias{
        background-color: #e1e1e1;
        border-radius: 8px;
        margin: 0;
        box-shadow: 1px 0px 1px 0px;
        padding: 4px;
        padding-bottom: 14px;

        > h3 {
            font-weight: 700;
            font-family: Helvetica;
            color: blue;
            margin-left: 10px; 
        }

        > p {
            font-weight: 500;
            font-family: Helvetica;
            margin-left: 6px; 
        } 

        > a {
            text-decoration: none;
            font-weight: 500;
            font-family: Helvetica;
            margin-left: 6px; 
        }


        > img {
            width: 320px;
            height: 220px; 
        }
    }
`
export const AsideBarNoticias = styled.div`
    background-color: #e3e3e3;
    width: 220px;
    margin-top: 80px;
    margin-left: -120px;
`