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

goog.provide('Blockly.Blocks.defaultToolbox');

goog.require('Blockly.Blocks');

/**
 * @fileoverview Provide a default toolbox XML.
 */

Blockly.Blocks.defaultToolbox = '<xml id="toolbox-categories" style="display: none">' +
    '<category name="类" colour="#4C97FF" secondaryColour="#3373CC">' +
        '<block type="super_class" id="super_class">' +
            '<value name="CLASS_NAME">' +
                '<shadow type="text">' +
                    '<field name="TEXT">叫声</field>' +
                '</shadow>' +
            '</value>' +
        '</block>' +
        '<block type="sub_class" id="sub_class">' +
            '<value name="CLASS_NAME">' +
                '<shadow type="text">' +
                    '<field name="TEXT">牛</field>' +
                '</shadow>' +
            '</value>' +
        '</block>' +
    '</category>' +
    '<category name="方法" colour="#9966FF" secondaryColour="#774DCB">' +
        '<block type="super_class_method" id="super_class_method">' +
        '</block>' +
        '<block type="sub_class_method" id="sub_class_method">' +
        '<value name="VOICE">' +
            '<shadow type="text">' +
                '<field name="TEXT">哞哞</field>' +
            '</shadow>' +
        '</value>' +
        '</block>' +
    '</category>' +
    '</xml>';
