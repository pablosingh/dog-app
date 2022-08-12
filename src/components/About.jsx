import styled from 'styled-components';

export const About = () => {
    return (
    <Container>
      <div className={'card'}>
        <h2>
            Hola! soy Pablo Singh me gusta mucho programar, estudié 2 años 
            Ing. Electrónica, entre otras cosas. Este es el proyecto individual
            de Perros para Soy Henry. Gracias!
        </h2>
      </div>
    </Container>
    )
};

const Container = styled.div`
    width: 100%;
    min-height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .card{
        width: 40%;
        border-radius: 1em;
        padding: 2em;
        margin: 1em 0em 0 0;
        background-color: rgba(241,192,201,0.9);
    }
`;