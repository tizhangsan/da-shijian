 $('#deng').click(function(){
    $('.box_login').hide()
     $('.box_reg').show()
 })
 $('#zhu').click(function(){
    $('.box_reg').hide()
    $('.box_login').show()
 })
 let urll= 'http://www.liulongbin.top:3007'
 let form=layui.form
 form.verify({
   pas: [
      /^[\S]{6,12}$/
      ,'密码必须6到12位,且不能出现空格'
    ],
    pass: function(val){
         let value= $('#pa').val()
         if(val !==value){
            return  '密码不一致'
         }
    }
 })
$('#form1').on('submit',(e)=>{
   e.preventDefault() //阻止默认行为 
   $.post('http://www.liulongbin.top:3007/api/reguser',{username:$('#form1 [name=username]').val(),password:$('#form1 [name=password]').val()},(res)=>{
    
      if(res.status!==0) {
         return layer.msg(res.message);
      }
      layer.msg(res.message);
      $('#zhu').click()
   })
})
$('#form2').submit((e)=>{
   e.preventDefault() //阻止默认行为 
   // $.post('http://www.liulongbin.top:3007/api/login',$(this).serialize(),(res)=>{
   //     if(res.status!==0){
   //        return  layer.msg(res.message)
   //     }
   // })
   let vall= $('#form2 [name=username]').val()
   let valll=$('#form2 [name=password]').val()
  
   $.ajax({
      method:'POST',
      url: urll+'/api/login',
      // data:$(this).serialize(),
      data:{username:vall,password:valll}, 
      success:(res)=>{
         if(res.status!==0){
            return layer.msg(res.message);
         }
         layer.msg('登录成功');
         localStorage.setItem('token',res.token)
         location.href='/index.html'
      }

   })
})
