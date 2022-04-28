import { lazy } from 'react'

const HomePage = lazy(() => import("./home"))
const DetailCollections = lazy(() => import("./detail-collections"))
const DetailNft = lazy(() => import("./detail-nft"))
const CreateNft = lazy(() => import("./create-nft"))

const routes = [
    {
        path: "/",
        exact: true,
        public: true,
        component: HomePage
    },
    {
        path: "/collection/detail",
        exact: true,
        public: true,
        component: DetailCollections
    },
    {
        path: "/nft/detail",
        exact: true,
        public: true,
        component: DetailNft
    },
    {
        path: "nft/create",
        exact: true,
        public: true,
        component: CreateNft
    }
]

export default routes