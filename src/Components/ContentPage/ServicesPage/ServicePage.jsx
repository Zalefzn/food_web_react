import React, { Component, Fragment } from "react";
import "./ServicePage.css";
import axios from 'axios';

class ServicePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showContent: true,
        image: 'food_order5.png',
    };
  }

  componentDidMount(){
    console.info('ComponentDidMount');
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast').then(function(response){
      console.info(response);
    }).catch(function(error){
      console.info(error);
    });
    //  fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
    // .then(response =>  response.json())
    // .then(response => console.info(response));
  }

  render() {
    console.info('render time');
    return (
      <Fragment>
        <div>
          <div className="header-container-service">
            <div className="fill-content">
              <div className="header-fill">
                <h2 className="header-h2">{this.props.header_content_vol1}</h2>
              </div>
              <div className="sub-header-fill">
                <p>
                  We Make This Food With<br></br>a Time That is so Fast and
                  <br></br>
                  Precise
                </p>
              </div>
            </div>
            {/*content vol 2 */}
            <div className="fill-content-vol2">
              <div className="header-fill-vol2">
                <h2>{this.props.header_content_vol2}</h2>
              </div>
              <div className="sub-header-fill-vol2">
                <p>
                  We Provide Food Devlivery For<br></br>
                  Free to Our Royal Customers
                </p>
              </div>
            </div>
              {/*content image middle */}
            <div className="fill-content-vol3">
                <div className="image-fill">
                    <img src={this.state.image} alt=""></img>
                </div>
            </div>
             {/*content vol 3 */}
            <div className="fill-content-vol4">
              <div className="header-fill-vol3">
                <h2>{this.props.header_content_vol3}</h2>
              </div>
              <div className="sub-header-fill-vol3">
                <p>
                  We Provide a Refund of 50%<br></br>
                  if the Food we Make is Damaged<br></br>
                  or Not Good Enough For the<br></br>
                  Customers
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ServicePage;
