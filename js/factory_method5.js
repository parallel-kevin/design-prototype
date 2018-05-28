$(document).ready(function () {
    start();
});

function runCode() {
    var res = Blockly['JavaScript'].workspaceToCode(workspace);
    document.getElementById('result').innerHTML = res;

    var testCode = "TestCase testCase = new TestCase();";
    var supportCode = "abstract class BeverageFactory {\n" +
        "\n" +
        "\tabstract Beverage createBeverage();\n" +
        "\n" +
        "}\n" +
        "\n" +
        "class CoffeeFactory extends BeverageFactory {\n" +
        "\n" +
        "  \tCoffeeFactory(){\n" +
        "\t}\n" +
        "\n" +
        "\tBeverage createBeverage(){\n" +
        "\t\treturn new Coffee();\n" +
        "\t}\n" +
        "\n" +
        "}\n" +
        "\n" +
        "class CokeFactory extends BeverageFactory {\n" +
        "\n" +
        "  \tCokeFactory(){\n" +
        "\t}\n" +
        "\n" +
        "\tBeverage createBeverage(){\n" +
        "\t\treturn new Coke();\n" +
        "\t}\n" +
        "\n" +
        "}\n" +
        // product
        "abstract class Beverage {\n" +
        "\n" +
        "\tabstract void description();\n" +
        "\n" +
        "}\n" +
        "\n" +
        "class Coffee extends Beverage {\n" +
        "\n" +
        "  \tCoffee(){\n" +
        "\t}\n" +
        "\n" +
        "\tvoid description(){\n" +
        "\t\tSystem.out.println(\"coffee\");\n" +
        "\t}\n" +
        "\n" +
        "}\n"+
        "\n" +
        "class Coke extends Beverage {\n" +
        "\n" +
        "  \tCoke(){\n" +
        "\t}\n" +
        "\n" +
        "\tvoid description(){\n" +
        "\t\tSystem.out.println(\"coke\");\n" +
        "\t}\n" +
        "\n" +
        "}\n";

    document.getElementById('nextSceneBtn').disabled = true;

    $('#modal').modal('show');

    var factory = document.cookie.replace(/(?:(?:^|.*;\s*)factory_method_implement_attribute\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    $.ajax({
        type: 'POST',
        url: "http://ad8acb51.compilers.sphere-engine.com/api/v3/submissions?" +
        "access_token=894afa31bda63061e98da2e227c40e4f",
        data: {
            language: 10,
            sourceCode: supportCode + "\n" + res + "class Test{\npublic static void main(String[] args){\n" + testCode + "}\n}"
        },
        success: function (res) {
            var code = setInterval(function () {
                $.ajax({
                    type: 'GET',
                    url: "http://ad8acb51.compilers.sphere-engine.com/api/v3/submissions/"+res.id+
                    "?access_token=894afa31bda63061e98da2e227c40e4f" +
                    "&withOutput=true&withStderr=true&withCmpinfo=true&withSource=true",
                    success: function (res2) {
                        if (res2.status === 0) {
                            clearInterval(code);
                            $('#modal').modal('hide');
                            if (res2.cmpinfo === "" && res2.output !== "") {
                                switch (factory) {
                                    case 'CokeFactory':
                                        $('#anime-product').text(res2.output);
                                        $('#anime img').attr('src', './img/'+res2.output+'.jpg');
                                        $('#anime').show();
                                        break;
                                    case 'CoffeeFactory':
                                    default:
                                        $('#anime-product').text(res2.output);
                                        $('#anime img').attr('src', './img/'+res2.output+'.jpg');
                                        $('#anime').show();
                                        break;
                                }
                                document.getElementById('nextSceneBtn').disabled = false;
                                $('#passModal').modal('show');
                            } else {
                                $('#anime').hide();
                                $('#notPassModal').modal('show');
                            }
                        }
                    }
                });
            }, 5000)
        }
    });
}

function nextScene() {
    window.localStorage.setItem("factory_method", "0");
    window.location.href = './menu.html'
}