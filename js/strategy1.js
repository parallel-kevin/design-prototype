$(document).ready(function () {
    document.cookie = "super_class_name=MembershipStrategy";
    start();
});

var testCode = "abstract class MembershipStrategy {\n" +
    "\n" +
    "\tabstract int calculatePrice(int price);\n" +
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
    window.localStorage.setItem("strategy1_block", Blockly.Xml.domToText(
        Blockly.Xml.workspaceToDom(workspace, true)));
    window.localStorage.setItem("strategy", "2");
    window.location.href = './strategy2.html'
}