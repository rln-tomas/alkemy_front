import styled from 'styled-components'

export const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(255,255,255, .8);
    max-width: 360px;
    width: 300px;
    max-height: 500px;
    margin-top: 20px;   
    height: 400px;
    border: 2px black solid;
    border-radius: 10px;
`

export const ContainerLogin = styled.div`
    max-width: 360px;
    display: flex;
    justify-content: center;
    max-height: 640px;
    height: 100vh;
    width: 100vw;

    @media screen and (min-width:361px){
        max-width: 100vw;
    }
`

export const Img = styled.img`
    width: 100px;
`
