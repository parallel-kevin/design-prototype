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
    '<category name="Class" colour="#4C97FF" secondaryColour="#3373CC">' +
        '<block type="implement_class" id="implement_class">' +
        '</block>' +
    '</category>' +
    '<category name="Attribute" colour="#D65CD6" secondaryColour="#BD42BD">' +
        '<block type="implement_class_attribute" id="implement_class_attribute">' +
        '</block>' +
    '</category>' +
    '<category name="Method" colour="#9966FF" secondaryColour="#774DCB">' +
        '<block type="implement_class_method" id="implement_class_method">' +
            '<value name="PRICE">' +
                '<shadow type="text">' +
                    '<field name="TEXT"></field>' +
                '</shadow>' +
            '</value>' +
        '</block>' +
    '</category>' +
    '</xml>';
