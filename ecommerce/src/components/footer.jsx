

import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Container className="flex-fill">
        {/* Main content goes here */}
        <h1>Main Content</h1>
      </Container>
      <footer className="mt-auto bg-info text-center">
        <div className="p-3">
          © 2024 Your Company
        </div>
      </footer>
    </div>
  );
}

export default Footer;
