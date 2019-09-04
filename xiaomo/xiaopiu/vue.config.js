module.exports={
    devServer:{
        proxy:{  //代理
            // 以所有带/api 代理到目标路径
            "/api":{
                target:"http://118.89.234.135:7001", //目标路径
                changeOrigin:true, //是否跨域
                pathRewrite:{ //重写路径
                    "^/api":''  
                }
            }
        }
    }
}