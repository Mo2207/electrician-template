import { Fragment, useEffect, useState } from "react";
import Modal from "react-modal";
// import { urlFor } from "@/libs/sanity";
// import { PortableText } from "@portabletext/react";
import SectionContainer from "../layout/SectionContainer";

const newsData = [
  {
    title: "Introducing Solar Panel Services",
    date: "February 20, 2023",
    tag: "Services",
    image: "",
    content: [
      "We are excited to offer professional solar panel installation and maintenance services to help you harness sustainable energy.",
      "Our team uses advanced technology and high-quality materials to ensure reliable and efficient solar power solutions.",
      "Contact us today to learn more about how we can help you reduce your energy bills and environmental impact.",
    ],
  },
  {
    title: "Exclusive Lighting Design Promotion",
    date: "April 3, 2022",
    tag: "Promotions",
    image: "",
    content: [
      "Transform your space with our limited-time offer on custom lighting design services.",
      "Whether for your home or office, we create tailored lighting solutions to suit your needs and style.",
      "Don’t miss this opportunity to upgrade your lighting—schedule your consultation now!",
    ],
  },
  {
    title: "Backup Generator Installation Discount",
    date: "January 26, 2021",
    tag: "Promotions",
    image: "",
    content: [
      "Stay prepared for power outages with our discounted backup generator installation services.",
      "Our expert electricians ensure a seamless installation process to provide reliable power whenever you need it.",
      "Take advantage of this special offer and secure your home or business today.",
    ],
  },
  {
    title: "Grand Opening of Illumination Electrical",
    date: "January 9, 2018",
    tag: "Events",
    image: "",
    content: [
      "We are thrilled to announce the grand opening of Illumination Electrical! Join us in celebrating this exciting milestone with exclusive offers and promotions.",
      "Experience top-notch electrical services, from repairs to installations, tailored to meet your unique needs.",
      "Become part of our journey and let us brighten your world with expert solutions and exceptional customer care.",
    ],
  },
];

const News = () => {

  useEffect(() => {
    var lists = document.querySelectorAll(".news_list > ul > li");
    // let box = document.querySelector(".cavani_fn_moving_box");
    // if (!box) {
    //   let body = document.querySelector("body");
    //   let div = document.createElement("div");
    //   div.classList.add("cavani_fn_moving_box");
    //   body.appendChild(div);
    // }

    // lists.forEach((list) => {
    //   list.addEventListener("mouseenter", (event) => {
    //     box.classList.add("opened");
    //     var imgURL = list.getAttribute("data-img");
    //     box.style.backgroundImage = `url(${imgURL})`;
    //     box.style.top = event.clientY - 50 + "px";

    //     if (imgURL === "") {
    //       box.classList.remove("opened");
    //       return false;
    //     }
    //   });
    //   list.addEventListener("mouseleave", () => {
    //     box.classList.remove("opened");
    //   });
    // });
  }, []);

  const [isOpen4, setIsOpen4] = useState(false);
  const [modalContent, setModalContent] = useState({});

  function toggleModalFour(value) {
    setIsOpen4(!isOpen4);
    setModalContent(value);
  }

  return (
    <Fragment>
      <SectionContainer navName="news">
        <div className="section_inner">
          <div className="cavani_tm_news w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Latest News
              </span>
            </div>
            <div className="news_list w-full h-auto clear-both float-left mt-[60px]">
              <ul className="relative z-[2]">
                {newsData?.map((item, i) => {
                  return (
                    <li
                      className="w-full py-[29px] px-0"
                      // data-img={urlFor(item?.image)?.url()}
                      key={i}
                    >
                      <div className="list_inner w-full clear-both h-auto flex items-center">
                        <span className="number w-[50px] min-w-[50px] h-[50px] text-center leading-[50px] inline-block rounded-full bg-[#b9b8c3] text-[#333] text-[16px] font-semibold font-poppins">
                          {`${i <= 9 ? 0 : ""}${i + 1}`}
                        </span>
                        <div className="details relative pl-[30px] ml-[29px]">
                          <div className="extra_metas">
                            <ul className="flex items-center flex-wrap mb-[2px]">
                              <li className="relative mr-[10px]">
                                <span className="text-[15px] text-[#777]">
                                  {item.date}
                                </span>
                              </li>
                              <li className="relative mr-[10px]">
                                <span className="text-[15px] text-[#777] pl-[10px]">
                                  <a
                                    className="text-[#777] transition-all duration-300 hover:text-[#000]"
                                    href="#"
                                    onClick={() => toggleModalFour(item)}
                                  >
                                    {item.tag}
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="post_title">
                            <h3 className="m-0 p-0 leading-[1] font-semibold">
                              <a href="#" onClick={() => toggleModalFour(item)}>
                                {item.title}
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
      {modalContent && (
        <Modal
          isOpen={isOpen4}
          onRequestClose={toggleModalFour}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={300}
          openTimeoutMS={300}
        >
          <div className="cavani_tm_modalbox opened">
            <div className="box_inner">
              <div className="close">
                <a href="#" onClick={toggleModalFour}>
                  <i className="icon-cancel" />
                </a>
              </div>
              <div className="description_wrap rounded-xl">
                <div className="news_popup_informations w-full h-auto clear-both float-left">
                  {modalContent?.image && (
                    <div className="image">
                      <img 
                      src={modalContent.image} 
                      alt={true.toString()} 
                      />
                      <div
                        className="main"
                        // data-img-url={urlFor(modalContent?.image)?.url()}
                        style={{ backgroundImage: `url(${modalContent.image})`}} // hard-coded background image
                      />
                    </div>
                  )}
                  <div className="details">
                    {modalContent?.date && (
                      <div className="meta">
                        <ul className="flex items-center flex-wrap mb-[2px]">
                          <li className="relative mr-[10px]">
                            <span className="text-[15px] text-[#777]">
                            {modalContent.date}
                            </span>
                          </li>
                          <li className="relative mr-[10px]">
                            <span className="text-[15px] text-[#777] pl-[10px]">
                              <a
                                className="text-[#777] transition-all duration-300 hover:text-[#000]"
                                href="#"
                              >
                                {modalContent.tag}
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    )}
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
                    {modalContent.content};
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
export default News;
