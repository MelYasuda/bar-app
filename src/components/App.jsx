import React from "react";
//import PropTypes from 'prop-types';
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import KegList from "./KegList";

/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kegList: [
        {
          name: "Hennessy Richard",
          photo:
            "https://www.hennessy.com/us/uploaded-media/images/2016/09/14/richard-image_01_sm.jpg",
          brand: "Hennessy",
          price: 4944,
          abv: 20,
          pintsLeft: 100 
        },
        {
          name: "Belvedere Vodka",
          photo:
            "https://dg6qn11ynnp6a.cloudfront.net/wp-content/uploads/2015/03/Belvedere-Challenge-480x262.jpg",
          brand: "Belvedere Vodka",
          price: 45,
          abv: 15,
          pintsLeft: 100
        },
        {
          name: "Breckenridge Bourbon",
          photo:
            "https://cdn.pursuitist.com/wp-content/uploads/2013/02/Breckenridge-Bourbon-Whiskey.png",
          brand: "Breckenridge",
          price: 450,
          abv: 40,
          pintsLeft: 100
        },
        {
          name: "Courvoisier VS Cognac",
          photo: "http://www.lebigno.co.uk/img/41TV7AUiP9L.jpg",
          brand: "Courvoisier",
          price: 632,
          abv: 23,
          pintsLeft: 100
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <style jsx>{`
          font-family: Helvetica;
        `}</style>
        <Header />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <KegList {...props} kegList={this.state.kegList} />
              )}
            />
            {/* <Route
          path="/producelist"
          render={props => (
            <ProduceList {...props} availableProduce={availableProduce} />
          )}
        /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

//App.propTypes = {
//};

export default App;
