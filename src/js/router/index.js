import Vue from 'vue'
import Router from 'vue-router'
import '../../css/reset.scss'
import Home from '../views/home.vue'
import Money from '../views/money.vue'
import Funny from '../views/funny.vue'
import Ious from '../views/ious.vue'
import Raise from '../views/raise.vue'
import Mine from '../views/mine.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/home",
            name: "home",
            component: Home,
            children: [
                {
                    path: 'fun',
                    name: 'fun',
                    component: Funny
                }
            ]
        },
        {
            path: '/money',
            name: 'money',
            component: Money
        },
        {
            path: '/ious',
            name: 'ious',
            component: Ious
        },
        {
            path: '/raise',
            name: 'raise',
            component: Raise
        },
        {
            path: '/mine',
            name: 'mine',
            component: Mine
        },
        {
            path: '/funny',
            name: 'funny',
            component: Funny
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})