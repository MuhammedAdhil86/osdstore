

import Bigcards from "../components/cards/bigcard"
import New_arrivals_card from "../components/cards/new_arrivals_card";
import Adidas_card from "../components/cards/adidas_cards";

import Footer from "../components/footer/footer"

const Home = () => {
    return (
        <div className="overflow-x-hidden">
    
         
           <Bigcards/>
           <Adidas_card/>
           <Footer/>
          
        </div>
    );
};

export default Home;
