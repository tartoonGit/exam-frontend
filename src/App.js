import React, { useState } from "react";
import Confirmbtn from "./components/confirmBTN";
import Textbtn from "./components/textBTN";
import Inputname from "./components/Inputname";
const App = () => {
  //data
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [title, setTitle] = useState("");
  const Page1 = document.getElementById("Page1");
  const Page2 = document.getElementById("Page2");
  const Page3 = document.getElementById("Page3");
  const Page4 = document.getElementById("Page4");
  //function
  const NameHandleChange = (e) => {
    setName(e.target.value);
    document.getElementById("Confirmbtn").classList.add("up");
  };

  const RoomHandleChange = (e) => {
    setRoom(e.target.value);
  };

  const CreateName = (e) => {
    Page1.classList.add("display-none");
    Page2.classList.remove("display-none");
    setTimeout(function () {
      Page2.classList.add("up");
    }, 100);
  };

  const updateP2toP3 = (e) => {
    Page2.classList.add("display-none");
    Page3.classList.remove("display-none");
    setTimeout(function () {
      Page3.classList.add("up");
      Page2.classList.remove("up");
    }, 100);
  };
  const Back = (e) => {
    setTitle("");
    Page3.classList.add("display-none");
    Page2.classList.remove("display-none");
    setTimeout(function () {
      Page2.classList.add("up");
      Page3.classList.remove("up");
    }, 100);
  };

  const CreateRoom = (e) => {
    setTitle("สร้างห้องใหม่");
    updateP2toP3();
  };
  const ConnectRoom = (e) => {
    setTitle("เข้าร่วมแชท");
    updateP2toP3();
  };
  const ConnectChat = (e) => {
    Page3.classList.add("display-none");
    Page4.classList.remove("display-none");
    setTimeout(function () {
      document.getElementById("Room").classList.add("up");
    }, 100);
    setTimeout(function () {
      document.getElementById("Chat").classList.add("left");
    }, 200);
    setTimeout(function () {
      document.getElementById("Inputchat").classList.add("bottom");
    }, 300);
  };
  //html
  let html = (
    <div className="app">
      <img className="logo" src={require("../src/assets/images/logo.png")} />
      <div className="container flex justify-center">
        <div id="Page1" className="pa-48 py-gutter-18 text-center">
          <div className="title">ชื่อของคุณ</div>
          <div>
            <Inputname handleChange={NameHandleChange} />
          </div>
          <div id="Confirmbtn" className="slide-top">
            <Confirmbtn
              text="ยืนยัน"
              size="28px"
              width="150px"
              height="70px"
              handleChange={CreateName}
            />
          </div>
        </div>
        <div id="Page2" className="pa-48 slide-top display-none text-center">
          <div className="title">คุณ {name}</div>
          <div className="h100 justify-center flex column py-gutter-18">
            <div>
              <Confirmbtn
                text="สร้างห้องใหม่"
                size="37px"
                width="400px"
                height="100px"
                handleChange={CreateRoom}
              />
            </div>
            <div>
              <Textbtn
                text="เข้าร่วมแชท"
                size="37px"
                handleChange={ConnectRoom}
              />
            </div>
          </div>
        </div>
        <div
          id="Page3"
          className="pa-48 slide-top display-none text-center py-gutter-18"
        >
          <div className="title">{title}</div>
          <div>
            <Inputname handleChange={RoomHandleChange} />
          </div>
          <div className="flex items-center justify-center px-gutter-62">
            <Textbtn text="กลับ" size="28px" handleChange={Back} />
            <Confirmbtn
              text={title == "สร้างห้องใหม่" ? "ยืนยัน" : "เข้าร่วม"}
              size="28px"
              width="150px"
              height="70px"
              handleChange={ConnectChat}
            />
          </div>
        </div>
        <div id="Page4" className="pa-18 w100 display-none ">
          <div id="Room" className="title slide-top">
            ห้อง {room}
          </div>
          <div id="Chat" className="container-chat relative slide-left">
            <div className="text-namechat">คุณ eiei</div>
            <div className="chat flex items-center">สวัสดี</div>
            <div
              id="Inputchat"
              className="absolute w100 slide-bottom"
              style={{ left: 0 }}
            >
              <Inputname
                width="calc(100% - 6px)"
                placeholder="Enter เพื่อส่ง"
                handleChange={RoomHandleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return html;
};

export default App;
