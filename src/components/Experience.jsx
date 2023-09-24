import { useEffect } from "react";
import personalData from "../personalData.json";

export default function Experience() {
  // function untuk tombol experiences
  useEffect(() => {
    const buttons = document.querySelectorAll(".toggle-button");
    const contents = document.querySelectorAll(".content");

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const target = this.getAttribute("data-target");
        contents.forEach((content) => {
          if (content.id === target) {
            content.classList.add("active");
          } else {
            content.classList.remove("active");
          }
        });
      });
    });

    // Cleanup event listeners when the component unmounts
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", () => {});
      });
    };
  }, []);

  // variable untuk pemanggilan data dari json
  const nameExp1 = personalData.main.experience.exp1;
  const nameExp2 = personalData.main.experience.exp2;

  return (
    <section>
      {/* <!-- experiences --> */}
      <div id="experiences" className="py-40 bg-gray-950">
        <div className="flex flex-row items-center w-9/12 mx-auto">
          <div className="basis-1/3">
            {/* <!-- judul --> */}
            <div className="flex flex-col pb-40">
              <div className="flex items-center">
                <svg className="w-5 h-5 stroke-2 stroke-gray-400">
                  <line x1="0" y1="10px" x2="10px" y2="10px" />
                </svg>
                <h2 className="text-xs uppercase font-extralight tracking-ngangkang">
                  career path
                </h2>
              </div>
              <h3 className="text-3xl text-white">Experiences</h3>

              <div className="flex flex-col pr-20 mt-10 gap-y-5 button-container">
                <div
                  id="exp1"
                  className="flex flex-row justify-between w-full p-4 bg-white rounded-lg cursor-pointer hover:bg-blue-200 hover:text-blue-800 toggle-button"
                  data-target="contentExp1"
                >
                  <span>{nameExp1.title}</span>
                </div>
                <div
                  id="exp2"
                  className="flex flex-row justify-between w-full p-4 bg-white rounded-lg cursor-pointer hover:bg-blue-200 hover:text-blue-800 toggle-button"
                  data-target="contentExp2"
                >
                  <span>{nameExp2.title}</span>
                </div>
                {/* <!-- <a className = "flex flex-row justify-between w-full p-4 bg-white rounded-lg hover:bg-blue-200 hover:text-blue-800" href=""><span>Google</span> > </a> --> */}
              </div>
            </div>
          </div>
          <div className="textEXP content-wrapper">
            {/* <!-- content exp 1 --> */}
            <div id="contentExp1" className="pl-20 content active basis-2/3">
              <h4 className="text-2xl font-bold text-gray-200">
                {nameExp1.jobdesc}
              </h4>
              <h5 className="text-sm font-light">{nameExp1.address}</h5>
              <p className="mt-5 text-gray-200 text-light">{nameExp1.date}</p>
              <div className="mt-2">
                <span className="px-2 py-1 font-mono text-sm border border-white border-solid rounded-md">
                  {nameExp1.tools[0]}
                </span>
                <span className="px-2 py-1 font-mono text-sm border border-white border-solid rounded-md">
                  {nameExp1.tools[1]}
                </span>
              </div>
              <hr className="my-5" />
              <ul className="leading-6 list-disc list-inside">
                <li>
                  {nameExp1.description.desc1[0]}
                  <br />
                  {nameExp1.description.desc1[1]}
                </li>
                <li>
                  {nameExp1.description.desc2[0]}
                  <br />
                  {nameExp1.description.desc2[1]}
                </li>
                <li>
                  {nameExp1.description.desc3[0]}
                  <br />
                  {nameExp1.description.desc3[1]}
                </li>
                <li>
                  {nameExp1.description.desc4[0]}
                  <br />
                  {nameExp1.description.desc4[1]}
                </li>
              </ul>
            </div>
            {/* <!-- content epx 2 --> */}
            <div id="contentExp2" className="pl-20 content basis-2/3">
              <h4 className="text-2xl font-bold text-gray-200">
                {nameExp2.jobdesc}
              </h4>
              <h5 className="text-sm font-light">{nameExp2.address}</h5>
              <p className="mt-5 text-gray-200 text-light">{nameExp2.date}</p>
              {/* <!-- <div className="mt-2">
							<span className="px-2 py-1 font-mono text-sm border border-white border-solid rounded-md">ATS Tools</span>
							<span className="px-2 py-1 font-mono text-sm border border-white border-solid rounded-md">DWS Tools</span>
						</div> --> */}
              <hr className="my-5" />
              <ul className="leading-6 list-disc list-inside">
                <li>{nameExp2.description[0]}</li>
                <li>{nameExp2.description[1]}</li>
                <li>{nameExp2.description[2]}</li>
                <li>{nameExp2.description[3]}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
