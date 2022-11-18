export default{
  name:'about',
  title:'About',
  type: 'document',
  fields:[
      {
          name:'name',
          title:'Name',
          type:'string'
      },
      {
          name:'title',
          title:'Title',
          type:'string'
      },
      {
          name:'description',
          title:'Description',
          type:'string'
      },
      {
          name:'imgUrl',
          title:'ImgUrl',
          type: 'image',
          options: {
            hotspot: true,
          },
      },
      
  ]
}