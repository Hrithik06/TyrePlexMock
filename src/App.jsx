import React from 'react';
import TestCard from './components/Cards/TestCard';
import {
    Header,
    Container,
    Seller,
    Footer,
    Services,
    BrandContainer,
    ProductContainer,
    Payment,
    Question,
} from './components/index';
export default function App() {
    return (
        <div className="font-roboto h-screen ">
            {/* <TestCard /> */}
            <Header />

            <Container className="my-4 space-y-4">
                <Seller />
                <Services />
                <BrandContainer />
                <ProductContainer />
                <Payment />
                <Question />
            </Container>
            <Footer />
        </div>
    );
}
