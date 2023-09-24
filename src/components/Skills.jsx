import personalData from "../personalData.json/";

export default function Skills() {
  const skillsData = personalData.main.skills;
  const toolsData = personalData.main.skills.Tools;

  return (
    <section>
      {/* <!-- skills --> */}
      <div id="services" className="pt-20 pb-20 bg-slate-50 items-center justify-center">
        <div className="w-9/12 mx-auto">
          <div className="flex flex-col pb-8">
            {/* <!-- judul --> */}
            <div>
              <div className="flex">
                <svg className="w-5 h-5 stroke-2 stroke-gray-400">
                  <line x1="0" y1="10px" x2="10px" y2="10px" />
                </svg>
                <h2 className="text-xs uppercase font-extralight tracking-ngangkang">
                  Skills
                </h2>
              </div>
              <h3 className="text-3xl">Specialized in</h3>
            </div>
          </div>
          {/* <!-- cards all services 1 --> */}
          <div className="grid grid-cols-3 gap-10 py-10">
            {/* <!-- cards services 1 --> */}
            <div className="bg-white rounded-lg shadow-lg">
              <div className="flex flex-col items-center px-10 py-10">
                <div className="w-10 h-10 p-2 bg-blue-100 rounded-2xl">
                  <img
                    className="w-full"
                    src={skillsData.specialized1.icon}
                    alt=""
                  />
                </div>
                <h4 className="mt-5 text-black">
                  {skillsData.specialized1.title}
                </h4>
                <p className="mt-2 text-sm text-center font-extralight text-gray">
                  {skillsData.specialized1.description}
                </p>
              </div>
            </div>
            {/* <!-- cards services 3 --> */}
            <div className="bg-white rounded-lg shadow-lg">
              <div className="flex flex-col items-center px-10 py-10">
                <div className="w-10 h-10 p-2 bg-blue-100 rounded-2xl">
                  <img
                    className="w-full"
                    src={skillsData.specialized2.icon}
                    alt=""
                  />
                </div>
                <h4 className="mt-5 text-black">
                  {skillsData.specialized2.title}
                </h4>
                <p className="mt-2 text-sm text-center font-extralight text-gray">
                  {skillsData.specialized2.description}
                </p>
              </div>
            </div>
            {/* <!-- cards services 2 --> */}
            <div className="bg-white rounded-lg shadow-lg">
              <div className="flex flex-col items-center px-10 py-10">
                <div className="w-10 h-10 p-2 bg-blue-100 rounded-2xl">
                  <img
                    className="w-full"
                    src={skillsData.specialized3.icon}
                    alt=""
                  />
                </div>
                <h4 className="mt-5 text-black">
                  {skillsData.specialized3.title}
                </h4>
                <p className="mt-2 text-sm text-center font-extralight text-gray">
                  {skillsData.specialized3.description}
                </p>
              </div>
            </div>
          </div>

          {/* <!-- cards all services 2 --> */}
          {/* <div className="grid grid-cols-3 gap-10 py-10"> */}
          {/* <!-- cards services 3 --> */}
          {/* <div className="bg-white rounded-lg shadow-lg">
              <div className="flex flex-col items-center px-10 py-10">
                <div className="w-10 h-10 p-2 bg-blue-100 rounded-2xl">
                  <img className="w-full" src="img/icons-services/excel-50.png" alt=""/>
                </div>
                <h4 className="mt-5 text-black">
                  UI/UX Beginner
                </h4>
                <p className="mt-2 text-sm text-center font-extralight text-gray">
                  To create intuitive and appealing interfaces while understanding user needs to craft optimal digital experiences.
                </p>
              </div>
            </div> */}
          {/* <!-- cards services 1 --> */}
          {/* <div className="bg-white rounded-lg shadow-lg">
              <div className="flex flex-col items-center px-10 py-10">
                <div className="w-10 h-10 p-2 bg-blue-100 rounded-2xl">
                  <img className="w-full" src="img/icons-services/java-50.png" alt=""/>
                </div>
                <h4 className="mt-5 text-black">
                  Java Programming
                </h4>
                <p className="mt-2 text-sm text-center font-extralight text-gray">
                  To design, develop, and implement software applications and solutions using the Java programming language.
                </p>
              </div>
            </div> */}
          {/* <!-- cards services 2 --> */}
          {/* <div className="bg-white rounded-lg shadow-lg">
              <div className="flex flex-col items-center px-10 py-10">
                <div className="w-10 h-10 p-2 bg-blue-100 rounded-2xl">
                  <img className="w-full" src="img/icons-services/data-visualization-32.png" alt=""/>
                </div>
                <h4 className="mt-5 text-black">
                  Visualisasi Data
                </h4>
                <p className="mt-2 text-sm text-center font-extralight text-gray">
                  To transform complex information into graphical representations that are easily understandable, aiding in identifying patterns, trends, and key insights from the data.
                </p>
              </div>
            </div>
            
          </div> */}
        </div>
      </div>
      {/* \Tools */}
      <div id="tools" className="pt-8 pb-20 bg-slate-50">
        <div className="w-9/12 mx-auto">
          <div className="flex flex-col pb-8">
            {/* <!-- judul --> */}
            <div>
              <div className="flex"></div>
              <h2 className="text-3xl">Tools</h2>
            </div>
          </div>
          {/* cards tools */}
          <div className="grid grid-cols-12 gap-10 py-10">
            {/* <!-- cards services 1 --> */}
            <div className="flex flex-col items-center p-auto m-auto">
              <div className="flex flex-row">
                <div className="rounded-2xl">
                  <img className="w-full" src={toolsData.IconsHTML} alt="" />
                </div>
                <div className="rounded-2xl">
                  <img className="w-full" src={toolsData.IconsCSS} alt="" />
                </div>
                <div className="rounded-2xl">
                  <img
                    className="w-full"
                    src={toolsData.IconsJavaScript}
                    alt=""
                  />
                </div>
                <div className="rounded-2xl">
                  <img
                    className="w-full"
                    src={toolsData.IconsBootstrap}
                    alt=""
                  />
                </div>
                <div className="rounded-2xl">
                  <img
                    className="w-full"
                    src={toolsData.IconsTailwindCSS}
                    alt=""
                  />
                </div>
                <div className="rounded-2xl">
                  <img
                    className="w-full"
                    src={toolsData.IconsReactJS}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-row">
                <div className="rounded-2xl">
                  <img className="w-full" src={toolsData.IconsViteJS} alt="" />
                </div>
                <div className="rounded-2xl">
                  <img className="w-full" src={toolsData.IconsLinux} alt="" />
                </div>
                <div className="rounded-2xl">
                  <img className="w-full" src={toolsData.IconsGit} alt="" />
                </div>
                <div className="rounded-2xl">
                  <img className="w-full" src={toolsData.IconsGitHub} alt="" />
                </div>
                <div className="rounded-2xl">
                  <img className="w-full" src={toolsData.IconsVSCode} alt="" />
                </div>
                <div className="rounded-2xl">
                  <img
                    className="w-full"
                    src={toolsData.IconsVirtualBox}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
