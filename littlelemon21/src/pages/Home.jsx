import HomeIntro from '../components/HomeIntro.jsx';
import Specials from '../components/Specials.jsx';
import Reviews from '../components/Reviews.jsx';
import AboutUsMod from '../components/AboutUsMod.jsx';


const Home = () => {
    return(
       <>
        <HomeIntro/>
         <Specials/>
          <Reviews/>
         <AboutUsMod/>
       </>
    )
}
export default Home;