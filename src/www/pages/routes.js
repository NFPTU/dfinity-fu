import { lazy } from 'react'

const HomePage = lazy(() => import("./home"))
const DetailCollections = lazy(() => import("./detail-collections"))
const DetailNft = lazy(() => import("./detail-nft"))
const CreateNft = lazy(() => import("./create-nft"))
const ListNft = lazy(() => import("./list-nft"))
const LoginGame = lazy(() => import("./login-game"))
const Admin = lazy(() => import("./admin"))

const routes = [
    {
        path: "/",
        exact: true,
        public: true,
        component: LoginGame
    },
    {
        path: "/collection/detail",
        exact: true,
        public: true,
        component: DetailCollections
    },
    {
        path: "/nft/:id",
        exact: true,
        public: true,
        component: DetailNft
    },
    {
        path: "nft/create",
        exact: true,
        public: true,
        component: CreateNft
    },
    {
        path: "nft/list",
        exact: true,
        public: true,
        component: ListNft
    },
    {
        path: "admin",
        exact: true,
        public: true,
        component: Admin
    }
]

export default routes