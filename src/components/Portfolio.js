import Isotope from "isotope-layout";
import dynamic from "next/dynamic";
import Modal from "react-modal";
import { Fragment, useEffect, useRef, useState } from "react";
import SectionContainer from "../layout/SectionContainer";
import { dataImage } from "../utils";
import ImageView from "./ImagePopup";
// import { urlFor } from "@/libs/sanity";
import { Detail, Soundcloud } from "./Popup";
// import { PortableText } from "@portabletext/react";

// hard-coded data for portfolio section
const portfolioData = [
  {
    title: "Residential Electrical Installations",
    category: "Residential Services",
    image: "",
    content: [
      "Ensure your home is powered safely and efficiently with our expert residential electrical installations.",
      "From new builds to renovations, we deliver high-quality wiring and system setups tailored to your needs.",
      "Trust us to provide reliable and long-lasting solutions for all your home electrical requirements."
    ],
  },
  {
    title: "Commercial Lighting Solutions",
    category: "Commercial Services",
    image: "",
    content: [
      "Illuminate your business with our state-of-the-art commercial lighting solutions.",
      "We design and install energy-efficient lighting systems that enhance both functionality and aesthetics.",
      "Our team works closely with you to create customized lighting solutions that fit your business needs."
    ],
  },
  {
    title: "Electrical Panel Upgrades",
    category: "System Upgrades",
    image: "",
    content: [
      "Upgrade your electrical panel to meet modern power demands and enhance safety.",
      "Our panel upgrade services ensure your home or business has the capacity to handle today’s technology.",
      "Enjoy peace of mind knowing your electrical system is running efficiently and up to code."
    ],
  },
  {
    title: "Smart Home Automation",
    category: "Smart Technology",
    image: "",
    content: [
      "Transform your home with the latest in smart home automation technology.",
      "We install and integrate systems that allow you to control lighting, security, and more at your fingertips.",
      "Enjoy a seamless and convenient smart home experience tailored to your lifestyle."
    ],
  },
  {
    title: "Emergency Electrical Repairs",
    category: "Emergency Services",
    image: "",
    content: [
      "We’re here for you with fast and reliable emergency electrical repair services.",
      "Our team is available to address sudden outages, faulty wiring, and other urgent issues promptly.",
      "Get your electrical systems back up and running safely and efficiently, any time of the day."
    ],
  },
  {
    title: "Energy Efficiency Consultations",
    category: "Energy Savings",
    image: "",
    content: [
      "Reduce your energy bills and carbon footprint with our energy efficiency consultations.",
      "Our experts evaluate your electrical system and provide recommendations for cost-saving upgrades.",
      "Let us help you optimize energy usage and create a more sustainable environment."
    ],
  },
];

const Portfolio = () => {
  const categories = [
    "Residential Services",
    "Commercial Services",
    "System Upgrades",
    "Smart Technology",
    "Emergency Services",
    "Energy Savings"
  ];

  const ModalVideo = dynamic(
    () => {
      return import("react-modal-video");
    },
    { ssr: false }
  );

  // Isotope
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");
  const [isIsotopeInitialized, setIsIsotopeInitialized] = useState(false);

  useEffect(() => {
    const imagesLoaded = require("imagesloaded");
    const portfolioList = document.querySelector(".gallery_zoom");

    if (portfolioList && !isIsotopeInitialized) {
      // Загружаем изображения перед инициализацией Isotope
      var imgLoad = imagesLoaded(".portfolio_list");
      imgLoad.on("done", function () {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
          masonry: {
            columnWidth: ".item__",
          },
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
        setIsIsotopeInitialized(true);
      });
    }

    return () => {
      // Очищаем экземпляр Isotope при размонтировании компонента
      if (isotope.current) {
        isotope.current.destroy();
      }
    };
  }, [isIsotopeInitialized]);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  useEffect(() => {
    setTimeout(() => {
      dataImage();
    }, 2000);
  });

  const [modalContent, setModalContent] = useState({});
  const [category, setCategory] = useState(null);
  const filteredData = category ? portfolioData.filter(item => item.category === category) : portfolioData; // replaced sanity {data} with portfolioData
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  // Modal with title, image and content
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal(value) {
    setIsModalOpen(!isModalOpen);
    setModalContent(value);
  }

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <Fragment>
      <ImageView />
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen2}
        videoId="337293658"
        animationSpeed={300}
        onClose={() => setIsOpen2(false)}
        modalVideoClose="mfp-close"
      />
      <ModalVideo
        channel="youtube"
        autoplay={true}
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        animationSpeed={300}
        onClose={() => setIsOpen(false)}
        modalVideoClose="mfp-close"
      />
      <Soundcloud isOpen3={isOpen3} toggleModalThree={toggleModalThree} />
      <Detail isOpen4={isOpen4} toggleModalFour={toggleModalFour} />
      <SectionContainer navName="portfolio">
        <div className="section_inner">
          <div className="cavani_tm_portfolio w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Creative Portfolio
              </span>
            </div>
            <div className="portfolio_filter w-full h-auto clear-both float-left text-left relative px-0 pt-[55px] pb-[42px]">
              <ul>
                <li className="mr-[40px] inline-block">
                  {/* <a
                    href="#"
                    className={`current text-[#333] font-poppins font-medium transition-all duration-300 ${activeBtn("*")}`}
                    data-filter="*"
                    onClick={handleFilterKeyChange("*")}
                  >
                    All
                  </a> */}
                  <button
                    className={`current text-[#333] font-poppins font-medium transition-all duration-300 ${category === null && 'underline'}`}
                    onClick={() => setCategory(null)}
                  >
                    All
                  </button>
                </li>
                {/* <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className={`text-[#333] font-poppins font-medium transition-all duration-300 ${activeBtn(
                      "eyebrow-wax"
                    )}`}
                    data-filter=".eyebrow-wax"
                    onClick={handleFilterKeyChange("eyebrow-wax")}
                  >
                    Eyebrow Wax
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className={`text-[#333] font-poppins font-medium transition-all duration-300 ${activeBtn(
                      "youtube"
                    )}`}
                    data-filter=".youtube"
                    onClick={handleFilterKeyChange("youtube")}
                  >
                    Eyebrow Tint & Shape
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className={`text-[#333] font-poppins font-medium transition-all duration-300 ${activeBtn(
                      "soundcloud"
                    )}`}
                    data-filter=".soundcloud"
                    onClick={handleFilterKeyChange("soundcloud")}
                  >
                    Eyebrows Lamination
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className={`text-[#333] font-poppins font-medium transition-all duration-300 ${activeBtn(
                      "image"
                    )}`}
                    data-filter=".image"
                    onClick={handleFilterKeyChange("image")}
                  >
                    Eyelash Lift and Tint
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="#"
                    className={`text-[#333] font-poppins font-medium transition-all duration-300 ${activeBtn(
                      "detail"
                    )}`}
                    data-filter=".detail"
                    onClick={handleFilterKeyChange("detail")}
                  >
                    Classic Fill
                  </a>
                </li> */}
                {categories.map((item, i) => (
                  <li key={`category-${i}`} className="inline-block">
                    <button
                      key={`category-${i}`}
                      className={`text-[#333] font-poppins font-medium transition-all duration-300 ${category === item && 'underline'}`}
                      onClick={() => setCategory(item)}
                    >{item}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="portfolio_list w-full h-auto clear-both float-left">
              <ul className="flex flex-wrap">
                {filteredData?.map((item, i) => {
                  return (
                    <li key={`portfolio-${i}`} className="youtube mb-[50px] w-1/2 float-left pl-[50px] item__">
                      <button onClick={() => toggleModal(item)}>
                      <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                        <div className="image relative">
                          <img
                            className="relative min-w-full rounded-xl"
                            src={item.image} // hard-coded image
                            alt={item.title}
                          />
                          <div className="details rounded-1xl">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                      </button>
                    </li> 
                  )
                })}
                {/* <li className="youtube mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt={true.toString()}
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/portfolio/1.jpg"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Ave Brook
                        </h3>
                        <span className="text-[14px]">Youtube</span>
                      </div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li> */}
                {/* Остальные элементы галереи */}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
      {modalContent && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={toggleModal}
          contentLabel="Portfolio"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={300}
          openTimeoutMS={300}
        >
          <div className="cavani_tm_modalbox opened">
            <div className="box_inner">
              <div className="close">
                <a href="#" onClick={toggleModal}>
                  <i className="icon-cancel" />
                </a>
              </div>
              <div className="description_wrap rounded-xl">
                <div className="news_popup_informations w-full h-auto clear-both float-left">
                  {modalContent?.image && (
                    <div className="image">
                      <img
                      src={modalContent.image} // hard-coded image
                      alt={modalContent.title} // hard-coded title
                      />
                      <div
                        className="main"
                        style={{ backgroundImage: `url(${modalContent.image})`}} // hard-coded background image
                      />
                    </div>
                  )}
                  <div className="details">
                    <div className="title">
                      <h3>{modalContent.title}</h3>
                    </div>
                    <div />
                  </div>
                  <div className="text w-full float-left">
                    {/* <p className="mb-[15px]">{modalContent.text1}</p>
                    <p className="mb-[15px]">{modalContent.text2}</p>
                    <p>{modalContent.text3}</p> */}
                    {/* <PortableText
                      value={modalContent?.content}
                    /> */}
                    {modalContent.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};
export default Portfolio;
