import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';

const Home = () => {
  const articles = [
    { id: 1, title: 'Berita Terkini 1', content: 'Isi artikel berita pertama...' },
    { id: 2, title: 'Berita Terkini 2', content: 'Isi artikel berita kedua...' },
    { id: 3, title: 'Berita Terkini 3', content: 'Isi artikel berita ketiga...' },
    { id: 4, title: 'Berita Terkini 3', content: 'Isi artikel berita keempat...' },
  ];

  return (
    <div className="container mt-4">
      <h1>Berita Terkini</h1>
      <Row>
        {articles.map((article) => (
          <Col key={article.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.content.slice(0, 100)}...</Card.Text>
                <Button as={Link} to={`/article/${article.id}`} variant="primary">Baca Selengkapnya</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
