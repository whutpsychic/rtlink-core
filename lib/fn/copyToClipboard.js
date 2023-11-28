// --------------------------------------------------------
// 将内容复制到剪贴板
// Author:zbc 
// Last maintain time: 2023-11-28
// --------------------------------------------------------

export default function (textToCopy) {
  if (!navigator.clipboard) {
    // 如果当前浏览器不支持 Clipboard API，则使用 execCommand 方法
    let textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
    } catch (err) {
      console.error("无法复制到剪贴板：" + err);
    }
    document.body.removeChild(textArea);
    return;
  }
  return navigator.clipboard.writeText(textToCopy);
}