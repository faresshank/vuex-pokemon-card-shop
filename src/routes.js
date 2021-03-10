import CardList from './components/CardList'
import Order from './components/Order'

export default [
    {
        path: '/',
        component: CardList,
        name: 'home'
    },
    {
        path: '/order',
        component: Order,
        name: 'order'
    }
]