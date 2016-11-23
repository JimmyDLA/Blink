export default class AjaxAdapter {
  static getAuthUrl() {
    return fetch(`/api/utils/authurl`, {
    })
  }
}
