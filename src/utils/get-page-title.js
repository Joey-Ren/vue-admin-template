/*
 * @Author: RenLe
 * @Date: 2020-09-23 15:35:29
 * @LastEditors: RenLe
 * @LastEditTime: 2020-09-23 16:02:34
 * @Description: file content
 * @FilePath: /vue-admin-template/src/utils/get-page-title.js
 */
import defaultSettings from '@/settings'

const title = defaultSettings.title || '阿乐的前端海洋'

export default function getPageTitle(pageTitle) {
  // if (pageTitle) {
  //   return `${pageTitle} - ${title}`
  // }
  return `${title}`
}
