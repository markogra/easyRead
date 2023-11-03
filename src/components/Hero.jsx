function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/markogra/ai-summerizer");
          }}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Simplify reading long articles with
        <br className="max-md:hidden" />
        <span className="orange_gradient">easyRead</span>
      </h1>
      <h2 className="desc">
        Try easyRead, an open-source AI-powered tool that summarizes long
        articles into short, easy-to-read summaries.
      </h2>
    </header>
  );
}

export default Hero;
