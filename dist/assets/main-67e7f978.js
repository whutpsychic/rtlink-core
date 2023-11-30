import{d as i,r as m,o as h,c as v,a as t,b as a,w as y,E as d,e as g,f as x,g as f}from"./index-af87bf53.js";function b(l){if(!navigator.clipboard){let e=document.createElement("textarea");e.value=l,e.style.position="fixed",document.body.appendChild(e),e.select();try{document.execCommand("copy")}catch(s){console.error("无法复制到剪贴板："+s)}document.body.removeChild(e);return}return navigator.clipboard.writeText(l)}const C={class:"page-container"},V={class:"main-content"},E=t("h2",null,"Promise",-1),w=t("h3",null,"copyToClipboard(str: String) 复制文字到剪贴板",-1),B=t("p",null,"返回一个Promise对象。您可以根据监听状态决定复制完后和复制失败后的动作。",-1),T=t("div",{class:"spliter"},null,-1),k=t("h4",null,"试一试",-1),M=t("div",{class:"spliter"},null,-1),N=t("div",{class:"spliter"},null,-1),j=t("div",{class:"spliter"},null,-1),I=`import { ref } from 'vue'
import { copyToClipboard } from 'erlink-core'
import { ElMessage } from 'element-plus'

const textarea = ref('')
const textarea2 = ref('')

const copy = () => {
  const text = textarea.value;

  copyToClipboard(text).then(() => {
    ElMessage({
      message: '已成功复制到剪贴板！',
      type: 'success',
    })
  }).catch(err => {
    console.error(err)
  })
}`,U={__name:"main",setup(l){const e=i(""),s=i(""),p=()=>{const n=e.value;b(n).then(()=>{if(!e.value){d({message:"请先输入一些要复制的内容",type:"warning"});return}d({message:"已成功复制到剪贴板！",type:"success"}),s.value=n}).catch(o=>{console.error(o)})};return(n,o)=>{const u=m("highlightjs"),c=g,_=x;return h(),v("div",C,[t("div",V,[E,w,B,a(u,{language:"Javascript",code:I}),T,k,M,a(c,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=r=>e.value=r),rows:2,type:"textarea",placeholder:"请在这里输入要复制的内容"},null,8,["modelValue"]),N,a(_,{type:"primary",onClick:p},{default:y(()=>[f("copy!")]),_:1}),j,a(c,{modelValue:s.value,"onUpdate:modelValue":o[1]||(o[1]=r=>s.value=r),rows:2,type:"textarea",placeholder:"粘贴在这里试试"},null,8,["modelValue"])])])}}};export{U as default};
