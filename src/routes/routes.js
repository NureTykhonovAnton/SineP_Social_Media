import {
    ADD_ROUTE,
    CHAT_ROUTE, CREATE_COMMUNITY_ROUTE,
    DISCOVER_ROUTE, GROUP,
    HOME_ROUTE, INBOX_ROUTE,
    LOGIN_ROUTE,
    PROFILE_ROUTE,
    REGISTER_ROUTE,
    SETTINGS_ROUTE
} from "../uutils/consts";
import {Register} from "../pages/Register/Register";
import {Login} from "../pages/Login/Login";
import {Home} from "../pages/Home/Home";
import {Settings} from "../pages/Settings/Settings";
import {Profile} from "../pages/Profile/Profile";
import {Discover} from "../pages/Discover/Discover";
import {Chat} from "../pages/Chat/Chat";
import {Inbox} from "../pages/Inbox/Inbox";
import {Add} from "../pages/Add/Add";
import {CreateCommunity} from "../pages/CreateCommunity/CreateCommunity";
import {Group} from "../pages/Group/Group";

export const publicRoutes = [
    {
        path: REGISTER_ROUTE,
        Component: Register
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
];

export const privateRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
    {
        path: DISCOVER_ROUTE,
        Component: Discover
    },
    {
        path: CHAT_ROUTE,
        Component: Chat
    },
    {
        path: INBOX_ROUTE,
        Component: Inbox
    },
    {
        path: ADD_ROUTE,
        Component: Add
    },
    {
        path: CREATE_COMMUNITY_ROUTE,
        Component: CreateCommunity
    },
    {
        path: GROUP,
        Component: Group
    },
]
