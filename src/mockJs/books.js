import MockJS from 'mockjs'
var Random = MockJS.Random

export default {
  'http://localhost:8080/getbooks|get': option => {
    console.log(option)
    return {
      status: 200,
      msg: '获取书籍列表成功',
      data: [{
        books_id: 1,
        book_name: '斗罗大陆',
        book_image: 'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1012342846,1119351113&fm=179&app=35&f=JPEG?w=267&h=356&s=BD4C2FCA17F39FD84444B5080300F0C2',
        book_createTime: Random.date(), // 创建时间
        book_hasRead: Random.integer(0, 100), // 已经阅读了多少
        books_newRead: '', // 最新阅读时间
        books_author: '唐家三少',
        books_description: '唐门外门弟子唐三，因偷学内门绝学为唐门所不容，跳崖明志时却发现没有死，反而以另外一个身份来到了另一个世界，一个属于武魂的世界，名叫斗罗大陆。这里没有魔法，没有斗气，没有武术，却有神奇的武魂。这里的每个人，在自己六岁的时候，都会在武魂殿中令武魂觉醒。武魂有动物，有植物，有器物，武魂可以辅助人们的日常生活。而其中一些特别出色的武魂却可以用来修炼并进行战斗，这个职业，是斗罗大陆上最为强大也是最荣耀的职业——魂师,当唐门暗器来到斗罗大陆，当唐三武魂觉醒，他能否在这片武魂的世界再铸唐门的辉煌？他能否成为这个世界的主宰：神?'
      },
      {
        books_id: 2,
        book_name: '元尊',
        book_image: 'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2460754629,3137692230&fm=179&app=35&f=JPEG?w=240&h=320&s=4D47CF0854A12DA5E11845D3010050B2',
        book_createTime: Random.date(), // 创建时间
        book_hasRead: Random.integer(0, 100), // 已经阅读了多少
        books_newRead: '', // 最新阅读时间
        books_author: '天蚕土豆',
        books_description: '天地为炉，万物为铜，阴阳为炭，造化为工。气运之争，蟒雀吞龙。究竟是蟒雀为尊，还是圣龙崛起，凌驾众生？这是气掌乾坤的世界，磅礴宏伟，一气可搬山，可倒海，可翻天，可掌阴阳乾坤。世间源气分九品，三品称玄，六品成天，九品号圣。吾有一口玄黄气，可吞天地日月星。'
      },
      {
        books_id: 3,
        book_name: '斗破苍穹',
        book_image: 'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1714022596,3570728104&fm=179&app=35&f=JPEG?w=267&h=356&s=8111C5307F9247E35DC8A1C30300A0B7',
        book_createTime: Random.date(), // 创建时间
        book_hasRead: Random.integer(0, 100), // 已经阅读了多少
        books_newRead: '', // 最新阅读时间
        books_author: '天蚕土豆',
        books_description: '这里是属于斗气的世界，没有花俏艳丽的魔法，有的，仅仅是繁衍到巅峰的斗气！新书等级制度：斗者，斗师，大斗师，斗灵，斗王，斗皇，斗宗，斗尊，斗圣，斗帝。 吴磊、林允主演的同名电视剧9月3日起周一到周三每晚22：00登陆湖南卫视，腾讯视频全网独播。'
      },
      {
        books_id: 4,
        book_name: '傲视九重天',
        book_image: 'https://dss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/boxapp_novel/wh%3D267%2C357/sign=0ea80efe99eef01f4d4110c7d6c9b516/6a63f6246b600c333d636952174c510fd9f9a116.jpg',
        book_createTime: Random.date(), // 创建时间
        book_hasRead: Random.integer(0, 100), // 已经阅读了多少
        books_newRead: '', // 最新阅读时间
        books_author: '风凌天下',
        books_description: '一笑风雷震，一怒沧海寒；一手破苍穹，一剑舞长天！一人一剑，傲世九重天！'
      }, {
        books_id: 5,
        book_name: '雪中悍刀行',
        book_image: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2604723659,2647708035&fm=179&app=35&f=JPEG?w=240&h=320&s=337658975E9347F95EB59CF603004035',
        book_createTime: Random.date(), // 创建时间
        book_hasRead: Random.integer(0, 100), // 已经阅读了多少
        books_newRead: '', // 最新阅读时间
        books_author: '烽火戏诸侯',
        books_description: `江湖是一张珠帘。
            大人物小人物，是珠子，大故事小故事，是串线。
            情义二字，则是那些珠子的精气神。
            ————
            开始收官中。
            最终章将以那一声“小二上酒”结尾。
            【北京影视出版创作基金扶持作品】鸣谢北京市新闻出版广电局`
      }]
    }
  }
}
