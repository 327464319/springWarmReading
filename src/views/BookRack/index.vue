<template>
  <div>
    书架
    <button @click="getBooks">获取books</button>
  </div>
</template>

<script>
import { getBookList } from '@/api/books'
export default {
  name: 'BookRack',
  methods: {
    async getBooks () {
      const data = await getBookList()
      console.log(data)
    }
  }
}

</script>

<style lang="scss" scoped>
</style>
