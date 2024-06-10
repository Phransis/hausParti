import React from "react";

import Outside from "../assets/outside.png";
// import Logo from "../assets/logo.png";

function HomePage() {
  return (
    <>
      <div className="">
        <div className="">

        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
        quidem ex doloremque saepe magnam magni, eum et nesciunt dolore pariatur
        possimus. Quam laboriosam possimus, ad molestias veniam at ea expedita?
        </div>
        <img
          className=" container mx-auto pt-10 bImage "
          src={Outside}
          alt="Black youth partying"
        ></img>
        <div className=" section-uno h-14 bg-gradient-to-r from-purple-500 to-pink-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis,
          itaque tenetur quis repudiandae aut alias earum corporis perspiciatis.
          Ratione nobis numquam odio minima sapiente, voluptatum impedit
          perspiciatis quam error eum!
        </div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </>
  );
}

export default HomePage;
