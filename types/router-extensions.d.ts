// 扩展vue-router的类型定义
import 'vue-router'
declare module 'vue-router' {
  interface RouteMeta {
    /**
     * 页面中文标题
     * 注意：只在前端路由转菜单时生效
     */
    title?: string
    /**
     * 在菜单中隐藏当前路由
     * 注意：只在前端路由转菜单时生效
     */
    hideMenu?: boolean
    /**
     * 在系统的tab标签页中隐藏当前路由
     */
    hideTab?: boolean
    /**
     * 当前路由显示时应该激活的菜单路径。填写path
     */
    currentActiveMenu?: string
    /**
     * 是否需要KeepAlive缓存，不传或者传false则不缓存，传true则缓存
     */
    keepAlive?: boolean
  }
}
