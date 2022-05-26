(function(){
    let urll='http://www.liulongbin.top:3007'
    let form=layui.form
    form.verify({
        nickname: function(value){
            if(value.length>6){
                return '太长了'
            }
        }
        
       
        
    })
    
    ajax()
   $('.layui-form').on('submit',(e)=>{
        e.preventDefault()
        post()
     
    
    
   })
    $('#ww').click((e)=>{
        e.preventDefault()
        $('[name=nickname]').val('')
        $('[name=email]').val('')
    })

    //ajax
    function ajax(){
        $.ajax({
            method:'GET',
            url:urll+'/my/userinfo',
            headers:{
                Authorization: localStorage.getItem('token')||''
            },
            success:(res)=>{
                console.log(res);
                if (res.status!==0) return '获取信息失败'
                let val= res.data.username
                $('[name=username]').val(val)
                $('#ss').val(res.data.id)

            }
        })
    }
    function post(){
        $.ajax({
            method:'POST',
            url:urll+'/my/userinfo',
            headers:{
                Authorization: localStorage.getItem('token')||''
            },
            data:{
                nickname: $('[name=nickname]').val(),
                email:$('[name=email]').val(),
                id:$('#ss').val()
            },
            success:(res)=>{
                // if(res.status!==0) return '更改失败'
                console.log(res);
                if(res.status!==0) return '修改失败'
                layer.msg(res.message)
                   
               

            },
         
        })
         window.parent.asdf()
     
    }
})();