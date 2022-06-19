import { lazy } from 'react'

//Layouts:
import MarketLayout from '../components/layout/market-layout'
import GameLayout from '../components/layout/game-layout'

//Pages
const HomePage = lazy(() => import("./home"))
const DetailCollections = lazy(() => import("./detail-collections"))
const DetailNft = lazy(() => import("./detail-nft"))
const ListNft = lazy(() => import("./list-nft"))
const LoginGame = lazy(() => import("./game/login"))
const Inventory = lazy(() => import("./game/inventory"))
const Admin = lazy(() => import("./admin"))
const HomeClaim = lazy(() => import("./game/home"))
const Popup = lazy(() => import("../components/popup"))
const Breeding = lazy(() => import("./game/breeding"))
const Farming = lazy(() => import("./game/farming"))
const Nest = lazy(() => import("./game/nest"))
const Kingdom = lazy(() => import("./game/kingdom"))

const routes = [
    {
        path: "/queen",
        exact: true,
        public: true,
        component: Breeding,
        layout: GameLayout
    },
    {
        path: "/test-popup",
        exact: true,
        public: true,
        component: Popup,
        layout: null
    },
    {
        path: "/inventory",
        exact: true,
        public: true,
        component: Inventory,
        layout: GameLayout
    },
    {
        path: "/home-claim",
        exact: true,
        public: true,
        component: HomeClaim,
        layout: GameLayout
    },
    {
        path: "/land",
        exact: true,
        public: true,
        component: Farming,
        layout: GameLayout
    },
    {
        path: "/nest",
        exact: true,
        public: true,
        component: Nest,
        layout: GameLayout
    },
    {
        path: "/",
        exact: true,
        public: true,
        component: Kingdom,
        layout: GameLayout
    },
    {
        path: "/",
        exact: true,
        public: true,
        component: LoginGame,
        layout: null
    },
    {
        path: "/collection/detail",
        exact: true,
        public: true,
        component: DetailCollections,
        layout: MarketLayout
    },
    {
        path: "/nft/:id",
        exact: true,
        public: true,
        component: DetailNft,
        layout: MarketLayout
    },
    {
        path: "nft/list",
        exact: true,
        public: true,
        component: ListNft
    },
    {
        path: "/admin",
        exact: true,
        public: true,
        component: Admin,
        layout: MarketLayout
    }
]

export default routes