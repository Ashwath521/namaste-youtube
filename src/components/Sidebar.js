import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // Early return pattern best practice
  if (!isMenuOpen) return null;
  // return (
  //   <div className="p-5 shadow-lg w-48">
  //     <ul className="font-bold w-24">
  //       <Link to="/">
  //         <li>🏠 Home</li>
  //       </Link>
  //       <li>▶️ Shorts</li>
  //       <li>🎥 Videos</li>
  //       <li>🎙️ live</li>
  //     </ul>
  //   </div>
  // );
  return (
    <div className="p-5 shadow-lg w-48">
      <ul className="font-bold w-24">
        <Link to="/">
          <li>🏠 Home</li>
        </Link>
        <li>▶️ Shorts</li>
        <li>🎥 Videos</li>
        <li>🎙️ live</li>
      </ul>
      <h1 className=" font-extrabold pt-2">Subscription</h1>
      <ul className="font-bold w-24">
        <li>🎵 Music</li>
        <li>🥅 Sports</li>
        <li>🎮 Gaming</li>
        <li>🎬 Movies</li>
      </ul>
      <h1 className="font-extrabold pt-5">Watch later</h1>
      <ul className="w-24 font-bold">
        <li>🎵 Music</li>
        <li>🥅 Sports</li>
        <li>🎮 Gaming</li>
        <li>🎬 Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
