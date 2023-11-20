import { useUserStore } from '@/stores'
import type { ResponseType } from '@/types/global'

const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const requestInterceptor = {
  invoke(args: UniApp.RequestOptions) {
    // console.log('invoke')
    // console.log(args)

    const url = args.url
    if (!url.startsWith('http')) args.url = baseUrl + url

    args.timeout = 10000

    args.header = {
      ...args.header,
      'source-client': 'miniapp',
    }

    const userStore = useUserStore()
    const token = userStore.getToken()
    if (token) {
      args.header['Authorization'] = token
    }

    // console.log('')
  },
  success(res: UniApp.RequestSuccessCallbackResult) {
    // console.log('success')
    // console.log(res)
    // console.log('')
  },
  fail(err) {
    // console.log('fail')
    // console.log(err)
    // console.log('')
  },
  complete(res) {
    // console.log('complete')
    // console.log('')
  },
}

uni.addInterceptor('request', requestInterceptor)
uni.addInterceptor('uploadFile', requestInterceptor)

export const request = <T>(options: UniApp.RequestOptions) => {
  return new Promise<ResponseType<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(result) {
        console.log(result)

        const statusCode = result.statusCode
        if (statusCode >= 200 && statusCode < 300) resolve(result.data as ResponseType<T>)
        else if (statusCode === 401) {
          useUserStore().setToken(undefined)
          uni.navigateTo({ url: '/pages/login/login' })
          reject(result)
        } else {
          uni.showToast({
            title: (result.data as ResponseType<T>).msg ?? '未知错误',
            icon: 'none',
          })
          reject(result)
        }
      },
      fail(error) {
        uni.showToast({
          // title: JSON.stringify(error.errMsg),
          title: '网络错误',
          icon: 'none',
        })
        reject(error)
      },
    })
  })
}
