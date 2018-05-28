$(document).ready(function () {
    startWithMaxBlocks(3);
});

function runCode() {
    var res = Blockly['JavaScript'].workspaceToCode(workspace);
    document.getElementById('result').innerHTML = res;

    var testCode = "coffee.printIngredient();";
    var supportCode = "abstract class AbstractCoffee {\n" +
        "\n" +
        "\tabstract void printIngredient();\n" +
        "\n" +
        "}\n" +
        "\n" +
        "class Mocha extends AbstractCoffee {\n" +
        "\n" +
        "  \tMocha(){\n" +
        "\t}\n" +
        "\n" +
        "\tvoid printIngredient(){\n" +
        "\t\tSystem.out.println(\"Mocha\");\n" +
        "\t}\n" +
        "\n" +
        "}\n"+
        "\n" +
        "class Latte extends AbstractCoffee {\n" +
        "\n" +
        "  \tLatte(){\n" +
        "\t}\n" +
        "\n" +
        "\tvoid printIngredient(){\n" +
        "\t\tSystem.out.println(\"Latte\");\n" +
        "\t}\n" +
        "\n" +
        "}\n"+
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
        "class CoffeeWithMilk extends CoffeeWithIngredient {\n" +
        "\n" +
        "  \tCoffeeWithMilk(AbstractCoffee coffee){\n" +
        "\t\tsuper(coffee);\n" +
        "\t}\n" +
        "\n" +
        "\tvoid printIngredient(){\n" +
        "\t\tcoffee.printIngredient();\n" +
        "\t\tSystem.out.println(\"Milk\");\n" +
        "\t}\n" +
        "\n" +
        "}\n"+
        "\n" +
        "class CoffeeWithEspresso extends CoffeeWithIngredient {\n" +
        "\n" +
        "  \tCoffeeWithEspresso(AbstractCoffee coffee){\n" +
        "\t\tsuper(coffee);\n" +
        "\t}\n" +
        "\n" +
        "\tvoid printIngredient(){\n" +
        "\t\tcoffee.printIngredient();\n" +
        "\t\tSystem.out.println(\"Espresso\");\n" +
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
            sourceCode: supportCode + "\nclass Test{\npublic static void main(String[] args){\n" + res + testCode + "}\n}"
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
                                var result = res2.output.split('\n');
                                var text = "";
                                for (var i=0; i<result.length; i++) {
                                    if (result[i] === "") continue;
                                    var ingredientTop = 59-i*8;
                                    var textTop = 63-i*12;
                                    if (i===0) {
                                        $('#anime-category').text(result[i]);
                                        text += result[i];
                                    } else if (i===1) {
                                        $('#anime-coffee').append("<div class='anime-ingredient-text' style='top:"+textTop+"px'>"+result[i]+"</div>");
                                        $('#anime-coffee').append("<div class='anime-ingredient anime-"+result[i]+"' style='top:"+ingredientTop+"px'></div>");
                                        text += " with " + result[i];
                                    } else {
                                        $('#anime-coffee').append("<div class='anime-ingredient-text' style='top:"+textTop+"px'>"+result[i]+"</div>");
                                        $('#anime-coffee').append("<div class='anime-ingredient anime-"+result[i]+"' style='top:"+ingredientTop+"px'></div>");
                                        text += " and " +result[i];
                                    }
                                }
                                $('#anime-product').text(text);
                                $('#anime').show();
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
    window.localStorage.setItem("decorator", "0");
    window.location.href = './menu.html'
}