import styled from "styled-components"

export const BackgroundFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin: 0 auto;
    width: 87vw;
    background-color: #102DC8;
    

    
    > div {
        
    a{
        img{
            width: 30px;
            margin-top: 10px;
            margin-left: 6px;
            }
        }
    }

    @media(max-width: 1024px){
            width: 100vw;
        }
    }
`
            
export const ContentFooter = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;


    > p, span {
        color: #fff; 
        font-weight: 700;
        font-family: Helvetica;
    }

`