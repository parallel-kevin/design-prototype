var previousBlock = window.localStorage.getItem('decorator1_block');

$(document).ready(function () {
    document.cookie = "super_class_name=AbstractCoffee";
    start();
    if (previousBlock) {
        Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(previousBlock), workspace);
    }
});

function runCode() {
    var res = Blockly['JavaScript'].workspaceToCode(workspace);

    var sub_class_name = document.cookie.replace(/(?:(?:^|.*;\s*)factory_method_sub_class_name\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var testCode = "abstract class AbstractCoffee {\n" +
        "\n" +
        "\tabstract void printIngredient();\n" +
        "\n" +
        "}\n" +
        "\n" +
        "class "+sub_class_name+" extends AbstractCoffee {\n" +
        "\n" +
        "  \t"+sub_class_name+"(){\n" +
        "\t}\n" +
        "\n" +
        "\tvoid printIngredient(){\n" +
        "\t\tSystem.out.println(\""+sub_class_name+"\");\n" +
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
    window.localStorage.setItem("decorator", "3");
    window.location.href = './decorator3.html'
}