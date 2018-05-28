/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating JavaScript for logic blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.JavaScript.strategy');

goog.require('Blockly.JavaScript');

/*      策略模式    */
var SUPER_CLASS_PARAMETER_NUM = 1;
var SUB_CLASS_PARAMETER_NUM = 3;
var IMPLEMENT_CLASS_PARAMETER_NUM = 3;

Blockly.JavaScript['text'] = function(block) {
    // Text value.
    var code = Blockly.JavaScript.quote_(block.getFieldValue('TEXT'));
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['super_class'] = function(block) {
    var code = '';
    var method = Blockly.JavaScript.statementToCode(block, 'METHOD');
    var super_class_name = document.cookie.replace(/(?:(?:^|.*;\s*)super_class_name\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    if (method) {
        code += 'abstract class ' + super_class_name + ' {\n\n' + indent(method) + '}\n\n';
    } else {
        code += 'abstract class ' + super_class_name + ' {\n\n' + '}\n\n';
    }

    return code;
};

Blockly.JavaScript['strategy_super_class_method'] = function(block) {
    return 'abstract int calculatePrice(int price);\n';
};

Blockly.JavaScript['sub_class'] = function(block) {
    var code = '';
    var method = Blockly.JavaScript.statementToCode(block, 'METHOD');
    var sub_class_name = block.getField('CLASS_NAME').getText() || 'Default';

    if (sub_class_name) {
        document.cookie = "strategy_sub_class_name="+sub_class_name;
    }

    if (block.parentBlock_) {
        code += 'class ' + sub_class_name + ' extends MembershipStrategy {\n\n';
    } else {
        code += 'class ' + sub_class_name + ' {\n\n';
    }

    code += '  '+indent(sub_class_name + "(){\n}\n");

    if (method) {
        code += indent(method);
    }

    code += '}\n\n';

    return code;
};

Blockly.JavaScript['sub_class_method'] = function(block) {
    var code = '';
    var strategy = block.parentBlock_.getField('CLASS_NAME').getText();
    var ratio = '';

    switch (strategy) {
        case 'BronzeMember':
            ratio = '0.9';
            break;
        case 'SilverMember':
            ratio = '0.8';
            break;
        case 'GoldMember':
            ratio = '0.7';
            break;
    }

    code = 'int calculatePrice(int price){\n' +
        '\treturn (int)(price*' + ratio + ');\n' +
        '}\n';

    return code;
};

Blockly.JavaScript['implement_class'] = function(block) {
    var code = '';
    var attribute = Blockly.JavaScript.statementToCode(block, 'ATTRIBUTE');
    var method = Blockly.JavaScript.statementToCode(block, 'METHOD');
    var voice = '';

    code += 'class TestCase {\n\tMembershipStrategy strategy;\n';

    code += '\tTestCase(){\n';

    if (attribute) {
        code += indent('\tthis.strategy = new '+attribute+'();');
    }

    code += '\t}\n';

    if (method) {
        code += indent(method);

        code += '}\n\n';
    } else {
        code += '}\n';
    }

    code += '\n';

    return code;
};

Blockly.JavaScript['implement_class_attribute'] = function(block) {
    var code = '';
    var MEMBERSHIP = {
        '0': 'BronzeMember',
        '1': 'SilverMember',
        '2': 'GoldMember'
    };

    var obj = block.getField('MEMBERSHIP').getText();
    document.cookie = "strategy_implement_attribute="+obj;
    var voice = MEMBERSHIP[block.getFieldValue('MEMBERSHIP')];
    code += 'MembershipStrategy obj = new ' + obj + '();\n\n';
    if (block.parentBlock_) {
        code += voice;
    }

    return obj;
};

Blockly.JavaScript['implement_class_method'] = function(block) {
    var code = 'int calculate(int price){\n' +
        '\treturn strategy.calculatePrice(price);\n' +
        '}\n';

    var price = Blockly.JavaScript.valueToCode(block, 'PRICE', Blockly.JavaScript.ORDER_NONE);
    window.localStorage.setItem('strategy_price', price);

    return code;
};

/*      工厂方法模式    */
Blockly.JavaScript['factory_method_super_class_method'] = function(block) {
    return 'abstract Beverage createBeverage();\n';
};

Blockly.JavaScript['sub_class_fix'] = function(block) {
    var code = '';
    var method = Blockly.JavaScript.statementToCode(block, 'METHOD');
    var sub_class_name = block.getField('CLASS_NAME').getText() || 'Default';
    var super_class_name = document.cookie.replace(/(?:(?:^|.*;\s*)super_class_name\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    if (sub_class_name) {
        document.cookie = "factory_method_sub_class_name="+sub_class_name;
    }

    if (block.parentBlock_) {
        code += 'class ' + sub_class_name + ' extends ' + super_class_name + ' {\n\n';
    } else {
        code += 'class ' + sub_class_name + ' {\n\n';
    }

    code += '  '+indent(sub_class_name + "(){\n}\n");

    if (method) {
        code += indent(method);
    }

    code += '}\n\n';

    return code;
};

Blockly.JavaScript['factory_method_sub_class_method'] = function(block) {
    var code = '';

    if (block.parentBlock_) {
        var sub_class_name = block.parentBlock_.getField('CLASS_NAME').getText() || 'Default';
        sub_class_name = sub_class_name.substr(0, sub_class_name.length-7);
        code = 'Beverage createBeverage(){\n' +
            '\treturn new '+sub_class_name+'();\n' +
            '}\n';
    } else {
        code = 'Beverage createBeverage(){\n' +
            '\treturn new Beverage();\n' +
            '}\n';
    }


    return code;
};

Blockly.JavaScript['factory_method_super_product_method'] = function(block) {
    var code = '';

    code = 'abstract void description();\n';

    return code;
};

Blockly.JavaScript['factory_method_sub_product_method'] = function(block) {
    var code = '';

    if (block.parentBlock_) {
        var sub_class_name = block.parentBlock_.getField('CLASS_NAME').getText() || 'Default';
        code = 'void description(){\n' +
            '\tSystem.out.println(\"'+sub_class_name+'\");\n' +
            '}\n';
    } else {
        code = 'void description(){\n' +
            '\tSystem.out.println(\"Beverage\");\n' +
            '}\n';
    }


    return code;
};

Blockly.JavaScript['factory_method_implement_class'] = function(block) {
    var code = '';
    var attribute = Blockly.JavaScript.statementToCode(block, 'ATTRIBUTE');
    var method = Blockly.JavaScript.statementToCode(block, 'METHOD');
    var voice = '';

    code += 'class TestCase {\n' +
        '\tBeverageFactory factory;\n' +
        '\tBeverage beverage;\n';

    code += '\tTestCase(){\n';

    if (attribute) {
        code += indent('\tfactory = new '+attribute+'();');
    }

    if (method) {
        code += indent(method);

        code += '\t}\n\n';
    } else {
        code += '\t}\n';
    }

    code += '}\n';

    code += '\n';

    return code;
};

Blockly.JavaScript['factory_method_implement_class_attribute'] = function(block) {
    var code = '';
    var FACTORY = {
        '0': 'CoffeeFactory',
        '1': 'CokeFactory'
    };

    var obj = block.getField('FACTORY').getText();
    document.cookie = "factory_method_implement_attribute="+obj;
    var voice = FACTORY[block.getFieldValue('FACTORY')];
    code += 'BeverageFactory factory = new ' + obj + '();\n';
    if (block.parentBlock_) {
        code += voice;
    }

    return obj;
};

Blockly.JavaScript['factory_method_implement_create'] = function(block) {
    var code = '\tbeverage = factory.createBeverage();\n';

    return code;
};

Blockly.JavaScript['factory_method_implement_description'] = function(block) {
    var code = '\tbeverage.description();\n';

    return code;
};

/*      装饰模式    */
Blockly.JavaScript['decorator_method_super_class_method'] = function(block) {
    return 'abstract void printIngredient();\n';
};

Blockly.JavaScript['decorator_sub_class_method'] = function(block) {
    var code = '';

    if (block.parentBlock_) {
        var sub_class_name = block.parentBlock_.getField('CLASS_NAME').getText() || 'Default';
        code = 'void printIngredient(){\n' +
            '\tSystem.out.println(\"'+sub_class_name+'\");\n' +
            '}\n';
    } else {
        code = 'void printIngredient(){\n' +
            '\tSystem.out.println(\"Coffee\");\n' +
            '}\n';
    }

    return code;
};

Blockly.JavaScript['decorator_super_class'] = function(block) {
    var code = '';
    var method = Blockly.JavaScript.statementToCode(block, 'METHOD');
    var super_class_name = document.cookie.replace(/(?:(?:^|.*;\s*)super_class_name\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    if (block.parentBlock_) {
        code += 'abstract class CoffeeWithIngredient extends ' + super_class_name + ' {\n\n';
    } else {
        code += 'abstract class CoffeeWithIngredient {\n\n';
    }

    code += '  '+indent("AbstractCoffee coffee;\n\n" +
        "CoffeeWithIngredient(AbstractCoffee coffee){\n" +
        "\tthis.coffee=coffee;\n" +
        "}\n");

    if (method) {
        code += indent(method);
    }

    code += '}\n\n';

    return code;
};

Blockly.JavaScript['decorator_decorate_super_class_method'] = function(block) {
    var code = 'void printIngredient(){\n' +
        '\tcoffee.printIngredient();\n' +
        '}\n';

    return code;
};

Blockly.JavaScript['decorator_sub_class'] = function(block) {
    var code = '';
    var method = Blockly.JavaScript.statementToCode(block, 'METHOD');
    var sub_class_name = block.getField('CLASS_NAME').getText() || 'Default';

    if (sub_class_name) {
        document.cookie = "decorator_sub_class_name="+sub_class_name;
    }

    if (block.parentBlock_) {
        code += 'class ' + sub_class_name + ' extends CoffeeWithIngredient {\n\n';
    } else {
        code += 'class ' + sub_class_name + ' {\n\n';
    }

    code += '  '+indent(sub_class_name + "(AbstractCoffee coffee){\n" +
        "\tsuper(coffee);\n" +
        "}\n");

    if (method) {
        code += indent(method);
    }

    code += '}\n\n';

    return code;
};

Blockly.JavaScript['decorator_decorate_sub_class_method'] = function(block) {
    var code = '';

    if (block.parentBlock_) {
        var sub_class_name = block.parentBlock_.getField('CLASS_NAME').getText() || 'Default';
        code = 'void printIngredient(){\n' +
            '\tcoffee.printIngredient();\n' +
            '\tSystem.out.println(\"'+sub_class_name.substr(10)+'\");\n' +
            '}\n';
    } else {
        code = 'void printIngredient(){\n' +
            '\tcoffee.printIngredient();\n' +
            '}\n';
    }

    return code;
};

Blockly.JavaScript['decorator_implement_base_class'] = function(block) {
    var code = '';
    var method = Blockly.JavaScript.statementToCode(block, 'METHOD');
    var sub_class_name = block.getField('CLASS_NAME').getText() || 'Default';

    if (sub_class_name) {
        document.cookie = "decorator_implement_base_class_name="+sub_class_name;
    }

    code += 'AbstractCoffee coffee = new ' + sub_class_name + '();\n\n';

    return code;
};

Blockly.JavaScript['decorator_implement_decorator_class'] = function(block) {
    var code = '';
    var method = Blockly.JavaScript.statementToCode(block, 'METHOD');
    var sub_class_name = block.getField('CLASS_NAME').getText() || 'Default';

        code += 'coffee = new ' + sub_class_name + '(coffee);\n\n';

    return code;
};

/*      工具方法    */
function indent(lines) {
    var lineArr = lines.split('\n');
    var res = '';
    for (var i = 0; i < lineArr.length; i++) {
        res += '\t' + lineArr[i] + '\n';
    }
    return res;
}