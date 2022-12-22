import "@chatui/core/es/styles/index.less";
import "@chatui/core/dist/index.css";

import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatUI from "./components/ChatUI";
import SignupDetail from "./SignUpForm/SignUpDetail";
import LoginScreen from "./SignUpForm/LoginScreen";
import QuestionSelectorWindow from "./QuestionSelector/QuestionSelectorWindow";
import AboutUsPage from "./pages/AboutUs.Page/AboutUsPage";
import TermsOfUse from "./pages/TermsOfUse/TermsOfUse";
import Privacy from "./pages/Privacy/PrivacyPolicy";
import CoC from "./pages/CodeOfConduct/CoC";
import { useDispatch } from "react-redux";
import {
  userDataUpdate,
  locationUpdate,
  professionUpdate,
  addGoodSkill,
  addLearnSkill,
} from "./Redux/Store";

function App() {
  const dispatch = useDispatch();

  const email = localStorage.getItem("email");

  if (email) {
    fetch("http://doornextshop.com/finduser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => {
        if (!res) {
          return;
        }
        return res.json();
      })
      .then((res) => JSON.parse(res))
      .then((data) => {
        dispatch(
          userDataUpdate({
            email: data.email,
            name: data.name,
            username: data.username,
          })
        );
        dispatch(locationUpdate({ location: data.location }));
        dispatch(professionUpdate({ profession: data.profession }));
        dispatch(addGoodSkill({ goodskills: data.goodSkills }));
        dispatch(addLearnSkill({ learnskills: data.learnSkills }));
      });
  }

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/app/termsofuse" element={<TermsOfUse />} />
          <Route exact path="/app/aboutus" element={<AboutUsPage />} />
          <Route exact path="/app/privacypolicy" element={<Privacy />} />
          <Route exact path="/app/coc" element={<CoC />} />
          <Route exact path="/app/chat" element={<ChatUI />} />
          <Route exact path="/app/signup" element={<SignupDetail />} />
          <Route exact path="/app/login" element={<LoginScreen />} />
          <Route
            exact
            path="/app/question"
            element={<QuestionSelectorWindow />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
