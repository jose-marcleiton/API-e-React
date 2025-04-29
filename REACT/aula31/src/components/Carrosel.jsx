//faça a instalação do bootstrap e a instalação do react-bootstrap
// npm install react-bootstrap bootstrap

//link o cdn do bootstrap no index.html
//crie um componente chamado carrosel que vai renderizar 3 imagens diferentes
//utilize o componente carrrosel no app.jsx
import Carousel from 'react-bootstrap/Carousel';

function Carrosel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://blog.petfellice.com.br/wp-content/uploads/2019/12/caracteri%CC%81sticas-do-shih-tzu.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.portaldodog.com.br/wp-content/uploads/2023/07/Socializacao-do-Shih-Tzu-3.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://tudodebicho.vteximg.com.br/arquivos/shih-tzu.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrosel;