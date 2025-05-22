import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Row, Col } from 'react-bootstrap';


const ArticleDetail = () => {
  const { id } = useParams();
  
  // Simulasi pengambilan data artikel
  const article = {
    id: id,
    title: `Judul Artikel ${id}`,
    content: `Isi artikel lengkap untuk artikel ${id}... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non est vel ante volutpat euismod. Suspendisse potenti.`
  };

  return (
    <div className="container mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.content}</Card.Text>
          <Button variant="secondary" href="/">Kembali ke Berita</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ArticleDetail;
