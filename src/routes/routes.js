import { DefaultLayout, Headeronly } from '~/layouts';
import Home from '~/Page/Home';
import config from '~/config';
import Content from '~/layouts/components/Content';
import Content1 from '~/layouts/components/Content1';




const publicRoutes = [
    { path: config.routers.Home, component: Content ,layout: DefaultLayout},
    { path: config.routers.Abum, component: Content1 ,layout: DefaultLayout},
];
const privateRoutes = [

]
export { publicRoutes, privateRoutes }