import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref<string | null>(null)

    const setToken = (tokenValue: string) => {
      token.value = tokenValue
    }

    const getToken = () => {
      return token.value
    }

    return {
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
