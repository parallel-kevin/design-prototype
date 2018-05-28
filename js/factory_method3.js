$(document).ready(function () {
    document.cookie = "super_class_name=Beverage";
    start();
});

var testCode = "abstract class Beverage {\n" +
    "\n" +
    "\tabstract void description();\n" +
    "\n" +
    "}\n";

function runCode() {
    var res = Blockly['JavaScript'].workspaceToCode(workspace);
    document.getElementById('result').innerHTML = res;
    console.log(res);
    console.log(testCode);
    if (res === testCode) {
        $('#passModal').modal('show');
        document.getElementById('nextSceneBtn').disabled = false;
    } else {
        $('#notPassModal').modal('show');
        document.getElementById('nextSceneBtn').disabled = true;
    }
}

function nextScene() {
    window.localStorage.setItem("factory_method3_block", Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace, true)));
    window.localStorage.setItem("factory_method", "4");
    window.location.href = './factory_method4.html'
}