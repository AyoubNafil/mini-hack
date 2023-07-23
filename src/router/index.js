// import { createWebHistory, createRouter, } from "vue-router";
import { createWebHashHistory, createRouter } from "vue-router";
//import axios from 'axios';
import routes from './routes';
import appConfig from "../../app.config";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  mode: 'hash',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 };
    }
  },
});

router.beforeResolve(async (routeTo, routeFrom, next) => {
  try {
    for (const route of routeTo.matched) {
      await new Promise((resolve, reject) => {
        if (route.meta && route.meta.beforeResolve) {
          route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
            if (args.length) {
              next(...args);
              reject(new Error('Redirected'));
            } else {
              resolve();
            }
          });
        } else {
          resolve();
        }
      });
    }
  } catch (error) {
    return;
  }
  document.title = routeTo.meta.title + ' | ' + appConfig.title;
  next();
});

export default router;
