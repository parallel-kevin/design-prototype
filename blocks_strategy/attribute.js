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

goog.provide('Blockly.Blocks.attribute');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['implement_class_attribute'] = {
    init: function() {
        var options = [
            ['BronzeMember', '0'],
            ['SilverMember', '1'],
            ['GoldMember', '2'],
        ];
        this.jsonInit({
            "message0": "%1",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "MEMBERSHIP",
                    "options": options
                }
            ],
            "category": Blockly.Categories.method,
            "previousStatement": "implement_class_attribute",
            "extensions": ["colours_attribute"]
        });
    }
}

Blockly.Blocks['factory_method_implement_class_attribute'] = {
    init: function() {
        var options = [
            ['CoffeeFactory', '0'],
            ['CokeFactory', '1'],
        ];
        this.jsonInit({
            "message0": "%1",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "FACTORY",
                    "options": options
                }
            ],
            "category": Blockly.Categories.method,
            "previousStatement": "implement_class_attribute",
            "extensions": ["colours_attribute"]
        });
    }
}

Blockly.Blocks['factory_method_coffee_attribute_name'] = {
    init: function() {
        this.jsonInit({
            "message0": "咖啡名",
            "category": Blockly.Categories.method,
            "previousStatement": "abstract_class_attribute",
            "nextStatement": "abstract_class_attribute",
            "extensions": ["colours_attribute"]
        });
    }
}

Blockly.Blocks['factory_method_coffee_attribute_bean'] = {
    init: function() {
        this.jsonInit({
            "message0": "咖啡豆",
            "category": Blockly.Categories.method,
            "previousStatement": "abstract_class_attribute",
            "nextStatement": "abstract_class_attribute",
            "extensions": ["colours_attribute"]
        });
    }
}