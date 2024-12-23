/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  // USE_PASSAGE: 'push-deer'

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxdcd47a9098743d35',
  // APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'f2427d392226888d7251769de73027c6',
  // APP_SECRET: '',

  PROVINCE: '北京',
  CITY: '通州区',
   SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    holidaytts: true,

    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: true,
  
    /** 生日消息和节日消息 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    birthdayMessage: true,
  
  },
  
  USERS: [
    {
      // 想要发送的人的名字
      name: '我自己',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oBNXl6zWpwWjSYw_pD4fM0ku3Tbk',
      // id: 'oBNXl61qtHOV8NSgkXbYSLkwqCWg',
      // id: 'PDU33294T27B8fVRKmLd9p8xF3jPOBmdej8ncGqrX',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'a33k3TYFlbAXBYstLRGVKyzZWTZgQYxK5vGjRcdC29s',
      // useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-19',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1998', date: '10-09',
        },
    
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        // {
        //   type: '节日', name: '恋爱纪念日', year: '2015', date: '09-20',
        // },
      ],
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2015-09-20' },
        { keyword: 'acquaintance_day', date: '2012-09-16' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '亲爱的臭宝儿',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      // id: 'oBNXl6zWpwWjSYw_pD4fM0ku3Tbk',
      id: 'oBNXl61qtHOV8NSgkXbYSLkwqCWg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'a33k3TYFlbAXBYstLRGVKyzZWTZgQYxK5vGjRcdC29s',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-09',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1998', date: '10-09',
        },
    
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '节日', name: '恋爱纪念日', year: '2015', date: '09-20',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2015-09-20' },
           { keyword: 'acquaintance_day', date: '2012-09-16' },
        // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

