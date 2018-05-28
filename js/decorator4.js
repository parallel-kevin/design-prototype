var previousBlock = window.localStorage.getItem('decorator3_block');

$(document).ready(function () {
    document.cookie = "super_class_name=AbstractCoffee";
    start();
    if (previousBlock) {
        Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(previousBlock), workspace);
    }
});

function runCode() {
    var res = Blockly['JavaScript'].workspaceToCode(workspace);

    var sub_class_name = document.cookie.replace(/(?:(?:^|.*;\s*)decorator_sub_class_name\s*\=\s*([^;]*).*$)|^.*$/, "$1");
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
        "}\n" +
        "\n" +
        "class "+sub_class_name+" extends CoffeeWithIngredient {\n" +
        "\n" +
        "  \t"+sub_class_name+"(AbstractCoffee coffee){\n" +
        "\t\tsuper(coffee);\n" +
        "\t}\n" +
        "\n" +
        "\tvoid printIngredient(){\n" +
        "\t\tcoffee.printIngredient();\n" +
        "\t\tSystem.out.println(\""+sub_class_name.substr(10)+"\");\n" +
        "\t}\n" +
        "\n" +
        "}\n";

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
    window.localStorage.setItem("decorator", "5");
    window.location.href = './decorator5.html'
}