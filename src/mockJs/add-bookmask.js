import bookMasksData from '@/assets/bookMasksData'
export default {
  'http://localhost:8080/bookmask/add|post': options => {
    console.log(options.body)
    options.body = JSON.parse(options.body)

    // const bookIdIndex = bookMasksData.indexOf(options.body.bookId)
    const bookIdIndex = bookMasksData.findIndex(v => v.bookId === options.body.bookId)

    // 判断书签数据库是否已存在bookId
    if (bookIdIndex !== -1) {
      const chapterArr = bookMasksData[bookIdIndex].chapter
      // const chapterIdIndex = chapterArr.indexOf(options.body.chapterId)
      const chapterIdIndex = chapterArr.findIndex(v => v.chapterId === options.body.chapterId)
      // 判断该bookId下是否存在章节id
      if (chapterIdIndex !== -1) {
        const setionArr = chapterArr[chapterIdIndex].setion
        // 判断章节id下是否存在setionId
        if (setionArr.findIndex(v => v.setionId === options.body.setionId) === -1) setionArr.push({ setionId: options.body.setionId })
      } else {
        // 若章节下没有该setionId,在章节数组中添加新的chapter对象
        chapterArr.push({
          chapterId: options.body.chapterId,
          setion: [{ setionId: options.body.setionId }]
        })
      }
    } else {
      // 若书签数据库不存在bookId，新建一个bookId对象
      bookMasksData.push({
        bookId: options.body.bookId,
        chapter: [
          {
            chapterId: options.body.chapterId,
            setion: [{ setionId: options.body.setionId }]
          }
        ]
      })
    }

    return { data: options.body, message: 'ok', status: 200 }
  }
}
