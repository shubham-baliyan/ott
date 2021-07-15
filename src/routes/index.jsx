import React from "react";
import Header from "../components/header/Header";
import Loader from "../components/Loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MasterFooter from "../components/footer/Masterfooter";
const Home = React.lazy(() => import("../pages/Home"));
const VideoPage = React.lazy(() => import("../pages/VideoPage"));
const single = React.lazy(() => import("../pages/single"));
const CategoryPage = React.lazy(() => import("../pages/CategoryPage"));
const WatchList = React.lazy(() => import("../pages/WatchList"));

const Routes = () => (
  <Router>
    <React.Suspense fallback={<Loader />}>
      <Header topClass="top-header" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/single/:id" component={single} />

        <Route exact path="/watch/:id" component={VideoPage} />
        <Route exact path="/category/:id" component={CategoryPage} />
        <Route exact path="/watchlist" component={WatchList} />
      </Switch>
      <MasterFooter />
    </React.Suspense>
  </Router>
);

export default Routes;
