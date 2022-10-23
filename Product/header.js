
        const dangnhap=document.querySelectorAll('.js-dangnhap')
        const login=document.querySelector('.js-login')
        const closelogin=document.querySelector('.js-loginclose')
        const logincontain=document.querySelector('.js-logincontain')
        const dangki=document.querySelectorAll('.js-dangki')
        const register=document.querySelector('.js-register')
        const closeregister=document.querySelector('.js-closeregister')
        const register_contain=document.querySelector('.js-register-contain')
        const transfer1=document.querySelector('.js-transfer1')
        const transfer2=document.querySelector('.js-transfer2')
        const menu=document.querySelector('.js-menu')
        const menuan=document.querySelector('.js-menuan')
        const menuclose=document.querySelector('.js-menu-close')
        function showlogin()
        {
            login.classList.add('open')
        }
        function showregister()
        {
            register.classList.add('open')
        }
        function hidelogin()
        {
            login.classList.remove('open')
        }
        function hideregister()
        {
            register.classList.remove('open')
        }
        function showloginn()
        {
            register.classList.remove('open')
            login.classList.add('open')
        }
        function showloginnn(){
            login.classList.remove('open')
            register.classList.add('open')
        }
        function showmenu(){
            menuan.classList.add('open1')
        }
        function hidemenu(){
            menuan.classList.remove('open1')
        }
        // dangnhap.addEventListener('click',showlogin)
        for(const dn of dangnhap)
        {
            dn.addEventListener('click',showlogin)
        }
        menu.addEventListener('click',showmenu)
        menuclose.addEventListener('click',hidemenu)
        closelogin.addEventListener('click',hidelogin)
        closeregister.addEventListener('click',hideregister)
        login.addEventListener('click',hidelogin)
        //dangki.addEventListener('click',showregister)
        for(const dk of dangki)
        {
            dk.addEventListener('click',showregister)
        }
        logincontain.addEventListener('click',function(event){
            event.stopPropagation()
        })
        register.addEventListener('click',hideregister)
        register_contain.addEventListener('click',function(event){
            event.stopPropagation()
        })
        transfer1.addEventListener('click',showloginn)
        transfer2.addEventListener('click',showloginnn)
