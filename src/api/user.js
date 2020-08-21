import request from "@/utils/request";

export function login(data) {
  // return request({
  //   url: "/vue-element-admin/user/login",
  //   method: "post",
  //   data,
  // });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          token: 'token'
        }
      })
    }, 100);
  })
}

export function getInfo(token) {
  // return request({
  //   url: "/vue-element-admin/user/info",
  //   method: "get",
  //   params: {
  //     token,
  //   },
  // });


  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          roles: ['roles'],
          name: 'admin',
          avatar: 'admin',
          introduction: 'admin'
        }
      })
    }, 100);
  })
}

export function logout() {
  // return request({
  //   url: "/vue-element-admin/user/logout",
  //   method: "post",
  // });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 100);
  })
}