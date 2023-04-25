import React from "react";
import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { addMessage } from "../utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  generateRandomName,
  generateRandomString,
  generateRandomEmoji,
} from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const message = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      // make api call inside
      dispatch(
        addMessage({
          name: generateRandomName(),
          message:
            generateRandomString(6) +
            " " +
            generateRandomString(4) +
            " " +
            generateRandomString(8) +
            " " +
            generateRandomEmoji() +
            generateRandomEmoji(),
        })
      );
    }, 5000);
    return () => clearInterval(i);
  }, []);
  // 🚀
  return (
    <>
      <div className="p-2 ml-2 w-full h-[600px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {message.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black flex rounded mt-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "acchu",
              message:
                liveMessage + generateRandomEmoji() + generateRandomEmoji(),
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="h-10 w-72 border px-2 border-black rounded-lg mt-2 shadow-lg"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="p-2 mt-1 ml-2  bg-green-100 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
