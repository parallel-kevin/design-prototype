/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
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

'use strict';

goog.provide('Blockly.Blocks.class');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

var super_class_name = document.cookie.replace(/(?:(?:^|.*;\s*)super_class_name\s*\=\s*([^;]*).*$)|^.*$/, "$1");
var sub_class_name = document.cookie.replace(/(?:(?:^|.*;\s*)sub_class_name\s*\=\s*([^;]*).*$)|^.*$/, "$1");
var abstract_class_name = document.cookie.replace(/(?:(?:^|.*;\s*)abstract_class_name\s*\=\s*([^;]*).*$)|^.*$/, "$1");

Blockly.Blocks['super_class'] = {
    init: function() {
        this.jsonInit({
            "message0": "Abstract class  " + super_class_name + " %1 Methods      %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "METHOD",
                    "check": "super_method"
                }
            ],
            "category": Blockly.Categories.class,
            "nextStatement": "class",
            "output": "super_class",
            "extensions": ["colours_class"]
        });
    }
}

Blockly.Blocks['sub_class'] = {
    init: function() {
        var options = [
            ['BronzeMember', '0'],
            ['SilverMember', '1'],
            ['GoldMember', '2'],
        ];
        this.jsonInit({
            "message0": "Class        %1 %2 Methods %3",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "CLASS_NAME",
                    "options": options
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "METHOD",
                    "check": "sub_method"
                }
            ],
            "category": Blockly.Categories.class,
            "previousStatement": "class",
            "input": "super_class",
            "extensions": ["colours_class"]
        });
    }
}

Blockly.Blocks['implement_class'] = {
    init: function() {
        this.jsonInit({
            "message0": "Class   TestCase %1 Attributes %2 Methods %3",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "ATTRIBUTE",
                    "check": "implement_class_attribute"
                },
                {
                    "type": "input_statement",
                    "name": "METHOD",
                    "check": "implement_class_method"
                }
            ],
            "category": Blockly.Categories.class,
            "extensions": ["colours_class"]
        });
    }
}

Blockly.Blocks['sub_class_fix'] = {
    init: function() {
        var options;
        switch (super_class_name) {
            case "BeverageFactory":
                options = [
                    ['CoffeeFactory', '0'],
                    ['CokeFactory', '1'],
                ];
                break;
            case "Beverage":
                options = [
                    ['Coffee', '0'],
                    ['Coke', '1'],
                ];
                break;
            case "AbstractCoffee":
                options = [
                    ['Latte', '0'],
                    ['Mocha', '1'],
                ];
                break;
        }
        this.jsonInit({
            "message0": "Class        %1 %2 Methods %3",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "CLASS_NAME",
                    "options": options
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "METHOD",
                    "check": "sub_method"
                }
            ],
            "category": Blockly.Categories.class,
            "previousStatement": "class",
            "input": "super_class",
            "extensions": ["colours_class"]
        });
    }
}

Blockly.Blocks['abstract_class_fix'] = {
    init: function() {
        this.jsonInit({
            "message0": "类名         " + abstract_class_name + " %1 类属性 %2 拥有方法 %3",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "ATTRIBUTE",
                    "check": "abstract_class_attribute"
                },
                {
                    "type": "input_statement",
                    "name": "METHOD",
                    "check": "abstract_class_method"
                }
            ],
            "category": Blockly.Categories.class,
            "extensions": ["colours_class"]
        });
    }
}

Blockly.Blocks['factory_method_implement_class'] = {
    init: function() {
        this.jsonInit({
            "message0": "Class   TestCase %1 Attributes %2 Functions %3",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "ATTRIBUTE",
                    "check": "implement_class_attribute"
                },
                {
                    "type": "input_statement",
                    "name": "METHOD",
                    "check": "implement_class_method"
                }
            ],
            "category": Blockly.Categories.class,
            "extensions": ["colours_class"]
        });
    }
}

Blockly.Blocks['decorator_super_class'] = {
    init: function() {
        this.jsonInit({
            "message0": "Abstract Class      CoffeeWithIngredient %1 Methods %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "METHOD",
                    "check": "super_method"
                }
            ],
            "category": Blockly.Categories.class,
            "previousStatement": "class",
            "nextStatement": "decorator_class",
            "input": "super_class",
            "extensions": ["colours_class"]
        });
    }
}

Blockly.Blocks['decorator_sub_class'] = {
    init: function() {
        var options = [
            ['CoffeeWithMilk', '0'],
            ['CoffeeWithEspresso', '1'],
        ];
        this.jsonInit({
            "message0": "Class      %1 %2 Methods %3",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "CLASS_NAME",
                    "options": options
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "METHOD",
                    "check": "decorator_method"
                }
            ],
            "category": Blockly.Categories.class,
            "previousStatement": "decorator_class",
            "input": "super_class",
            "extensions": ["colours_class"]
        });
    }
}

Blockly.Blocks['decorator_implement_base_class'] = {
    init: function() {
        var options = [
            ['Latte', '0'],
            ['Mocha', '1'],
        ];
        this.jsonInit({
            "message0": "Class      %1 Methods printIngredient()",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "CLASS_NAME",
                    "options": options
                },
            ],
            "category": Blockly.Categories.class,
            "nextStatement": "decorator_class",
            "output": "base_class",
            "extensions": ["colours_class"]
        });
    }
}

Blockly.Blocks['decorator_implement_decorator_class'] = {
    init: function() {
        var options = [
            ['CoffeeWithMilk', '0'],
            ['CoffeeWithEspresso', '1'],
        ];
        this.jsonInit({
            "message0": "Class      %1 Methods printIngredient()",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "CLASS_NAME",
                    "options": options
                },
            ],
            "category": Blockly.Categories.class,
            "previousStatement": "decorator_class",
            "nextStatement": "decorator_class",
            "extensions": ["colours_class"]
        });
    }
}