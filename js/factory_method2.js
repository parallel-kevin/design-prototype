var previousBlock = window.localStorage.getItem('factory_method1_block');

$(document).ready(function () {
    document.cookie = "super_class_name=BeverageFactory";
    start();
    if (previousBlock) {
        Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(previousBlock), workspace);
    }
});

function runCode() {
    var res = Blockly['JavaScript'].workspaceToCode(workspace);

    var sub_class_name = document.cookie.replace(/(?:(?:^|.*;\s*)factory_method_sub_class_name\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var testCode = "abstract class BeverageFactory {\n" +
        "\n" +
        "\tabstract Beverage createBeverage();\n" +
        "\n" +
        "}\n" +
        "\n" +
        "class "+sub_class_name+" extends BeverageFactory {\n" +
        "\n" +
        "  \t"+sub_class_name+"(){\n" +
        "\t}\n" +
        "\n" +
        "\tBeverage createBeverage(){\n" +
        "\t\treturn new "+sub_class_name.substr(0, sub_class_name.length-7)+"();\n" +
        "\t}\n" +
        "\n" +
        "}\n";

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
    window.localStorage.setItem("factory_method", "3");
    window.location.href = './factory_method3.html'
}