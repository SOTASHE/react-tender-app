// root component
import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './components/HomeScreen';
import DetailTender from './components/DetailTender';
const App = (tenders,data, query) => {
  // const title = 'Tender App';

  console.log(query);

    // const seacrh = (data) => {
    //   console.log(data);
    //   Object.values(data).filter((tender) =>
    //     tender.title.toLowerCase().includes(query.toLowerCase())
    //   );
    // };
    // console(seacrh(data));

  return (
    <Router>
      <Header />
      <main className="py-3">
        <div className="contentent">
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/detail/:id" component={DetailTender} />

            {/* <Route path="/about" component={About} /> */}
          </Switch>
        </div>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
