import React from "react";
import PropTypes from "prop-types";

import WelcomeBanner from "@/components/pages/home/banner";
import SchoolPicture1 from "../../assets/images/photo/1.JPG"
function Home({
  title,
  subtitle,
  images,
  ctaLink,
  ctaText,
  ...rest
}) {
  return (
    <>
    {/* // TODO: update the welcomeBanner to include autoslide image carrousole from assets/images/photo_gallery */}
        <WelcomeBanner title={title} subtitle={subtitle} images={images}/>
    </>
  );
}

Home.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string
};

Home.defaultProps = {
  title: "গিধাঊষা হাসন আলী উচ্চ বিদ্যালয়ের ওয়েব সাইটে আপনাকে স্বাগতম",
  subtitle:
    "TODO: This is the subheader section where you the mission statement",
//   images: "https://source.unsplash.com/collection/404339/800x600",
images: "/images/photo/1.JPG",

  ctaLink: "/about"
};

export default Home;

