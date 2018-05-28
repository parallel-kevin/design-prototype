$(document).ready(function () {
    start();
});

function runCode() {
    var res = Blockly['JavaScript'].workspaceToCode(workspace);
    document.getElementById('result').innerHTML = res;

    var strategy_price = window.localStorage.getItem('strategy_price');
    strategy_price = parseInt(strategy_price.substr(1, strategy_price.length-2));
    var testCode = "TestCase testCase = new TestCase();\n" +
        "System.out.println(testCase.calculate("+strategy_price+"));\n";
    var supportCode = "abstract class MembershipStrategy {\n" +
        "\n" +
        "\tabstract int calculatePrice(int price);\n" +
        "\n" +
        "}\n" +
        "\n" +
        "class BronzeMember extends MembershipStrategy {\n" +
        "\n" +
        "  \tBronzeMember(){\n" +
        "\t}\n" +
        "\n" +
        "\tint calculatePrice(int price){\n" +
        "\t\treturn (int)(price*0.9);\n" +
        "\t}\n" +
        "}\n" +
        "class SilverMember extends MembershipStrategy {\n" +
        "\n" +
        "  \tSilverMember(){\n" +
        "\t}\n" +
        "\n" +
        "\tint calculatePrice(int price){\n" +
        "\t\treturn (int)(price*0.8);\n" +
        "\t}\n" +
        "}\n" +
        "class GoldMember extends MembershipStrategy {\n" +
        "\n" +
        "  \tGoldMember(){\n" +
        "\t}\n" +
        "\n" +
        "\tint calculatePrice(int price){\n" +
        "\t\treturn (int)(price*0.7);\n" +
        "\t}\n" +
        "\n" +
        "}";

    document.getElementById('nextSceneBtn').disabled = true;

    $('#modal').modal('show');

    var membership = document.cookie.replace(/(?:(?:^|.*;\s*)strategy_implement_attribute\s*\=\s*([^;]*).*$)|^.*$/, "$1");

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
                            if (res2.cmpinfo === "") {
                                $('#anime-membership').text(membership);
                                $('#anime-price').text(res2.output);
                                $('#anime img').attr('src', './img/'+membership+'.jpg');
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
    window.localStorage.setItem("strategy", "0");
    window.location.href = './menu.html'
}