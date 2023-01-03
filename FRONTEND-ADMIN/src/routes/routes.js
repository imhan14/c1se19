import Login from "./../components/login/Login";
import Register from "./../components/register/Register";
import ForgotPassword from "./../components/forgotPassword/ForgotPassword";
import ChangePassword from "./../components/changePassword/ChangePassword";
import DefaultLayout from "../layout/defaultLayout/DefaultLayout";
import Service from "../layout/service/service";
import Home from "../layout/Home/Home";
import Favorite from "./../layout/favorite/Favorite";
import Sound from "./../layout/sound/sound";
import Profile from "../layout/profile/Profile";
import EditProfile from "./../layout/editProfile/EditProfile";
import UserManagement from "../containers/UserManagement";
import KeywordManagement from "../containers/KeywordManagement";
import SoundManagement from "../containers/SoundManagement";
import QuestionManagement from "../containers/QuestionManagement";

const routePulic = [
  {
    path: "/",
    component: DefaultLayout,
  },
  {
    path: "/home",
    component: Home,
    layout: null,
  },
  {
    path: "/service",
    component: Service,
    layout: null,
  },
  {
    path: "/favorite",
    component: Favorite,
    layout: null,
  },
  {
    path: "/sound",
    component: Sound,
    layout: null,
  },

  {
    path: "/login",
    component: Login,
    layout: "onlyLayout",
  },
  {
    path: "/profile",
    component: Profile,
    layout: null,
  },

  {
    path: "/editProfile",
    component: EditProfile,
    layout: null,
  },
  {
    path: "/user-management",
    component: UserManagement,
    layout: null,
  },
  {
    path: "/keyword-management",
    component: KeywordManagement,
    layout: null,
  },
  {
    path: "/question-management",
    component: QuestionManagement,
    layout: null,
  },
  {
    path: "/sound-management",
    component: SoundManagement,
    layout: null,
  },
];
export default routePulic;
