import './Main.css';
import MainHeader from "./Header/Header";
import Header from "../Header/Header";

import Promo from "../Main/Promo/Promo"
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main(props) {
  return (
    <section className="Main">
      {
        props.loggedIn ? <Header navOpen={props.navOpen}/> : <MainHeader/>
      }
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
