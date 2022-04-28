import { lazy } from 'react'

const HomePage = lazy(() => import("./home"))
const DetailCollections = lazy(() => import("./detail-collections"))
const DetailNft = lazy(() => import("./detail-nft"))

const routes = [
    {
        path: "/",
        exact: true,
        public: true,
        component: DetailCollections
    },
    {
        path: "/collection/list",
        exact: true,
        public: true,
        component: HomePage
    },
    {
        path: "/nft/detail",
        exact: true,
        public: true,
        component: DetailNft
    },
]

export default routes