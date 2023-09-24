// import personalData from "../personalData.json/";
import personalData from "../personalData.json/";

export default function Portfolio() {
  const portfolios1 = personalData.main.portfolios.uiux;
  const portfolios2 = personalData.main.portfolios.ecommerce;
  const portfolios3 = personalData.main.portfolios.webDevPortfolio;
  return (
    <section>
    {/* <!-- portfolio --> */}
      <div id="portfolio" className="py-40 bg-gray-950">
        <div className="w-9/12 mx-auto">
          {/* <!-- judul --> */}
          <div className="flex flex-col">
              <div className="flex items-center">
                <svg className="w-5 h-5 stroke-2 stroke-gray-400">
                  <line x1="0" y1="10px" x2="10px" y2="10px"/>
                </svg>
                <h2 className="text-xs uppercase font-extralight tracking-ngangkang">
                  my works
                </h2>
              </div>
              <h3 className="text-3xl text-white">Featured Portfolios</h3>
          </div>
          {/* <!-- cards --> */}
          <div className="grid grid-cols-4 gap-20 mt-20">
            {/* <!-- card 1 --> */}
            <a className="" href={portfolios1.link} target="_blank" rel="noopener noreferrer">
              <div className="overflow-hidden duration-75 ease-in-out rounded-lg shadow-lg hover:bg-sky-800">
                <img
                  className="object-cover h-48 opacity-50"
                  src={portfolios1.icon} alt=""/>
                <div className="px-4 py-2 bg-white">
                  <h4 className="text-sm font-medium text-gray-800">{portfolios1.description}</h4>
                  <h5 className="font-mono text-sm">{portfolios1.title}</h5>
                </div>
              </div>
            </a>
              {/* <!-- card 2 --> */}
              <a href={portfolios2.link} target="_blank" rel="noopener noreferrer">
                <div className="overflow-hidden duration-75 ease-in-out rounded-lg shadow-lg hover:bg-sky-800">
                  <img
                    className="object-cover h-48 opacity-50"
                    src={portfolios2.icon} alt=""/>
                  <div className="px-4 py-2 bg-white">
                    <h4 className="text-sm font-medium text-gray-800">{portfolios2.description}</h4>
                    <h5 className="font-mono text-sm">{portfolios2.title}</h5>
                  </div>
                </div>
              </a>
            {/* <!-- card 2 --> */}
            <a href="#hero">
              <div className="overflow-hidden duration-75 ease-in-out rounded-lg shadow-lg hover:bg-sky-800">
                <img
                  className="object-cover h-48 opacity-50"
                  src={portfolios3.icon} alt=""/>
                <div className="px-4 py-2 bg-white">
                  <h4 className="text-sm font-medium text-gray-800">{portfolios3.description}</h4>
                  <h5 className="font-mono text-sm">{portfolios3.title}</h5>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
