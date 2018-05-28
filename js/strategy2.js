var previousBlock = window.localStorage.getItem('strategy1_block');

$(document).ready(function () {
    document.cookie = "super_class_name=MembershipStrategy";
    start();
    if (previousBlock) {
        Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(previousBlock), workspace);
    }
});


function runCode() {
    var res = Blockly['JavaScript'].workspaceToCode(workspace);
    document.getElementById('result').innerHTML = res;

    var strategy_sub_class_name = document.cookie.replace(/(?:(?:^|.*;\s*)strategy_sub_class_name\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var testCode = "MembershipStrategy strategy = new " + strategy_sub_class_name + "();\n" +
        "strategy.calculatePrice(10);\n";

    document.getElementById('nextSceneBtn').disabled = true;

    $('#modal').modal('show');

    $.ajax({
        type: 'POST',
        url: "http://ad8acb51.compilers.sphere-engine.com/api/v3/submissions?" +
            "access_token=894afa31bda63061e98da2e227c40e4f",
        data: {
            language: 10,
            sourceCode: res + "class Test{\npublic static void main(String[] args){\n" + testCode + "}\n}"
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
                                $('#passModal').modal('show');
                                document.getElementById('nextSceneBtn').disabled = false;
                            } else {
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
    window.localStorage.setItem("strategy", "3");
    window.location.href = './strategy3.html'
}