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
        this.jsonInit({
            "message0": "%1 的叫声",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "ANIMAL_MENU",
                    "options": [
                        ['牛', '0'],
                        ['狗', '1'],
                        ['猫', '2'],
                        ['老鼠', '3'],
                    ]
                }
            ],
            "category": Blockly.Categories.method,
            "extensions": ["colours_motion", "shape_end"]
        });
    }
}