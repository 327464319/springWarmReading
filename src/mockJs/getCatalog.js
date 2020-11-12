import bookData from '@/assets/text'
const backBookData = {
  book_id: 0,
  book_name: '',
  chapter: []

}

export default {
  'http://localhost:8080/catalog|get': options => {
    // 如果是post请求  options.body
    // 如果是get请求 options.url
    options.body = JSON.parse(options.body)

    const bookObj = bookData.filter(v => {
      return v.book_id === options.body.bookId
    })

    // 如果请求体为空，读取目录接口
    if (!options.body.chapterId && options.body.chapterId !== 0) {
      backBookData.book_id = bookObj[0].book_id
      backBookData.book_name = bookObj[0].book_name
      let index = 0
      let oldChapter = -1
      // 双重循环将数据库目录写入要返回请求的对象
      bookObj[0].bookContents.forEach(v => {
        if (oldChapter === -1) oldChapter = v.chapter_id
        backBookData.chapter.push({
          chapter_id: v.chapter_id,
          title: v.title,
          setion: []
        })
        if (v.chapter_id !== oldChapter) {
          index++
          oldChapter = v.chapter_id
        }
        v.setions.forEach(v => {
          backBookData.chapter[index].setion.push({
            setion_id: v.setion_id,
            location_id: v.locationId,
            title: v.title,
            locationId: v.locationId
          })
        })
      })
      // 将写好的数据对象返回
      return backBookData
    }

    return bookObj[0].bookContents.filter(v => {
      return v.chapter_id === options.body.chapterId
    })
  }
}
