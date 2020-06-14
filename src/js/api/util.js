// import { OutgoingMessage } from "http";
import { saveAs } from 'file-saver'
import XLSX from 'xlsx'

// 设置异步间隔延迟 
export function delay(interval=0){
    return new Promise(
        resolve => {
            let timer = setTimeout(_ =>{
                clearTimeout(timer);
                resolve(_);
            }, interval)
        }
    );
}

// 将文件按照二进制进行读取
export function readFile(file){
    return new Promise(resolve => {
        let reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = ev => {
            resolve(ev.target.result);
        };
    });
}

// 字段对应表
export let character = {
    name: {
        type: String,
        text: '姓名'
    },
    phone: {
        type: String,
        text: '电话'
    }
}

// 时间字符串格式化
// export function formatTime(str, template){
//     let arr = str.match(/\d+/g).map(item => {
//         return item.length<2 ? '0'+item : item;
//     });
//     template = template || `{0}年{1}月{2}日 {3}时{4}分{5}秒`;
//     return template.replace(/\{\d+\}/g, (_, group)=>{
//         return arr[group] || "00";
//     });
// };





// 将json数据处理为xlsx需要的格式
// function datenum(v, date1904) {
//     if (date1904) v += 1462
//     let epoch = Date.parse(v)
//     return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000)
// }
 
function data2ws(data) {
    // const ws = {}
    // const range = {s: {c: 10000000, r: 10000000}, e: {c: 0, r: 0}}
    // for (let R = 0; R != data.length; ++R) {
    //     for (let C = 0; C != data[R].length; ++C) {
    //         if (range.s.r < R) range.s.r = R
    //         if (range.s.c < C) range.s.c = C
    //         if (range.e.r < R) range.e.r = R
    //         if (range.e.c < C) range.e.c = C
    //         // if (range.s.r > R) range.s.r = R
    //         // if (range.s.c > C) range.s.c = C
    //         // if (range.e.r < R) range.e.r = R
    //         // if (range.e.c < C) range.e.c = C
    //         const cell = { v: data[R][C] }
    //         if (cell.v == null) continue
    //         const cell_ref = XLSX.utils.encode_cell({c: C, r: R})
 
    //         if (typeof cell.v === 'number') cell.t = 'n'
    //         else if (typeof cell.v === 'boolean') cell.t = 'b'
    //         else if (cell.v instanceof Date) {
    //             cell.t = 'n'
    //             cell.z = XLSX.SSF._table[14]
    //             cell.v = datenum(cell.v)
    //         }
    //         else cell.t = 's'
 
    //         ws[cell_ref] = cell
    //     }
    // }
    // if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range)
    // return ws
    return XLSX.utils.json_to_sheet(data)
}
// 导出Excel
function Workbook() {
    if (!(this instanceof Workbook)) return new Workbook()
    this.SheetNames = []
    this.Sheets = {}
}
 
function s2ab(s) {
    const buf = new ArrayBuffer(s.length)
    const view = new Uint8Array(buf)
    for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF
    return buf  
}
 
/*
* th => 表头
* data => 数据
* fileName => 文件名
* fileType => 文件类型
* sheetName => sheet页名
*/
export function toExcel ({th, data, fileName, fileType, sheetName}) {
    data.unshift(th)
    const wb = new Workbook(), ws = data2ws(data)
    sheetName = sheetName || 'sheet1'
    wb.SheetNames.push(sheetName)
    wb.Sheets[sheetName] = ws
    fileType = fileType || 'xlsx'
    var wbout = XLSX.write(wb, {bookType: fileType, bookSST: false, type: 'binary'})
    fileName = fileName || '列表'
    saveAs(new Blob([s2ab(wbout)], {type: "application/octet-stream"}), `${fileName}.${fileType}`)
}


