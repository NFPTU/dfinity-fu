import { lazy } from 'react'

//Layouts:
import MarketLayout from '../components/layout/market-layout'
import GameLayout from '../components/layout/game-layout'
import GameLayoutHeader from '../components/layout/game-layout-header'

//Pages
const HomePage = lazy(() => import("./home"))
const DetailCollections = lazy(() => import("./detail-collections"))
const DetailNft = lazy(() => import("./detail-nft"))
const ListNft = lazy(() => import("./list-nft"))
const LoginGame = lazy(() => import("./game/login"))
const InventoryOld = lazy(() => import("./game/inventory"))
const Admin = lazy(() => import("./admin"))
const HomeClaim = lazy(() => import("./game/home"))
const Popup = lazy(() => import("../components/popup"))
const Breeding = lazy(() => import("./game/breeding"))
const Farming = lazy(() => import("./game/farming"))
const Nest = lazy(() => import("./game/nest"))
const Kingdom = lazy(() => import("./game/kingdom"))
const Market = lazy(() => import("./market"))
const Inventory = lazy(() => import("./inventory"))
const Battle = lazy(() => import("./game/battle"))
const DetailMarket = lazy(() => import("./detail-market"))

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
        path: "/inventory-old",
        exact: true,
        public: true,
        component: InventoryOld,
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
        path: "/kingdom",
        exact: true,
        public: true,
        component: Kingdom,
        layout: GameLayout
    },
    {
        path: "/market",
        exact: true,
        public: true,
        component: Market,
        layout: GameLayoutHeader
    },
    {
        path: "/inventory",
        exact: true,
        public: true,
        component: Inventory,
        layout: GameLayoutHeader
    },
    {
        path: "/detail/:id",
        exact: true,
        public: true,
        component: DetailMarket,
        layout: GameLayoutHeader
    },
    {
        path: "/battle",
        exact: true,
        public: true,
        component: Battle,
        layout: GameLayout
    },
    {
        path: "/login",
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
        path: "/",
        exact: true,
        public: true,
        component: Admin,
        layout: MarketLayout
    }
]

export default routes