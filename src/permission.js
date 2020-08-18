import router from './router'
import NProgress from 'nprogress' // 页面加载进度条
import 'nprogress/nprogress.css'
import {
    getToken
} from '@/utils/auth'

NProgress.configure({
    showSpinner: false
})

router.beforeEach(async (to, from, next) => {
    NProgress.start()
    const hasToken = getToken()
    if (hasToken) {
        if (to.path === '/login') {
            next({
                path: '/'
            })
            NProgress.done()
        } else {
            next()
        }
    } else {
        if (to.path === '/login') { // 这就是跳出循环的关键
            next()
        } else {
            next('/login')
        }
        NProgress.done()
    }
})

router.afterEach(() => {
    NProgress.done()
})