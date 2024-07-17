import styled from "styled-components";

export const BodyContent = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    width: 100vw;
    text-align: center;
    
    & .carousel-content{
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-top: 100px;

        > div{
                
            > img{
                width:  80vw; 
            } 
        }

        > h2 {
            font-family: Helvetica;
            font-size: 32px;
            margin-bottom: 100px;
        }

        @media(max-width: 767px){
            > div {
                > img {
                    width: 95vw;
                    height: 25vh; 
                } 
            }
        }
        @media(max-width: 1024px){
            > div {
                > img {
                    width: 90vw;
                    height: 25vh; 
                } 
            }
        }
    }
    span {
        margin: 0 auto;
        display: flex;
        gap: 6px;
        cursor: pointer;
        padding-bottom: 20px;

        @media(max-width: 767px){
            padding-bottom: 60px;

      }
        @media(max-width: 1024px){
            padding-bottom: 60px;
        }

      
`
export const SectionContent = styled.div`
    display: flex;
    justify-content: center;
    gap: 80px;
    width: 80vw;
    margin: 0 auto;
    margin-top: 160px;
    padding-bottom: 260px;

    @media(max-width: 767px){
        display: flex;
        flex-direction: column;
        width: 100vw;
        padding-bottom: 100px;
        align-items: center;
    }

    @media (min-width: 768px) and (max-width: 1024px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 0 auto;
        margin-top: 80px;
        padding-bottom: 100px;
    }

    
`

export const CardContent = styled.div`
    background-color: #e1e1e1;
    width: 20vw;
    
    

    & .content-card {
        display: flex;
        flex-direction: column;

         > h2{
             text-align: center; 
         }

         > p{
            text-align: left;
            padding: 8px;
            
            
            @media(max-width: 767px){
              font-size: 12px;
              margin: 0 auto;
              padding: 8px;
            }   
         }

        > img{
            width: 20w;
         }
    }

    @media(max-width: 767px){
        display: flex;
        flex-direction: column;
        width: 50vw;
        align-items: center;
    }
        @media(max-width: 1024px){
        display: flex;
        flex-direction: column;
        width: 35vw;
        align-items: center;
    }
`