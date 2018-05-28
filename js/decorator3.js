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

    var testCode = "abstract class AbstractCoffee {\n" +
        "\n" +
        "\tabstract void printIngredient();\n" +
        "\n" +
        "}\n" +
        "\n" +
        "abstract class CoffeeWithIngredient extends AbstractCoffee {\n" +
        "\n" +
        "  \tAbstractCoffee coffee;\n" +
        "\n" +
        "\tCoffeeWithIngredient(AbstractCoffee coffee){\n" +
        "\t\tthis.coffee=coffee;\n" +
        "\t}\n" +
        "\n" +
        "\tvoid printIngredient(){\n" +
        "\t\tcoffee.printIngredient();\n" +
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
    window.localStorage.setItem("decorator3_block", Blockly.Xml.domToText(
        Blockly.Xml.workspaceToDom(workspace, true)));
    window.localStorage.setItem("decorator", "4");
    window.location.href = './decorator4.html'
}