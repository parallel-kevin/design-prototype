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

Blockly.JavaScript['text'] = function(block) {
    // Text value.
    var code = Blockly.JavaScript.quote_(block.getFieldValue('TEXT'));
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sub_class'] = function(block) {
    var code = '';
    var method = Blockly.JavaScript.statementToCode(block, 'METHOD');

    if (block.parentBlock_) {
        code += Blockly.JavaScript.valueToCode(block, 'CLASS_NAME', Blockly.JavaScript.ORDER_NONE) + '类继承自' +
            Blockly.JavaScript.valueToCode(block.parentBlock_, 'CLASS_NAME', Blockly.JavaScript.ORDER_NONE) + '类';
    } else {
        code += Blockly.JavaScript.valueToCode(block, 'CLASS_NAME', Blockly.JavaScript.ORDER_NONE) + '类';
    }

    if (method) {
        code += '，拥有方法' + method;
    }

    return code + '\n';
};

Blockly.JavaScript['super_class'] = function(block) {
    var code = '';
    var method = Blockly.JavaScript.statementToCode(block, 'METHOD');
    if (method) {
        code += Blockly.JavaScript.valueToCode(block, 'CLASS_NAME', Blockly.JavaScript.ORDER_NONE) + '类，拥有方法' + method;
    } else {
        code += Blockly.JavaScript.valueToCode(block, 'CLASS_NAME', Blockly.JavaScript.ORDER_NONE) + '类';
    }

    return code + '\n';
};

Blockly.JavaScript['super_class_method'] = function(block) {
    return '发出叫声\n';
};

Blockly.JavaScript['sub_class_method'] = function(block) {
    var code = '';
    code = Blockly.JavaScript.valueToCode(block, 'VOICE', Blockly.JavaScript.ORDER_NONE);
    return "发出" + code + '的叫声\n';
};

Blockly.JavaScript['implement_class'] = function(block) {
    var code = '';
    var method = Blockly.JavaScript.statementToCode(block, 'METHOD');
    if (method) {
        code += Blockly.JavaScript.valueToCode(block, 'CLASS_NAME', Blockly.JavaScript.ORDER_NONE) + method;
    } else {
        code += '请完善实现类';
    }

    return code + '\n';
};

Blockly.JavaScript['implement_class_method'] = function(block) {
    var code = '';
    var ANIMAL_MENU = {
        '0': '哞哞',
        '1': '汪汪',
        '2': '喵喵',
        '3': '吱吱'
    };
    var attributeBlock = block.parentBlock_.childBlocks_.filter(function (value) {
        return value.type === 'implement_class_attribute';
    })[0];
    if (attributeBlock) {
        var voice = ANIMAL_MENU[attributeBlock.getFieldValue('ANIMAL_MENU')];
        return '发出' + voice + '的叫声\n';
    } else {
        return '';
    }

};