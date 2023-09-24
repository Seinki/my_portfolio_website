// import personalData from "../personalData.json/";

export default function Contact() {
  return (
    <section>
      {/* <!-- contact --> */}
      <div id="contact" className="pt-40 pb-40 bg-white">
        <div className="flex flex-row items-center w-9/12 mx-auto">
          <div className="basis-1/2">
            {/* <!-- judul --> */}
            <div className="flex flex-col">
              <div className="flex items-center">
                <svg className="w-5 h-5 stroke-2 stroke-gray-400">
                  <line x1="0" y1="10px" x2="10px" y2="10px" />
                </svg>
                <h2 className="text-xs uppercase font-extralight tracking-ngangkang">
                  Inquiry
                </h2>
              </div>
              <h3 className="text-3xl text-gray-800">Contact Me</h3>
            </div>
            {/* <!-- input user --> */}
            <form
              id="contact-form"
              action="https://formspree.io/f/moqoekoq"
              method="POST"
              className="max-w-md mt-10  pb-10"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block font-semibold text-gray-700"
                >
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 bg-blue-100 rounded-md focus:ring-blue-950"
                  type="text"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block font-semibold text-gray-700"
                >
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 bg-blue-100 rounded-md focus:ring-blue-950"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block font-semibold text-gray-700"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 bg-blue-100 rounded-md focus:ring-blue-950"
                  name="message"
                  id="message"
                  cols="30"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="button-send-email w-full px-4 py-2 font-semibold rounded-md text-center">
                <button
                  className=" "
                  type="submit"
                >
                  Send Email
                </button>
              </div>
            </form>
          </div>
          {/* <!-- contact person --> */}
          <div className="ml-10 basis-1/2">
            <div className="flex flex-row gap-5 p-5">
              <div className="w-10 h-10 p-2 bg-blue-100 rounded-2xl">
                <img className="w-full" src="img/pin.svg" alt="" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800">Address</h4>
                <h5 className="font-thin">
                  Cicaheum, Kiaracondong, Kota Bandung 40282
                </h5>
              </div>
            </div>

            <div className="flex flex-row gap-5 p-5">
              <div className="w-10 h-10 p-2 bg-blue-100 rounded-2xl">
                <img className="w-full" src="img/phone call.svg" alt="" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800">
                  Phone Call
                </h4>
                <h5 className="font-thin">(+62) 0895707749900</h5>
              </div>
            </div>

            <div className="flex flex-row gap-5 p-5">
              <div className="w-10 h-10 p-2 bg-blue-100 rounded-2xl">
                <img className="w-full" src="img/mail.svg" alt="" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800">E-Mail</h4>
                <h5 className="font-thin">seinkiannalesmana00@gmail.com</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
