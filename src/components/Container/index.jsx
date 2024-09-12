import { useState } from "react";
import { FaCirclePlus, FaSquareInstagram } from "react-icons/fa6";
import { InputLabel, TextareaAutosize, TextField } from "@mui/material";
import { FaCamera, FaFacebook, FaGithub, FaTelegram } from "react-icons/fa";
import "./index.css";

function Container() {
  const [activeTab, setActiveTab] = useState("profile");

  const handleProfileClick = () => {
    setActiveTab("profile");
  };

  const handleCVVClick = () => {
    setActiveTab("cvv");
  };

  return (
    <>
      <div className="body">
        <h1>Sozlamalar</h1>
        <div className="block">
          <div className="main">
            <div className="main-profile">
              <button id="btn" onClick={handleProfileClick}>
                Profile
              </button>
              <button onClick={handleCVVClick}>CVV</button>

              {activeTab === "profile" && (
                <>
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
                </>
              )}

              {activeTab === "cvv" && (
                <div className="cvv-section">
                  <div className="camera1">
                    <FaCamera />
                  </div>
                  <div className="input-block">
                    <div className="input-group">
                      <InputLabel style={{ border: "none" }} htmlFor="surname">
                        Familya
                      </InputLabel>
                      <TextField
                        id="surname"
                        sx={{
                          "& .MuiInputBase-input": {
                            height: "10px", // Targeting the input element
                          },
                          "& fieldset": { border: "none" }, // Removing the border
                        }}
                      />
                    </div>
                    <div className="input-group">
                      <InputLabel style={{ border: "none" }} htmlFor="username">
                        Ism
                      </InputLabel>
                      <TextField
                        id="username"
                        sx={{
                          "& .MuiInputBase-input": {
                            height: "10px", // Targeting the input element
                          },
                          "& fieldset": { border: "none" }, // Removing the border
                        }}
                      />
                    </div>
                    <div className="input-group">
                      <InputLabel style={{ border: "none" }} htmlFor="login">
                        Login
                      </InputLabel>
                      <TextField
                        id="login"
                        sx={{
                          "& .MuiInputBase-input": {
                            height: "10px", // Targeting the input element
                          },
                          "& fieldset": { border: "none" }, // Removing the border
                        }}
                      />
                    </div>

                    <div className="input-group">
                      <InputLabel style={{ border: "none" }} htmlFor="email">
                        Email
                      </InputLabel>
                      <TextField
                        id="email"
                        sx={{
                          "& .MuiInputBase-input": {
                            width: "450px",
                            height: "10px", // Targeting the input element
                          },
                          "& fieldset": { border: "none" }, // Removing the border
                        }}
                        type="email"
                      />
                    </div>

                    <div className="input-group">
                      <InputLabel style={{ border: "none" }} htmlFor="job">
                        Kasb
                      </InputLabel>
                      <TextField
                        id="job"
                        sx={{
                          "& .MuiInputBase-input": {
                            width: "450px",
                            height: "10px", // Targeting the input element
                          },
                          "& fieldset": { border: "none" }, // Removing the border
                        }}
                      />
                    </div>
                    <div className="input-group">
                      <InputLabel style={{ border: "none" }} htmlFor="date">
                        Date of Birth
                      </InputLabel>
                      <TextField
                        id="date"
                        sx={{
                          "& .MuiInputBase-input": {
                            width: "450px",
                            height: "10px", // Targeting the input element
                          },
                          "& fieldset": { border: "none" }, // Removing the border
                        }}
                        type="date" // Setting the input type to 'time'
                      />
                    </div>
                  </div>

                  <div className="skills-buttons1">
                <button id="exit">Chiqish</button>
                <button id="save">Saqlab qolish</button>
              </div>
                </div>
              )}
            </div>

            {activeTab === "profile" && (
              <div className="inputs">
                <div className="input-group">
                  <InputLabel style={{ border: "none" }} htmlFor="username">
                    Ism
                  </InputLabel>
                  <TextField
                    id="username"
                    sx={{ "& fieldset": { border: "none" } }}
                  />
                </div>
                <div className="input-group">
                  <InputLabel htmlFor="surname">Familya</InputLabel>
                  <TextField
                    id="surname"
                    sx={{ "& fieldset": { border: "none" } }}
                  />
                </div>
                <div className="input-group">
                  <InputLabel htmlFor="number">Telefon raqam</InputLabel>
                  <TextField
                    type="phone"
                    id="number"
                    sx={{ "& fieldset": { border: "none" } }}
                  />
                </div>
                <div className="input-group">
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <TextField
                    type="email"
                    id="email"
                    sx={{ "& fieldset": { border: "none" } }}
                  />
                </div>
                <div className="textArea">
                  <InputLabel htmlFor="about">Men haqimda</InputLabel>
                  <TextareaAutosize
                    style={{ height: "190px", border: "none", outline: "none" }}
                  />
                </div>

                <div className="input-group">
                  <InputLabel htmlFor="country">Davlat</InputLabel>
                  <TextField
                    type="text"
                    id="country"
                    sx={{ "& fieldset": { border: "none" } }}
                  />
                </div>
                <div className="input-group">
                  <InputLabel htmlFor="city">Shahar</InputLabel>
                  <TextField
                    type="text"
                    id="city"
                    sx={{ "& fieldset": { border: "none" } }}
                  />
                </div>
                <div className="input-group">
                  <InputLabel htmlFor="town">Rayon</InputLabel>
                  <TextField
                    type="text"
                    id="town"
                    sx={{ "& fieldset": { border: "none" } }}
                  />
                </div>
              </div>
            )}
          </div>

          {activeTab === "profile" && (
            <div className="skills">
              <div className="input-group2">
                <InputLabel htmlFor="exprience">
                  Ish tajribasi <FaCirclePlus id="Circle4" />
                </InputLabel>
                <TextField
                  type="text"
                  id="exprience"
                  sx={{ "& fieldset": { border: "none" } }}
                />
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
          )}
        </div>
      </div>
    </>
  );
}

export default Container;
