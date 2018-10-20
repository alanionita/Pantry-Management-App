import React from "react";
import App from "../presentational/App";

class AppContainer extends React.Component {
  componentDidMount() {
    document.title = "Pantry Management App";
  }
  render() {
    const appData = {
      freezer: [
        {
          _id: 478,
          product_name: "Faux Fish Fingers",
          expires: "2018-11-01",
          quantity: "1",
          size: "pack",
          product_type: "fake meat"
        },
        {
          _id: 477,
          product_name: "Bean Burgers",
          expires: "2018-11-22",
          quantity: "1",
          size: "pack",
          product_type: "fake meat"
        },
        {
          _id: 476,
          product_name: "Ice Cream",
          expires: "2018-11-04",
          quantity: "1",
          size: "tub",
          product_type: "dessert"
        },
        {
          _id: 475,
          product_name: "Frozen Strawberries",
          expires: "2018-11-10",
          quantity: "250",
          size: "g",
          product_type: "fake meat"
        }
      ],
      pantry: [
        {
          _id: 657,
          product_name: "Chili powder",
          expires: "10-05-2019",
          quantity: "2",
          size: "small jar",
          produc_type: "spices"
        }
      ],
      fridge: [
        {
          _id: 88,
          product_name: "Soy milk",
          expires: "03-11-2018",
          quantity: "1",
          size: "carton",
          produc_type: "fake dairy"
        }
      ]
    };
    return <App data={appData} />;
  }
}

export default AppContainer;
