import styled from "styled-components";

export const ContentPageHeader = styled.header`
    width: 100vw;
    text-align: center;

    & .banner-content{

        img{
            width: 90vw;
        }
    }
        @media(max-width: 767px){

            & .banner-content{

            img{
                width: 100vw;
            }
        }
            
    }

    @media(max-width: 1024px){

            & .banner-content{

            img{
                width: 100vw;
            }
        }
            
    }
`

export const HeaderPageContent = styled.div`
    background-color: #102DC8;
    width: 90vw;
    height: 40px;
    margin: 0 auto;
    margin-top: -5px;
    display: flex;
    align-items: center;

    > h2 {
        display: none; 
    }

    ul{
        display: flex;
        justify-content: space-between;
        width: 80vw;
        margin: 0 auto;

        li{
            color: #fff;
            list-style: none;
            font-family: Helvetica;
            font-weight: 600;
            cursor: pointer;
        }

        & .redirect {
            text-decoration: none;
            text-transform: uppercase;
        }
    }

    @media(max-width: 767px){
        width: 100vw;
        
        > h2 {
            margin:  0 auto;
            color: #fff;
            font-family: Helvetica;
            display: flex; 
        }
        ul{
            display: none;
        }
    }

    @media(max-width: 1024px){
        width: 100vw;
        
        
        ul{
            width: 100vw;

            li{
                font-size: 12px;
                margin: 0 auto;
                margin-left: -7px;
            }
        }
        
    }

`