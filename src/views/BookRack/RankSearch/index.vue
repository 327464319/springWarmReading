<template>
  <div class="ranch-search">
    <!-- 搜索栏 -->
    <div class="top-search">
      <div class="left-icon" @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="center-input">
        <input
          type="text"
          v-model.trim="value"
          @focus="showSuggetion = false"
        />
      </div>
      <div class="search-button">
        <button type="button" @click="toSearch">搜索</button>
      </div>
    </div>

    <div class="middle-content">
      <div v-if="!showSuggetion">
        <!-- 推荐栏 -->
        <recommend :rcmdList="rcmdList" @sort-list="sort"></recommend>
        <!-- 历史搜索 -->
        <history
          :historyList="historyList"
          @clear-all="removeHistory"
        ></history>
      </div>
      <!-- 搜索结果 -->
      <result v-else></result>
    </div>
  </div>
</template>

<script>
import { getrcmdList } from '@/api/books'
import { setItem, getItem, removeItem } from '@/utils/storage'
import Recommend from './Recommend'
import History from './History'
// import Suggestion from './Suggestion'
import Result from './Result'

export default {
  name: 'RankSearch',
  data () {
    return {
      rcmdList: [],
      value: '',
      historyList: getItem('historyList') || [],
      suggestionList: ['去吧'],
      showSuggetion: false
    }
  },
  components: { Recommend, History, Result },
  created () {
    this.getRcmdList()
  },
  methods: {
    async getRcmdList () {
      try {
        const { data: res } = await getrcmdList()
        console.log(res)
        if (res.status !== 200) this.$toast.fail('获取推荐列表失败')
        this.rcmdList = res.data
      } catch (error) {
        this.$toast.fail('获取推荐列表失败')
      }
    },
    toSearch () {
      // console.log(this.value)
      // 历史记录查重
      console.log(this.value.length)
      if (this.value.length === 0) {
        this.$toast.fail('请输入要搜索的关键字')
      } else {
        this.historyList = this.historyList.filter(item => {
          return item.name !== this.value
        })

        this.historyList.unshift({ htyId: this.historyList.length, name: this.value })
        setItem('historyList', this.historyList)
        this.showSuggetion = true
      }

      // this.value = ''

      this.value = ''
    },
    removeHistory () {
      removeItem('historyList')
      this.historyList = []
    },
    // toFindresult () {
    //   this.showSuggetion = this.value.length !== 0
    // },
    // 推荐数组随机排序
    sort () {
      const cloneArr = this.rcmdList.concat()
      const len = cloneArr.length
      for (var i = 0; i < len; i++) {
        const index = Math.floor(Math.random() * cloneArr.length)
        const temp = cloneArr[index]
        cloneArr[index] = cloneArr[i]
        cloneArr[i] = temp
      }
      this.rcmdList = cloneArr
    }
  }
}
</script>

<style lang="scss" scoped>
.ranch-search {
  .top-search {
    margin-top: 10px;
    overflow: hidden;
    .left-icon {
      float: left;
      width: 40px;
      height: 31px;
      line-height: 35px;
      text-align: center;
      .van-icon {
        font-size: 20px;
      }
    }
    .search-button {
      float: left;
      button {
        width: 50px;
        height: 31px;
        font-size: 14px;
        white-space: nowrap;
        border: 0;
        margin-left: 10px;
        background-color: #fff;
      }
    }
    .center-input {
      float: left;
      height: 31px;
      width: 250px;
      input {
        width: 98%;
        outline: none;
        border: 1px solid #ccc;
        border-radius: 3px;
        font-size: 18px;
        padding-left: 10px;
        color: #777;
      }
    }
  }
}
</style>
