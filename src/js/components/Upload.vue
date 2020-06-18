<template>
    <Panel title="数据处理" :cname="$style.panel">
        <section>
            <btn style="width:24px;overflow:hidden;position:relative;top:4px;left:4px;padding:3.5px;">采集<input type="file" @change="handle" style="opacity: 0;position:absolute;top:0;left:0" /></btn> &nbsp;
            <btn @click.native="download">下载</btn> 
            <input type="text" style="margin:0 5px 0 50px" v-model="msg" @keyup.enter="echo">
            <btn @click.native="echo">
                <!-- <input type="button" value="上传点这里" onclick="javascript:('input[name=\'file\']').click();" /> -->
                <!-- <input name="fileName" readonly /> -->
                <!-- <input type="file">  -->
                提交
            </btn>
        </section>
        <section>
            <table>
                 <tr>
                    <th>姓名</th>
                    <th>电话</th>
                </tr>
                 <tr v-for="item in arr" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.phone }}</td>
                </tr>
            </table>
        </section>
    </Panel>
</template>

<script>
import Panel from '../core/panel'
import btn from '../core/btn'
import { readFile, character, toExcel } from '../api/util'
import xlsx from 'xlsx'
// import ws from 'nodejs-websocket'
export default {
    name: '',
    components: {
        Panel,
        btn
    },
    data(){
        return {
            msg: '',
            ws: null,
            arr: [
                {
                    'name': '谋可寡不可众',
                    'phone': '利可众不可寡'
                },
                { 
                    'name': '大毛',
                    'phone': '00000000000'
                },
                {
                    'name': '二毛',
                    'phone': '00000000001'
                },
                {
                    'name': '三毛',
                    'phone': '00000000002'
                },
                {
                    'name': '四毛',
                    'phone': '00000000003'
                },
                {
                    'name': '五毛',
                    'phone': '00000000004'
                },
            ]
        }
    },
    methods: {
        async handle(ev){
            //采集数据
            let file = ev.target.files[0];
            if(!file) return;

            //将excel数据按二进制读取 xlsx插件在解析为excel进一步解析为json
            let data = await readFile(file),
            workbook = xlsx.read(data, {type: "binary"});
            // console.log(workbook);
            let worksheet = workbook.Sheets[workbook.SheetNames[0]];
            data = xlsx.utils.sheet_to_json(worksheet);

            // 把读取的数据变为可以传递给服务器的数据 表头中文改为英文
            // console.log(data);
            // this.arr = [];
            data.forEach(item => {
                let obj = {};
                for(let key in character) {
                    // if(!character.hasOwnProperty(key)) break;
                    let v = character[key],
                    text = v.text,
                    type = v.type;
                    v = item[text] || '';
                    type === String?(v = String(v)):null;
                    type === Number?(v = Number(v)):null;
                    obj[key] = v;
                }
                this.arr.push(obj);
            })  
            console.log(this.arr);
            return this.arr;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        },
        download(){
            // console.log(ev);
            const th = ['姓名', '年龄'];
            const filterVal = ['name', 'phone'];
            let data = this.arr.map( v=>filterVal.map(k=>v[k]));
            const [fileName, fileType, sheetName] = ['测试下载', 'xlsx', '测试页'];
            toExcel({th, data, fileName, fileType, sheetName});
        },
        echo(){
            // const ws = new WebSocket()
            if(!this.msg) return
            console.log(`websocker 发送${this.msg}`);
            this.ws.send(this.msg);
        },
        initWebSocket(){
            this.ws = new WebSocket("ws://localhost:3000/");
            // var ws = new WebSocket("ws://localhost:8096/websocket/111405");
            this.ws.onopen = function (e) {
                console.log('WebSocket已经打开: ')
                console.log(e)
            }
            this.ws.onmessage = function (e) {
                console.log('WS消息: ' + e.data)
            }
            this.ws.onclose = function (e) {
                console.log('WebSocket关闭: ')
                console.log(e)
            }
            this.ws.onerror = function (e) {
                console.log('WebSocket发生错误: ')
                console.log(e)
            }
        }
    },
    created:function(){
            this.initWebSocket();
        }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
    margin: 100px auto 0;
    >h4{
        display: none;
    }
    table{
        width: 640px;
        border: 1px solid #999;
        text-align: center;
        th{
            font-size: 36px;
            color: #999;
            font-style: "微软雅黑";
            border-bottom: 1px solid #999;
        }
        td{
            font-size: 24px;
            color: #999;
            font-style: "微软雅黑"
        }
    }
}
</style>