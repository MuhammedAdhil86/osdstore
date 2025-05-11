

import Bigcards from "../components/cards/bigcard"
import ProductList from "../components/cards/adidas_cards"


import Footer from "../components/footer/footer"

const Home = () => {
    return (
        <div className="overflow-x-hidden">
    
         
           <Bigcards/>
           <ProductList/>
           <Footer/>
          
        </div>
    );
};

export default Home;
