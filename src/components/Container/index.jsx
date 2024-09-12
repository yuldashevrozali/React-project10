import { FaCirclePlus, FaSquareInstagram } from "react-icons/fa6";
import { InputLabel, TextareaAutosize, TextField } from "@mui/material";
import { FaCamera, FaFacebook, FaGithub, FaTelegram } from "react-icons/fa";
import './index.css'

function Container() {
  return (
    <>
      <div className="body">
        <h1>Sozlamalar</h1>
        <div className="block">
          <div className="main">
            <div className="main-profile">
              <button id="btn">Profile</button>
              <button>CVV</button>
              <div className="camera">
                <FaCamera />
              </div>
              <h1>Abduqodirov Bobur</h1>
              <div className="instagram">
                <FaSquareInstagram />
                <p>@bobur_06</p>
              </div>
              <div className="telegram">
                <FaTelegram />
                <h2>Telegram</h2>
                <FaCirclePlus id="Circle" />
              </div>
              <div className="telegram">
                <FaGithub />
                <h2>Git hub</h2>
                <FaCirclePlus id="Circle2" />
              </div>
              <div className="telegram">
                <FaFacebook />
                <h2>Facebook</h2>
                <FaCirclePlus id="Circle3" />
              </div>
            </div>
            <div className="inputs">
              <div className="input-group">
                <InputLabel htmlFor="username">Ism</InputLabel>
                <TextField id="username" />
              </div>
              <div className="input-group">
                <InputLabel htmlFor="surname">Familya</InputLabel>
                <TextField id="surname" />
              </div>
              <div className="input-group">
                <InputLabel htmlFor="number">Telefon raqam</InputLabel>
                <TextField type="phone" id="number" />
              </div>
              <div className="input-group">
                <InputLabel htmlFor="email">Email</InputLabel>
                <TextField type="email" id="email" />
              </div>
              <div className="textArea">
                <InputLabel htmlFor="email">Men haqimda</InputLabel>
                <TextareaAutosize
                  style={{ height: "190px", border: "none", outline: "none" }}
                />
              </div>

              <div className="input-group">
                <InputLabel htmlFor="country">Davlat</InputLabel>
                <TextField type="text" id="country" />
              </div>
              <div className="input-group">
                <InputLabel htmlFor="city">Shahar</InputLabel>
                <TextField type="text" id="city" />
              </div>
              <div className="input-group">
                <InputLabel htmlFor="town">Rayon</InputLabel>
                <TextField type="text" id="town" />
              </div>
            </div>
          </div>
          <div className="skills">
            <div className="input-group2">
              <InputLabel htmlFor="exprience">
                Ish tajribasi <FaCirclePlus id="Circle4" />
              </InputLabel>
              <TextField type="text" id="exprience" />
            </div>
            <InputLabel id="label1" htmlFor="exprience">
              Ta'lim <FaCirclePlus id="Circle4" />
            </InputLabel>
            <InputLabel id="label1" htmlFor="exprience">
              Mahorotlar <FaCirclePlus id="Circle4" />
            </InputLabel>
            <InputLabel id="label1" htmlFor="exprience">
              Akademik test natijalari <FaCirclePlus id="Circle4" />
            </InputLabel>
            <InputLabel id="label1" htmlFor="exprience">
              Tadqiqiqot tajribasi <FaCirclePlus id="Circle4" />
            </InputLabel>
            <div className="skills-buttons">
              <button id="exit">Chiqish</button>
              <button id="save">Saqlab qolish</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Container;
