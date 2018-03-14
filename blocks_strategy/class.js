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


Blockly.Blocks['sub_class'] = {
    init: function() {
        this.jsonInit({
            "message0": "类名 %1 拥有方法 %2",
            "args0": [
                {
                    "type": "input_value",
                    "name": "CLASS_NAME"
                },
                {
                    "type": "input_statement",
                    "name": "METHOD",
                    "check": "sub_class_method"
                }
            ],
            "category": Blockly.Categories.class,
            "extensions": ["colours_motion", "shape_end"]
        });
    }
}

Blockly.Blocks['super_class'] = {
    init: function() {
        this.jsonInit({
            "message0": "接口名 %1 拥有方法 %2",
            "args0": [
                {
                    "type": "input_value",
                    "name": "CLASS_NAME"
                },
                {
                    "type": "input_statement",
                    "name": "METHOD",
                    "check": "super_class_method"
                }
            ],
            "category": Blockly.Categories.class,
            "extensions": ["colours_motion", "shape_hat"]
        });
    }
}

Blockly.Blocks['implement_class'] = {
    init: function() {
        this.jsonInit({
            "message0": "类名 %1 类属性 %2 拥有方法 %3",
            "args0": [
                {
                    "type": "input_value",
                    "name": "CLASS_NAME"
                },
                {
                    "type": "input_statement",
                    "name": "ATTRIBUTE"
                },
                {
                    "type": "input_statement",
                    "name": "METHOD"
                }
            ],
            "category": Blockly.Categories.class,
            "extensions": ["colours_motion", "shape_hat"]
        });
    }
}