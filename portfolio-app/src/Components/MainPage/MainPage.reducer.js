import { handleActions } from "redux-actions";
import { ACTION_TYPES } from "./MainPage.constant";
import { produce } from "immer";
import ReactjsFillIcon from "remixicon-react/ReactjsFillIcon";
import Html5FillIcon from "remixicon-react/Html5FillIcon";
import Css3FillIcon from "remixicon-react/Css3FillIcon";
import VuejsFillIcon from "remixicon-react/VuejsFillIcon";
// import JavascriptFillIcon from "remixicon-react/java";
import cardImg from "../Assets/Img/cardImg.svg";
import gameCard from "../Assets/Img/cardImggame.svg";
import cardEteram from "../Assets/Img/cardImgEtheram.svg";


const initialState = {
  loading: false,
  hamburger: false,
  dashboard: [],
  home: [],
  about: [],
  typeofProject: [{ icon: <ReactjsFillIcon />, name: 'React' }, { icon: <Html5FillIcon />, name: 'HTML' }, { icon: <Css3FillIcon />, name: 'CSS' }],
  projects: [
    {
      project: "react",
      title: "Drop KIck",
      img :cardImg,
      about_us: "Duis aute irure dolor in velit esse cillum dolore.",
      Project_Icon: <ReactjsFillIcon />,
      project_link: 'https://github.com/miabubacker/kick-app'
    },
    {
      project: "react",
      title: "tesla ",
      img: gameCard,
      about_us: "Duis aute irure dolor in velit esse cillum dolore.",
      Project_Icon: <ReactjsFillIcon />,
      project_link: 'https://github.com/miabubacker/kick-app'
    },
    {
      project: "html",
      title: "layout",
      img:cardEteram,
      about_us: "Duis aute irure dolor in velit esse cillum dolore.",
      Project_Icon: <VuejsFillIcon/>,
      project_link: 'https://github.com/miabubacker/kick-app'
    },
      // {
      //   project: "css",
      //   title: " resposive",
      //   about_us: "Duis aute irure dolor in velit esse cillum dolore.",
      //   projectIcon: <Css3FillIcon />,
      //   project_link: 'https://github.com/miabubacker/kick-app'
      // },
  ],
  headers: ["_hello", "_about-me", "_projects"],
  filterProjects: [],
};

export default handleActions(
  {
    [ACTION_TYPES.LOADER]: (state, { data } = {}) =>
      produce(state, (draft) => {
        draft.loading = true;
      }),

    [ACTION_TYPES.MENUBAR]: (state, { data } = {}) =>
      produce(state, (draft) => {
        draft.hamburger = !state.hamburger;
      }),
    [ACTION_TYPES.PROJECT]: (state, { data } = {}) =>
      produce(state, (draft) => {
        draft.filterProjects = data;
      })
  },
  initialState
);
