class Login{
    static logado=false;
    static matlogado=null;
    static nomelogado=null;
    static acessologado=null;
    static estilocss=null;
    static callback_ok=null;
    static callback_naook=null;
    static config={
        cor:"#048",
        img:"logo.jpeg"
    };

    static endpoint="https://loginv1--apeludo-sxsx.repl.co/"

    static login=(callback_ok,callback_naook,config=null)=>{
         if(config!=null){
            this.config=config
        }
        this.callback_ok=()=>{callback_ok()};
        this.callback_naook=()=>{callback_naook()};
        this.estilocss=
        ".fundoLogin{display: flex;justify-content: center;align-items: center;width: 100%;height: 100vh;position: absolute;top: 0px;left: 0px;background-color: rgba(0,0,0,0.75);}"+
        ".baseLogin{display: flex;justify-content: center;align-items: stretch;width: 50%;}"+
        ".elementosLogin{display: flex;flex-direction: column;justify-content: center;align-items: flex-start;width: 50%;background-color: #eee;padding: 10px;border-radius: 10px 0px 0px 10px;}"+
        ".logoLogin{display: flex;justify-content: center;align-items: center;width: 50%;background-color: #bbb;padding: 10px;border-radius: 0px 10px 10px 0px;}"+
        ".logoLogin img{width: 90%;}"+
        ".camposLogin{display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;}"+
        ".camposLogin label{font-size: 18px;}"+
        ".camposLogin input{font-size: 18px;padding: 5px;background: #fff;border-radius: 5px;margin-bottom: 10px;}"+
        ".botoesLogin{display: flex;width: 100%;justify-content: center;align-items: center;}"+
        `.botoesLogin button{cursor: pointer;background-color: ${this.config.cor};color: #fff;border-radius: 5px;padding: 10px 20px;margin:10px 5px;}`
        
        const styleEstilo=document.createElement("style");
        styleEstilo.setAttribute("id","id_estilo_login")
        styleEstilo.setAttribute("rel","stylesheet");
        styleEstilo.setAttribute("type","text/css");
        styleEstilo.innerHTML=this.estilocss
        document.head.appendChild(styleEstilo)

        const corpo=document.body;

        const fundoLogin=document.createElement("div")
        fundoLogin.setAttribute("id","fundoLogin")
        fundoLogin.setAttribute("class","fundoLogin")
        corpo.prepend(fundoLogin)

        const baseLogin=document.createElement("div")
        baseLogin.setAttribute("id","baseLogin")
        baseLogin.setAttribute("class","baseLogin")
        fundoLogin.appendChild(baseLogin)

        const elementosLogin=document.createElement("div")
        elementosLogin.setAttribute("id","elementosLogin")
        elementosLogin.setAttribute("class","elementosLogin")
        baseLogin.appendChild(elementosLogin)

        const campoLoginUsername=document.createElement("div")
        campoLoginUsername.setAttribute("id","camposLoginUs")
        campoLoginUsername.setAttribute("class","camposLogin")
        elementosLogin.appendChild(campoLoginUsername)

        const labelUsername=document.createElement("label")
        labelUsername.innerHTML="Username"
        campoLoginUsername.appendChild(labelUsername)

        const inputUsername=document.createElement("input")
        inputUsername.setAttribute("id","f_username")
        inputUsername.setAttribute("name","f_username")
        inputUsername.setAttribute("type","text")
        campoLoginUsername.appendChild(inputUsername)

        const campoLoginPassword=document.createElement("div")
        campoLoginPassword.setAttribute("id","camposLoginPa")
        campoLoginPassword.setAttribute("class","camposLogin")
        elementosLogin.appendChild(campoLoginPassword)

        const labelPassword=document.createElement("label")
        labelPassword.innerHTML="Senha"
        campoLoginUsername.appendChild(labelPassword)

        const inputPassword=document.createElement("input")
        inputPassword.setAttribute("id","f_senha")
        inputPassword.setAttribute("name","f_senha")
        inputPassword.setAttribute("type","password")
        campoLoginPassword.appendChild(inputPassword)

        const botoesLogin=document.createElement("div")
        botoesLogin.setAttribute("id","botoesLogin")
        botoesLogin.setAttribute("class","botoesLogin")
        elementosLogin.appendChild(botoesLogin)

        const btn_login=document.createElement("button")
        btn_login.setAttribute("id","btn_login")
        btn_login.innerHTML="Login"
        btn_login.addEventListener("click",()=>{
            if(this.verificaLogin()){
                this.fechar()
            }
        })
        botoesLogin.appendChild(btn_login)

        const btn_cancelar=document.createElement("button")
        btn_cancelar.setAttribute("id","btn_cancelar")
        btn_cancelar.innerHTML="Cancelar"
        btn_cancelar.addEventListener("click",()=>{
            this.fechar()
        })
        botoesLogin.appendChild(btn_cancelar)

        const logoLogin=document.createElement("div")
        logoLogin.setAttribute("id","logoLogin")
        logoLogin.setAttribute("class","logoLogin")
        baseLogin.appendChild(logoLogin)

        const imgLogo=document.createElement("img")
        imgLogo.setAttribute("src",this.config.img)
        logoLogin.appendChild(imgLogo)
    
      
    }

    static verificaLogin=()=>{
        const mat= document.querySelector("#f_username").value;
        const pas= document.querySelector("#f_senha").value;

        const endpoint=`https://loginv1--apeludo-sxsx.repl.co/?matricula=${mat}&senha=${pas}`
        fetch(endpoint)
        .then(res=>res.json())
        .then(res=>{
            if (res){
                this.logado=true;
                this.matlogado=mat;
                this.nomelogado=res.nome;
                this.acessologado=res.acesso;
                this.callback_ok();
                this.fechar();
            }else{
                this.logado=false;
                this.matlogado=null;
                this.nomelogado=null;
                this.acessologado=null;
                this.callback_naook()
            }
        })


    }

    static fechar=()=>{
        const id_fundoLogin=document.querySelector("#fundoLogin")
        id_fundoLogin.remove()
        const id_estiloLogin=document.querySelector("#id_estilo_login")
        id_estiloLogin.remove()
    }

}

//export {Login};