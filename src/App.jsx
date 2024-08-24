import React from "react";
import {
  Header,
  BrandCard,
  Services,
  ReviewCard,
  ProductCard,
  Container,
} from "./components/index";
export default function App() {
  return (
    <div className=" font-roboto ">
      <Header />
      <Container>
        <ReviewCard />
        <BrandCard />
        <Services />
        <ProductCard />
      </Container>
    </div>
  );
}
