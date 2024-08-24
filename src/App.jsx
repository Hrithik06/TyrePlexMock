import React from 'react';
import {
    Header,
    Container,
    Seller,
    Footer,
    Services,
    BrandContainer,
    Payment,
    Question,
} from './components/index';
export default function App() {
    return (
        <div className="font-roboto h-screen">
            <Header />

            <Container className="my-4 space-y-4">
                <Seller />
                <Services />
                <BrandContainer />
                <Payment />
                <Question />
            </Container>
            <Footer />
        </div>
    );
}
