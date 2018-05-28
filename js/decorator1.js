$(document).ready(function () {
    document.cookie = "super_class_name=AbstractCoffee";
    start();
});

var testCode = "abstract class AbstractCoffee {\n" +
    "\n" +
    "\tabstract void printIngredient();\n" +
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
    window.localStorage.setItem("decorator1_block", Blockly.Xml.domToText(
        Blockly.Xml.workspaceToDom(workspace, true)));
    window.localStorage.setItem("decorator", "2");
    window.location.href = './decorator2.html'
}