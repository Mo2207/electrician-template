import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import SectionContainer from "../layout/SectionContainer";
import { imgToSvg } from "../utils";
// import { urlFor } from "@/libs/sanity";
// import { PortableText } from "@portabletext/react";

const Service = () => {

  useEffect(() => {
    imgToSvg();
  }, []);

  const services = [
    {
      img: "/assets/img/service/",
      icon: "/assets/img/service/",
      text: "Fast and efficient electrical repairs for your home and business.",
      date: "Updated: January 3, 2025",
      title: "Electrical Repairs",
      text1:
        "Our skilled electricians provide reliable and timely repair services to ensure your electrical systems are functioning safely.",
      text2:
        "From fixing faulty wiring to addressing power outages, we’re here to handle all your repair needs with precision and expertise.",
      text3:
        "Trust us to deliver high-quality repairs that keep your property safe and powered.",
    },
    {
      img: "/assets/img/service/",
      icon: "/assets/img/service/",
      text: "Upgrade your home with safe and modern electrical installations.",
      date: "Updated: January 3, 2025",
      title: "Electrical Installations",
      text1:
        "We specialize in installing electrical systems that meet the highest safety standards and match your unique requirements.",
      text2:
        "Whether you need new lighting, outlets, or a complete system upgrade, our team is equipped to handle it all.",
      text3:
        "Experience the convenience and safety of expertly installed electrical solutions.",
    },
    {
      img: "/assets/img/service/",
      icon: "/assets/img/service/",
      text: "Ensure your property is up to code with our professional inspections.",
      date: "Updated: January 3, 2025",
      title: "Electrical Inspections",
      text1:
        "Our certified electricians provide comprehensive inspections to identify potential hazards and ensure compliance with regulations.",
      text2:
        "We offer peace of mind by thoroughly assessing your electrical systems for safety and efficiency.",
      text3:
        "Protect your home or business with regular inspections from our trusted experts.",
    },
    {
      img: "/assets/img/service/",
      icon: "/assets/img/service/",
      text: "Power your home with sustainable and reliable solar energy solutions.",
      date: "Updated: January 3, 2025",
      title: "Solar Panel Services",
      text1:
        "We offer professional solar panel installation and maintenance to help you harness the power of the sun.",
      text2:
        "Reduce your energy bills and your environmental impact with our high-quality solar solutions.",
      text3:
        "Trust our team to design and implement a system that meets your energy needs.",
    },
    {
      img: "/assets/img/service/",
      icon: "/assets/img/service/",
      text: "Illuminate your space with our custom lighting solutions.",
      date: "Updated: January 3, 2025",
      title: "Lighting Design",
      text1:
        "Enhance your home or office with beautiful and energy-efficient lighting designed to suit your style and function.",
      text2:
        "We provide expert recommendations and installations for ambient, task, and accent lighting.",
      text3:
        "Bring your vision to life with tailored lighting solutions that transform your space.",
    },
    {
      img: "/assets/img/service/",
      icon: "/assets/img/service/",
      text: "Stay powered through outages with our backup generator services.",
      date: "Updated: January 3, 2025",
      title: "Generator Installation",
      text1:
        "Ensure your home or business has a reliable power source during unexpected outages with our generator installation services.",
      text2:
        "Our team installs and maintains generators to provide peace of mind and uninterrupted power.",
      text3:
        "Be prepared for any power disruption with our expert generator solutions.",
    },
  ]; 

  const [isOpen7, setIsOpen7] = useState(false);
  const [modalContent, setModalContent] = useState({});

  function toggleModalFour() {
    setIsOpen7(!isOpen7);
  }

  return (
    <Fragment>
      <SectionContainer className="cavani_tm_section" navName="service">
        <div className="section_inner">
          <div className="cavani_tm_service w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Services
              </span>
            </div>
            <div className="service_list w-full h-auto clear-both float-left mt-[60px]">
              <ul className="ml-[-50px] flex flex-wrap">
                {services?.map((item, i) => (
                  <li className="mb-[50px] w-1/2 pl-[50px]" key={i}>
                    <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[#b9b8c3] border py-[70px] px-[40px] text-center transition-all duration-300 hover:bg-[#333] rounded-xl">
                      <Image
                        // className="svg inline-block max-w-[60px] max-h-[60px] w-full h-full text-[#333] mb-[27px] transition-all duration-300"
                        className="inline-block w-[60px] h-[60px] text-[#333] mb-[27px] transition-all duration-300 mx-auto"
                        src={item.icon}
                        alt={true.toString()}
                        width={60}
                        height={60}
                      />
                      <h3 className="title font-medium text-[24px] text-[#333] mb-[15px] transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text transition-all duration-300">
                        {item.text1}
                      </p>
                      <a
                        className="cavani_tm_full_link"
                        href="#"
                        onClick={() => {
                          setModalContent(item);
                          toggleModalFour();
                        }}
                      />
                      {/* Modalbox Info Start */}
                      {/* <img
                        className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                        src={urlFor(item?.image)?.url()}
                        alt={true.toString()}
                      /> */}
                    </div>
                  </li>
                ))}
                {/* {services.map((item, i) => (
                  <li className="mb-[50px] w-1/2 pl-[50px]" key={i}>
                    <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[#b9b8c3] border py-[70px] px-[40px] text-center transition-all duration-300 hover:bg-[#333]">
                      <img
                        className="svg inline-block w-[60px] h-[60px] text-[#333] mb-[27px] transition-all duration-300"
                        src={item.icon}
                        alt={true.toString()}
                      />
                      <h3 className="title font-medium text-[24px] text-[#333] mb-[15px] transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text transition-all duration-300">
                        {item.text}
                      </p>
                      <a
                        className="cavani_tm_full_link"
                        href="#"
                        onClick={() => {
                          setModalContent(item);
                          toggleModalFour();
                        }}
                      />
                      <img
                        className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                        src={item.img}
                        alt={true.toString()}
                      />
                    </div>
                  </li>
                ))} */}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
      {modalContent?.title && (
        <Modal
          isOpen={isOpen7}
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
              <div className="description_wrap">
                <div className="service_popup_informations w-full h-auto clear-both float-left">
                  <div className="image">
                    <img src="assets/img/thumbs/4-2.jpg" alt={true.toString()} />
                    {modalContent?.img && (
                      <div
                        className="main"
                        // data-img-url={urlFor(modalContent?.image)?.url()}
                        style={{
                          backgroundImage: `url(${modalContent.img})`,
                        }} // hard-coded background image
                      />
                    )}
                  </div>
                  <div className="main_title">
                    <h3>{modalContent.title}</h3>
                  </div>
                  <div className="descriptions w-full float-left">
                    <p className="mb-[15px]">{modalContent.text1}</p>
                    <p className="mb-[15px]">{modalContent.text2}</p>
                    <p>{modalContent.text3}</p>
                    {/* <PortableText
                      value={modalContent?.content}
                    /> */}
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
export default Service;
