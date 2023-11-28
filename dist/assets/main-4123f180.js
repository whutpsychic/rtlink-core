import{d as i,r as _,o as m,c as h,a as t,b as l,w as v,E as x,e as y,f as g,g as f}from"./index-0f28a4ff.js";function b(a){if(!navigator.clipboard){let e=document.createElement("textarea");e.value=a,e.style.position="fixed",document.body.appendChild(e),e.select();try{document.execCommand("copy")}catch(s){console.error("无法复制到剪贴板："+s)}document.body.removeChild(e);return}return navigator.clipboard.writeText(a)}const C={class:"page-container"},V={class:"main-content"},E=t("h2",null,"Promise",-1),w=t("h3",null,"copyToClipboard(str: String) 复制文字到剪贴板",-1),B=t("p",null,"返回一个Promise对象。您可以根据监听状态决定复制完后和复制失败后的动作。",-1),T=t("div",{class:"spliter"},null,-1),k=t("h4",null,"试一试",-1),P=t("div",{class:"spliter"},null,-1),M=t("div",{class:"spliter"},null,-1),N=t("div",{class:"spliter"},null,-1),j=`import { ref } from 'vue'
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
}`,U={__name:"main",setup(a){const e=i(""),s=i(""),p=()=>{const n=e.value;b(n).then(()=>{x({message:"已成功复制到剪贴板！",type:"success"}),s.value=n}).catch(o=>{console.error(o)})};return(n,o)=>{const d=_("highlightjs"),c=y,u=g;return m(),h("div",C,[t("div",V,[E,w,B,l(d,{language:"Javascript",code:j}),T,k,P,l(c,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=r=>e.value=r),rows:2,type:"textarea",placeholder:"Please input"},null,8,["modelValue"]),M,l(u,{type:"primary",onClick:p},{default:v(()=>[f("copy!")]),_:1}),N,l(c,{modelValue:s.value,"onUpdate:modelValue":o[1]||(o[1]=r=>s.value=r),rows:2,type:"textarea",placeholder:"Please input"},null,8,["modelValue"])])])}}};export{U as default};
