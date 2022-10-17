function copyToClipboard(text) {
	if (navigator.clipboard) {
      // clipboard api 复制
      navigator.clipboard.writeText(text);
  } else {
      var textarea = document.createElement('textarea');
      document.body.appendChild(textarea);
      // 隐藏此输入框
      textarea.style.position = 'fixed';
      textarea.style.clip = 'rect(0 0 0 0)';
      textarea.style.top = '10px';
      // 赋值
      textarea.value = text;
      // 选中
      textarea.select();
      // 复制
      document.execCommand('copy', true);
      // 移除输入框
      document.body.removeChild(textarea);
  }
}

function selectText(element) {
	var text = document.getElementById(element);
	if (document.body.createTextRange) {
		var range = document.body.createTextRange();
		range.moveToElementText(text);
		range.select();
	} else if (window.getSelection) {
		var selection = window.getSelection();
		var range = document.createRange();
		range.selectNodeContents(text);
		selection.removeAllRanges();
		selection.addRange(range);
		/*if(selection.setBaseAndExtent){
		    selection.setBaseAndExtent(text, 0, text, 1);
		}*/
	} else {
// 		alert("none");
	}
}