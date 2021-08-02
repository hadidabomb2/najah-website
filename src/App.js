import './stylesheets/App.scss';
import {Route, Switch, Link} from 'react-router-dom';
import Homepage from './components/Homepage';
import Biography from './components/Biography';
import CV from './components/CV';
import PaintingSculpture from './components/PaintingSculpture';
import Photography from './components/Photography';
import Writing from './components/Writing';
import FilmCollab from './components/FilmCollab';
import PageRoutes from './pageRoutes';

function App() {
  return (
    <div className="app">

    <div className="app-topbar">
      <header className="app-header">
        <Link to={PageRoutes.HOME} className="app-header-link"> Najah Rizvi </Link>
      </header>

      <header className="app-navbar">
        <Link to={PageRoutes.BIO} className="app-navbar-link"> Biography </Link>
        <Link to={PageRoutes.CV} className="app-navbar-link"> Curriculum Vitae </Link>
        <Link to={PageRoutes.PAINTING_SCULPTURE} className="app-navbar-link"> Painting &amp; Scultures </Link>
        <Link to={PageRoutes.PHOTOGRAPHY} className="app-navbar-link"> Photography </Link>
        <Link to={PageRoutes.WRITING} className="app-navbar-link"> Writing </Link>
        <Link to={PageRoutes.FILM_COLLAB} className="app-navbar-link"> Film &amp; Collab Projects </Link>
      </header>
    </div>

      <Switch>
          <Route exact path={PageRoutes.HOME}><Homepage /></Route>
          <Route exact path={PageRoutes.BIO}><Biography /></Route>
          <Route exact path={PageRoutes.CV}><CV /></Route>
          <Route exact path={PageRoutes.PAINTING_SCULPTURE}><PaintingSculpture /></Route>
          <Route exact path={PageRoutes.PHOTOGRAPHY}><Photography /></Route>
          <Route exact path={PageRoutes.WRITING}><Writing /></Route>
          <Route exact path={PageRoutes.FILM_COLLAB}><FilmCollab /></Route>
      </Switch>

    </div>
  );
}

export default App;
