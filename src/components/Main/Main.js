import './Main.css';
import Header from '../Main/Header/Header';
import Promo from "../Main/Promo/Promo"
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';
// import SearchForm from '../Movies/SearchForm/SearchForm';
// import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
// import MoviesCardList from '../SavedMovies/MoviesCardList/MoviesCardList';

// import HeaderLoggedIn from '../Header/Header';
// import Profile from '../Profile/Profile';
// import Register from '../Register/Register';
// import Login from '../Login/Login';
// import PageNotFound from '../pageNotFound/pageNotFound';
// import Navigation from '../Navigation/Navigation';



function Main() {
  return (
    <section className="Main">
      <Header/>
      <main>
        <Promo/>
        <NavTab/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
      </main>
      <Footer/>
    </section>
  );
}

export default Main;



      // {/* <Header/> */}
      // {/* <HeaderLoggedIn/> */}
      // {/* <Register/> */}
      // {/* <Navigation/>
      // <MoviesCardList/>
      // <PageNotFound/>
      // <Login/>
      // <Profile/>
      // <SearchForm/>
      // <MoviesCardList/> */}