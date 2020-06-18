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

function data2ws(data) {
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


