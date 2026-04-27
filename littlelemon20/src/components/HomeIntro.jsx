function HomeIntro() {
  return (
    <>
    {/* Added aria-label for section context */}
    <section class="big-green-section" aria-label="Introduction">
      <div class="container-auto">
        <div class="grid-item">
          <h1 class="karla-400 lemon-yellow">LITTLE LEMON</h1>
          <h2 class="karla-300 white">Chicago</h2>
          <p class="karla-400 white">
            we are a family owned Mediterranean restaurant, 
            focused on traditional recipes with a modern twist.
          </p>
          <p>
            {/* Proper button usage */}
            <button type="button" class="btn btn-warning" aria-label="Reserve a table at Little Lemon">
              Reserve a Table
            </button>
          </p>
        </div>
        <div class="grid-item lightGrey">
          {/* Added aria-label to describe the image content */}
          <div 
            class="Tray_of_Fancy_Sushi" 
            role="img" 
            aria-label="Tray of Fancy Sushi">
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
export default HomeIntro;
