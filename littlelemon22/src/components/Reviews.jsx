



function Reviews() {
  return (
    <>
      <div class="super-container">
      <h1 className="text-center mt-5">What do our customers think?</h1>
      <div className="reviewsContainer">
        <article aria-label="Review" className="review-module">
          <div>
            <div className="imgContainer">
              <span className="">
                <img
                  src="https://meta-capstone-little-lemon.web.app/static/media/saraLopez.0c105788fefa97c6e4c2.jpg"
                  alt="Sara Lopez's Profile Pic"
                  className="rounded-circle tiny-icon"
                />
              </span>
            </div>
            <div aria-label="Name and Username">
              <p aria-label="Name">Sara Lopez</p>
              <small>Sara72</small>
            </div>
          </div>
          <div aria-label="Rating: 5 out of 5 stars">
            <span aria-hidden="true">⭐⭐⭐⭐⭐</span>
          </div>
          <p aria-label="Review Description">
            "Seriously cannot stop thinking about the Turkish Mac n' Cheese!!"
          </p>
        </article>
        <article aria-label="Review" className="review-module">
          <div>
            <div className="imgContainer">
              <span className="">
                <img
                  src="https://meta-capstone-little-lemon.web.app/static/media/johnDoucette.d46b01cb712805ee9f9f.jpg"
                  className="rounded-circle tiny-icon"
                  alt="John Doucette's Profile Pic"
                />
              </span>
            </div>
            <div aria-label="Name and Username">
              <p aria-label="Name">John Doucette</p>
              <small>Johnny_Utah</small>
            </div>
          </div>
          <div aria-label="Rating">
             <div aria-label="Rating: 5 out of 5 stars">
              ⭐ ⭐⭐ ⭐ ⭐
            </div>
          </div>
          <p aria-label="Review Description">
            "We had such a great time celebrating my grandmothers birthday!"
          </p>
        </article>
        <article aria-label="Review" className="review-module">
          <div>
            <div className="imgContainer">
              <span className="">
                <img
                  src="https://meta-capstone-little-lemon.web.app/static/media/jimmyCrickets.5a41ce2db738206d6020.jpg"
                  className="rounded-circle tiny-icon"
                  alt="Jimmy Crickets's Profile Pic"
                />
              </span>
            </div>
            <div aria-label="Name and Username">
              <p aria-label="Name">Jimmy Crickets</p>
              <small>crick_it</small>
            </div>
          </div>
          <div aria-label="Rating">
             <div aria-label="Rating: 5 out of 5 stars">
              ⭐ ⭐⭐ ⭐ ⭐
            </div>
          </div>
          <p aria-label="Review Description">
            "Such a chilled out atmosphere, love it!"
          </p>
        </article>
        <article aria-label="Review" className="review-module">
          <div>
            <div className="imgContainer">
              <span className="">
                <img
                  src="https://meta-capstone-little-lemon.web.app/static/media/miaMaria.f752dc931ca0aa387dee.jpg"
                  className="rounded-circle tiny-icon"
                  alt="Mia Maria's Profile Pic"
                />
              </span>
            </div>
            <div aria-label="Name and Username">
              <p aria-label="Name">Mia Maria</p>
              <small>flowerTime</small>
            </div>
          </div>
          <div aria-label="Rating">
             <div aria-label="Rating: 5 out of 5 stars">
              ⭐ ⭐⭐ ⭐ ⭐
            </div>
          </div>
          <p aria-label="Review Description">
            "Best Feta Salad in town. Flawless every time!"
          </p>
        </article>
      </div>
      </div>
    </>
  );
}

export default Reviews;

