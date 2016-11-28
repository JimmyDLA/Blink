export default class AjaxAdapter {
  static checkSession() {
    return fetch(`/api/checkSession`, {
      credentials: 'include'
    })
  }
  static getUserData() {
    return fetch('/api/getUserData', {
      credentials: 'include'
    })
    .then((r) => r.json())
    .then((data) => {
      if(data.redirectUrl) {
        window.location = data.redirectUrl;
      } else {
        return data
      }
    })
  }
  static googleSearch(searchTerms) {
    const payload = { searchTerms }
    return fetch('/api/googleSearch', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(payload)
    })
    .then((r) => r.json())
  }

  static deathSearch(death) {
    const payload = { death }
    return fetch('/api/getUserData', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET',
      body: JSON.stringify(payload)
    })
    .then((r) => r.json())
  }


  static saveDOB(dobInput) {
    const payload = {...dobInput}
    return fetch ('/api/saveDOB', {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(payload)
    })
  }
  static addToBucket(bucketItem, user_id) {
    const payload = {user_id, status: 'pending', ...bucketItem}
    return fetch('/api/bucket', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(payload)
    })
  }
}
