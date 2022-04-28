import { lazy } from 'react'

const HomePage = lazy(() => import("./home"))
const ListCollections = lazy(() => import("./list-collections"))
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
        component: ListCollections
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