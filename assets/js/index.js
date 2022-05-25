(function(){
    let urll= 'http://www.liulongbin.top:3007'
   $.ajax({
       method : 'GET',
       url :urll+'/my/userinfo',
       headers: {
           Authorization: localStorage.getItem('token')||''
       },
       success: (res)=>{
          
            if(res.status !==0){
                return layer.msg(res.message)
            }
            if (res.data.user_pic===null){
                $('.pic').hide()
            }else{
                $('.span').hide()
                $('.pic').attr('src',res.data.user_pic)

            }
            yong(res.data)
       }
  
    
    
   })

   //退出   
   $('#aa').click(()=>{
    layer.confirm('确定退出吗?', {icon: 3, title:'提示'}, function(index){
       localStorage.removeItem('token')
       location.href= '/login.html'
        
        layer.close(index);
      });

   })
 function yong(x){
     let name = x.nickname|| x.username 
     $('.i').html(`欢迎${name}`)
 }

})();