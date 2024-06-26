const Home = () => {
  /**
   * Home component
   * Renders the home page with a welcome message and an image.
   * @returns {JSX.Element} - The Home component.
   */
  return (
    <main>
      <h1>Home page</h1>
      <p className="home-text">Welcome to HRnet management dashboard</p>
      <img
        src="https://hrnet-stv.netlify.app/image01.webp"
        alt="dahsboard"
        className="home-image"
      />
    </main>
  );
};

export default Home;
