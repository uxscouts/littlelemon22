
import { useRef } from 'react';

function AboutUsMod() {
  const targetRef = useRef(null); 
  
  return (
    <>
      <div className="About-Us-Container" id="about" ref={targetRef}>
        <section id="About-Us-Section" aria-labelledby="about-heading">
          <div className="about-grid-container">
            <article className="About-Us-Module">
              <h1 id="about-heading" className="dullDarkGreen Markazi-Bold extraBig">Little Lemon</h1>
              <h3 className="salmon MarkaziText-Bold prettyBig moveyUppy">Chicago</h3>
              <p>Little Lemon Chicago is a family owned Mediterranean 
                restaurant located in the heart of the city. The restaurant 
                is run by brothers Mario and Adrian, who have always had a 
                passion for cooking and serving delicious food. Growing 
                up in a Mediterranean household, the brothers were exposed 
                to traditional recipes from an early age, and they decided 
                o bring those recipes to the masses with a modern twist. 
                At Little Lemon, you can expect to find a menu full of 
                classic dishes with a creative twist that makes them stand 
                out from the rest. Whether you're looking for a quick lunch 
                or a leisurely dinner, Little Lemon Chicago is the perfect 
                place to indulge in a delicious meal in a cozy and welcoming 
                atmosphere.</p>
            </article>        
            <article className="About-Us-Module" aria-label="Restaurant gallery">
              <div className="grid-container-offset-images" role="img" aria-label="Photos of our restaurant interior and food">
                <div className="box box1" aria-hidden="true" />
                <div className="box box2" aria-hidden="true" />
              </div>
            </article>
          </div>
        </section>
      </div>  
    </>
  )
}

export default AboutUsMod;
