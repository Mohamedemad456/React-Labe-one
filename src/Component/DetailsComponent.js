import React from "react";
import { Container } from "react-bootstrap";
import Details from "./Details";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function DetailsComponent() {
  return (
    <Container fluid className="mb-5">
      <Details
        title="First Title"
        content="In the heart of the bustling city, amidst the clamor of daily life, lies a serene park where time seems to slow down. The lush greenery and vibrant flowers create a picturesque escape from the urban frenzy, offering a tranquil retreat for those seeking a moment of peace. Families gather for picnics on the sun-drenched lawns, while joggers and cyclists weave through the winding paths, their rhythmi"
      />
      <Details
        title="Second Title"
        content="movements blending seamlessly with the gentle rustle of leaves. The park's charming pond, with its serene waters and playful ducks, adds a touch of whimsy to the environment, inviting visitors to pause and reflect. As the sun sets, the park transforms into a canvas of warm hues, casting a golden glow over the landscape and creating a perfect backdrop for evening strolls and heartfelt conversations."
      />
    </Container>
  );
}

export default DetailsComponent;
