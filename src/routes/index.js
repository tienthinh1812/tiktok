import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';

import { HeaderOnly, DefaultLayout } from '~/components/Layout';

const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/Following', component: Following, layout: DefaultLayout },
    { path: '/@:nickname', component: Profile, layout: DefaultLayout },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
