import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card({img, titulo, descricao}) {

    function adicionarCarrinho() {
        alert('Produto adicionado ao carrinho')
    }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
         {descricao}
        </Card.Text>
        <Button variant="primary" onClick={adicionarCarrinho}>Adicionar carrinho</Button>
      </Card.Body>
    </Card>
  );
}

export default Card;