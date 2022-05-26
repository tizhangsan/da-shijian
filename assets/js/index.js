
    let urll= 'http://www.liulongbin.top:3007'
     asdf()

   //退出   
   $('#aa').click(()=>{
    layer.confirm('确定退出吗?', {icon: 3, title:'提示'}, function(index){
       localStorage.removeItem('token')
       location.href= '/login.html'
        
        layer.close(index);
      });

   })


 function asdf(){
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
      
             let name = res.data.nickname || res.data.username 
             $('.i').html(`欢迎${name}`)
 
        },
        complete: (res)=>{
        
         if(res.responseJSON.status===1&&res.responseJSON.message==="身份认证失败！"){
                 localStorage.removeItem('token')
                 location.href='/login.html'
         }
        }


       
   
     
     
    })
 }

