import { lazy } from 'react'

//Layouts:
import MarketLayout from '../components/layout/market-layout'
import GameLayout from '../components/layout/game-layout'

//Pages
const HomePage = lazy(() => import("./home"))
const DetailCollections = lazy(() => import("./detail-collections"))
const DetailNft = lazy(() => import("./detail-nft"))
const CreateNft = lazy(() => import("./create-nft"))
const ListNft = lazy(() => import("./list-nft"))
const LoginGame = lazy(() => import("./game/login"))
const Inventory = lazy(() => import("./game/inventory"))
const Admin = lazy(() => import("./admin"))
const HomeClaim = lazy(() => import("./game/home"))

const routes = [
    {
        path: "/inventory",
        exact: true,
        public: true,
        component: Inventory,
        layout: MarketLayout
    },
    {
        path: "/home-claim",
        exact: true,
        public: true,
        component: HomeClaim,
        layout: MarketLayout
    },
    {
        path: "/",
        exact: true,
        public: true,
        component: LoginGame,
        layout: MarketLayout
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
        path: "nft/create",
        exact: true,
        public: true,
        component: CreateNft,
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