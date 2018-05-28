$(document).ready(function () {
    document.cookie = "super_class_name=BeverageFactory";
    start();
});

var testCode = "abstract class BeverageFactory {\n" +
    "\n" +
    "\tabstract Beverage createBeverage();\n" +
    "\n" +
    "}\n";

function runCode() {
    var res = Blockly['JavaScript'].workspaceToCode(workspace);
    document.getElementById('result').innerHTML = res;
    if (res === testCode) {
        $('#passModal').modal('show');
        document.getElementById('nextSceneBtn').disabled = false;
    } else {
        $('#notPassModal').modal('show');
        document.getElementById('nextSceneBtn').disabled = true;
    }
}

function nextScene() {
    window.localStorage.setItem("factory_method1_block", Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace, true)));
    window.localStorage.setItem("factory_method", "2");
    window.location.href = './factory_method2.html'
}