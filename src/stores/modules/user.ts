import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref<string | undefined>()

    const setToken = (tokenValue: string | undefined) => {
      token.value = tokenValue
    }

    const getToken = () => {
      return token.value
    }

    return {
      token,
      setToken,
      getToken,
    }
  },
  {
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
      },
    },
  },
)
