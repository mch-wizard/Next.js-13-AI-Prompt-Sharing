import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="mex-md:hidden" />
        <span className="purple_gradient text-center"> AI-Powered Prompts & Tools</span>
      </h1>
      <p className="desc text-center pt-5">
      AI Helpers is an open source platform that focuses on collecting AI tools and prompts. The goal is to develop an environment that will test things related to AI and share knowledge.
      </p>

      <Feed />
    </section>
  )
}

export default Home;