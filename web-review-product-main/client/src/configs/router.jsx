import Home from "./../core/Home";
import Admin from "./../admin/Admin";
import ResetPassword from "./../user/ResetPassword";
import ForgotPassword from "./../user/ForgotPassword";
import Users from "./../user/Users";
import NewPost from "./../post/NewPost";
import SinglePost from "./../post/SinglePost";
import EditPost from "./../post/EditPost";
import EditProfile from "./../user/EditProfile";
import FindPeople from "./../user/FindPeople";
import Profile from "./../user/Profile";
import ContentSignIn from "../page/sign/ContentSignIn";
import ContentSignUp from "../page/sign/ContentSignUp";
import { ErrPage } from "../page/err";
import LandingPage from "./../page/landing/index";
import Trending from "../trending";
import Market from "../market";
import Members from "../members/index";

export const mainRouter = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/search",
    exact: false,
    Component: Users,
  },
  {
    path: "/members",
    exact: false,
    Component: Members,
  },
  {
    path: "/trending",
    exact: false,
    Component: Trending,
  },
  {
    path: "/market",
    exact: false,
    Component: Market,
  },
  {
    path: "/post/create",
    exact: false,
    Component: NewPost,
  },
  {
    path: "/post/:postId",
    exact: false,
    Component: SinglePost,
  },
  {
    path: "/post/edit/:postId",
    exact: false,
    Component: EditPost,
  },
  {
    path: "/setting",
    exact: false,
    Component: EditProfile,
  },
  {
    path: "/findPeople",
    exact: false,
    Component: FindPeople,
  },
  {
    path: "/user/:userId",
    exact: false,
    Component: Profile,
  },
];

export const adminRouter = [
  {
    path: "/admin",
    exact: true,
    Component: Admin,
  },
];

export const signRouter = [
  {
    path: "/landing",
    exact: false,
    Component: LandingPage,
  },
  {
    path: "/signIn",
    exact: false,
    Component: ContentSignIn,
  },
  {
    path: "/signUp",
    exact: false,
    Component: ContentSignUp,
  },
  {
    path: "/forgot-password",
    exact: false,
    Component: ForgotPassword,
  },
  {
    path: "/reset-password/:resetPasswordToken",
    exact: false,
    Component: ResetPassword,
  },
];
export const errRouter = [
  {
    Component: ErrPage,
  },
];
