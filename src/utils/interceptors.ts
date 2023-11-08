import { useUserStore } from '@/stores'

const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net/'

const requestInterceptor = {
  invoke(args: UniApp.RequestOptions) {
    console.log('invoke')
    console.log(args)

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

    console.log('')
  },
  success(res: UniApp.RequestSuccessCallbackResult) {
    console.log('success')
    console.log(res)
    console.log('')
  },
  fail(err) {
    console.log('fail')
    console.log(err)

    console.log('')
  },
  complete(res) {
    console.log('complete')
    console.log('')
  },
}

uni.addInterceptor('request', requestInterceptor)
uni.addInterceptor('uploadFile', requestInterceptor)
