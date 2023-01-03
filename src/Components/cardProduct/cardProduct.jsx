import React, {Component} from 'react';
import './CardPage.css';

class CardPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            imageContent: 'food_order10.png',
            titleHeader: 'Udang Saous Padang',
        }
    }

    componentDidMaount(){
       fetch('https://jsonplaceholder.typicode.com')
    }



    render(){
        return(
            <div>
                <div className="product-card-content">
                    <div className="product-card">
                        <div className="product-ratings">
                            <p className="ratings">
                                6.8
                            </p>
                        </div>
                        <img src={this.state.imageContent} alt=""></img>
                        <div className="product-desc-header">
                            <p className="header-product-content">
                               {this.state.titleHeader}
                            </p>
                        </div>
                        <div className="product-desc-content">
                            <p className="content-header">
                            Udang Saos Padang ini Berasal Dari Daerah<br></br>
                            Sumatra Barat Yang Sangat di Gemari Oleh<br></br>
                            Penduduk Disana Karena Terbuat Dari Bahan <br></br>
                            Yang Berkualitas Baik
                            </p>
                        </div>
                        <div className="product-desc-price">
                            <p className="price-food">
                                Rp.15.000.00,-
                            </p>
                        </div>
                        <div className="product-button">
                            <button className="button-product" type="button" name="button">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardPage;