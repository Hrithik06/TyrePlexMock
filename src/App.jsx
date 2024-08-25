import React from 'react';
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
    BreadCrumbs,
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
                <BreadCrumbs />
                <Payment />
                <Question />
            </Container>
            <Footer />
        </div>
    );
}
