import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomeIntro() {
  return (
    <>
    <section className="big-green-section" aria-label="Introduction">
      <div className="container-auto">
        <div className="grid-item">
          <h1 className="karla-400 lemon-yellow">LITTLE LEMON</h1>
          <h2 className="karla-300 white">Chicago</h2>
          <p className="karla-400 white">
            we are a family owned Mediterranean restaurant, 
            focused on traditional recipes with a modern twist.
          </p>
          <p>
            <Link to="/reservation">
              <Button variant="warning" aria-label="Reserve a table at Little Lemon">
                Reserve a Table
              </Button>
            </Link>
          </p>
        </div>
        <div class="grid-item lightGrey">
          <div 
            class="Tray_of_Fancy_Sushi" 
            role="img" 
            aria-label="Tray of Fancy Sushi">
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
export default HomeIntro;
