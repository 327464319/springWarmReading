import bookMasksData from '@/assets/bookMasksData'
// import bookData from '@/assets/text'

export default {
  'http://localhost:8080/bookmask|get': options => {
    const arr = options.url.split('/')
    console.log(arr[arr.length - 1])
    return {
      message: 'ok',
      statsu: 200,
      data: bookMasksData.filter(v => v.bookId === parseInt(arr[arr.length - 1]))
    }
  }
}
