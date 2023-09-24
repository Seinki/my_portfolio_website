import personalData from "../personalData.json/";

export default function Home() {
  const firstName = personalData.main.dataPersonalUmum.name.first;
  const lastName = personalData.main.dataPersonalUmum.name.last;
  const socialData = personalData.main.social;
  const imgHeroHeader2 = personalData.main.imgHeroHeader;
  const descHero = personalData.main.descHero;

  return (
    <section>
      {/* <!-- Hero Section--> */}
      <div className="bg-gray-950 ">
        <div className="flex items-center w-9/12 h-screen gap-4 mx-auto">
          {/* <!-- deskripsi --> */}
          <div className="basis-1/2">
            <div className="flex items-center">
              <svg className="w-5 h-5 stroke-2 stroke-gray-400">
                <line x1="0" y1="10px" x2="10px" y2="10px" />
              </svg>
              <h2 className="text-xs uppercase font-extralight tracking-ngangkang">
                my name is
              </h2>
            </div>
            <h3 className="text-4xl font-bold text-white">
              <span>{firstName}</span>
              <span className="text-blue-700">{lastName}</span>
            </h3>
            <p className="pt-3 font-light text-white">{descHero}</p>
            <div className="flex flex-row mt-5 space-x-3">
              <a
                className="ease-in-out border border-transparent rounded-md hover:border-blue-500 duration"
                href={socialData.instagram.link}
                target="_blank"
                rel="noopener noreferrer"
                title={socialData.instagram.title}
              >
                <img
                  className="w-6 h-6"
                  src={socialData.instagram.srcIcon}
                  alt=""
                />
              </a>
              <a
                className="ease-in-out border border-transparent rounded-md hover:border-blue-500 duration"
                href={socialData.github.link}
                target="_blank"
                rel="noopener noreferrer"
                title={socialData.github.title}
              >
                <img
                  className="w-6 h-6"
                  src={socialData.github.srcIcon}
                  alt=""
                />
              </a>
              <a
                className="ease-in-out border border-transparent rounded-md hover:border-blue-500 duration"
                href={socialData.linkedin.link}
                target="_blank"
                rel="noopener noreferrer"
                title={socialData.linkedin.title}
              >
                <img
                  className="w-6 h-6"
                  src={socialData.linkedin.srcIcon}
                  alt=""
                />
              </a>
              <a
                className="ease-in-out border border-transparent rounded-md hover:border-blue-500 duration"
                href={socialData.resume.link}
                target="_blank"
                rel="noopener noreferrer"
                title={socialData.resume.title}
              >
                <img
                  className="w-6 h-6"
                  src={socialData.resume.srcIcon}
                  alt=""
                />
              </a>
            </div>
          </div>
          {/* <!-- avatar --> */}
          <div className="basis-1/2 m-10 basis-custom">
            <div className="boxs-1">
              <div className="boxs-2">
                <img
                  className="mx-auto img-heroheader"
                  src={imgHeroHeader2}
                  alt="hero-header"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
