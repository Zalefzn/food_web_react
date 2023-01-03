import React,{Component} from 'react';
import CardPage from '../../cardProduct/cardProduct';
import './ProductPage.css';

class ProductPage extends Component{
    render(){
        return(
            <div>
                <div className="container-product">
                    <div className="card-product">
                        <CardPage />
                    </div>
                    <div className="product-content-desc">
                    This is Our Best Food Product<br></br>
                    We Always Serve it With the<br></br>
                    Best Quality
                    </div>
                    <div className="button-text">
                        <button className="button-text-data" type="button" name="button">More Info</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductPage;