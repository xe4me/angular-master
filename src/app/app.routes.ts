import {FeedsComponent} from "./components/feeds/feeds.component";
import {HomeComponent} from "./components/home/home.component";
export const ROUTES = [
    {
        path: 'feeds',
        component: FeedsComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: '/home',
    }
];