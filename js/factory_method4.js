var previousBlock = window.localStorage.getItem('factory_method3_block');

$(document).ready(function () {
    document.cookie = "super_class_name=Beverage";
    document.cookie = "sub_class_name=Coffee";
    start();
    if (previousBlock) {
        Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(previousBlock), workspace);
    }
});

function runCode() {
    var res = Blockly['JavaScript'].workspaceToCode(workspace);

    var sub_class_name = document.cookie.replace(/(?:(?:^|.*;\s*)factory_method_sub_class_name\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var testCode = "abstract class Beverage {\n" +
        "\n" +
        "\tabstract void description();\n" +
        "\n" +
        "}\n" +
        "\n" +
        "class "+sub_class_name+" extends Beverage {\n" +
        "\n" +
        "  \t"+sub_class_name+"(){\n" +
        "\t}\n" +
        "\n" +
        "\tvoid description(){\n" +
        "\t\tSystem.out.println(\""+sub_class_name+"\");\n" +
        "\t}\n" +
        "\n" +
        "}\n";

    console.log(res);
    console.log(testCode);
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
    window.localStorage.setItem("factory_method", "5");
    window.location.href = './factory_method5.html'
}