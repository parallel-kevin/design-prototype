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

goog.provide('Blockly.Blocks.method');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

/*      策略模式    */
Blockly.Blocks['strategy_super_class_method'] = {
    init: function() {
        this.jsonInit({
            "message0": "abstract calculatePrice(price)",
            "category": Blockly.Categories.method,
            "previousStatement": "super_method",
            "extensions": ["colours_method"]
        });
    }
}

Blockly.Blocks['sub_class_method'] = {
    init: function() {
        this.jsonInit({
            "message0": "calculatePrice(price)",
            "category": Blockly.Categories.method,
            "previousStatement": "sub_method",
            "extensions": ["colours_method"]
        });
    }
}

Blockly.Blocks['implement_class_method'] = {
    init: function() {
        this.jsonInit({
            "message0": "calculate(%1)",
            "args0": [
                {
                    "type": "input_value",
                    "name": "PRICE"
                }
            ],
            "category": Blockly.Categories.method,
            "input": "Method",
            "previousStatement": "implement_class_method",
            "extensions": ["colours_method"]
        });
    }
}

/*      工厂方法模式    */
Blockly.Blocks['factory_method_super_class_method'] = {
    init: function() {
        this.jsonInit({
            "message0": "createBeverage",
            "category": Blockly.Categories.method,
            "previousStatement": "super_method",
            "extensions": ["colours_method"]
        });
    }
}

Blockly.Blocks['factory_method_sub_class_method'] = {
    init: function() {
        this.jsonInit({
            "message0": "createBeverage",
            "category": Blockly.Categories.method,
            "previousStatement": "sub_method",
            "extensions": ["colours_method"]
        });
    }
}

Blockly.Blocks['factory_method_abstract_class_method'] = {
    init: function() {
        this.jsonInit({
            "message0": "createBeverage",
            "category": Blockly.Categories.method,
            "previousStatement": "abstract_class_method",
            "extensions": ["colours_method"]
        });
    }
}

Blockly.Blocks['factory_method_super_product_method'] = {
    init: function() {
        this.jsonInit({
            "message0": "description",
            "category": Blockly.Categories.method,
            "previousStatement": "super_method",
            "extensions": ["colours_method"]
        });
    }
}

Blockly.Blocks['factory_method_sub_product_method'] = {
    init: function() {
        this.jsonInit({
            "message0": "description",
            "category": Blockly.Categories.method,
            "previousStatement": "sub_method",
            "extensions": ["colours_method"]
        });
    }
}

Blockly.Blocks['factory_method_implement_create'] = {
    init: function() {
        this.jsonInit({
            "message0": "createBeverage",
            "category": Blockly.Categories.method,
            "previousStatement": "implement_class_method",
            "nextStatement": "implement_class_method_description",
            "extensions": ["colours_method"]
        });
    }
}

Blockly.Blocks['factory_method_implement_description'] = {
    init: function() {
        this.jsonInit({
            "message0": "description",
            "category": Blockly.Categories.method,
            "previousStatement": "implement_class_method_description",
            "extensions": ["colours_method"]
        });
    }
}

/*      装饰器模式    */
Blockly.Blocks['decorator_method_super_class_method'] = {
    init: function() {
        this.jsonInit({
            "message0": "printIngredient",
            "category": Blockly.Categories.method,
            "previousStatement": "super_method",
            "extensions": ["colours_method"]
        });
    }
}

Blockly.Blocks['decorator_sub_class_method'] = {
    init: function() {
        this.jsonInit({
            "message0": "printIngredient",
            "category": Blockly.Categories.method,
            "previousStatement": "sub_method",
            "extensions": ["colours_method"]
        });
    }
}

Blockly.Blocks['decorator_decorate_super_class_method'] = {
    init: function() {
        this.jsonInit({
            "message0": "printIngredient",
            "category": Blockly.Categories.method,
            "previousStatement": "super_method",
            "extensions": ["colours_method"]
        });
    }
}

Blockly.Blocks['decorator_decorate_sub_class_method'] = {
    init: function() {
        this.jsonInit({
            "message0": "printIngredient",
            "category": Blockly.Categories.method,
            "previousStatement": "decorator_method",
            "extensions": ["colours_method"]
        });
    }
}