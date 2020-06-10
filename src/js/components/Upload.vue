<template>
    <Panel title="数据处理" :cname="$style.panel">
        <section>
            <btn>采集</btn>
            <btn>提交</btn>
            <btn>
                <!-- <input type="button" value="上传点这里" onclick="javascript:('input[name=\'file\']').click();" /> -->
                <input name="fileName" readonly />
                <input type="file" @change="handle" />
                <!-- <input type="file">  -->
                </btn>
        </section>
        <section>
            <table>
                 <tr>
                    <th>Month</th>
                    <th>Savings</th>
                </tr>
                 <tr>
                    <td>Month</td>
                    <td>Savings</td>
                </tr>
            </table>
        </section>
    </Panel>
</template>

<script>
import Panel from '../core/panel'
import btn from '../core/btn';
export default {
    name: '',
    components: {
        Panel,
        btn
    },
    methods: {
        handle(ev){
            console.log(ev.srcElement.files);
            console.log(ev.srcElement.files[0].name);
        }
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
            border-bottom: 1px solid #999;
        }
    }
}
</style>