# 基于nodejs、exprees的图床后端服务器
> [!NOTE]
> 服务端默认端口为9999，如需更改，请在index.js文件中修改const port = 您的端口号

> [!TIP]
> 食用指南：
> 默认接口为：/api/ipload<br>
> 接收JSON.stringify(info)<br>
> let info = {
                imgBase64:'',
                fileType,
            }<br>

```
npm install
node index.js
```
