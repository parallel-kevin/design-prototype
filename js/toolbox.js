var workspace = null;

function start() {

    var soundsEnabled = null;
    if (sessionStorage) {
        // Restore sounds state.
        soundsEnabled = sessionStorage.getItem('soundsEnabled');
        if (soundsEnabled === null) {
            soundsEnabled = true;
        } else {
            soundsEnabled = (soundsEnabled === 'true');
        }
    } else {
        soundsEnabled = true;
    }

    var match = location.search.match(/dir=([^&]+)/);
    var rtl = match && match[1] == 'rtl';
    var toolbox = getToolboxElement();

    match = location.search.match(/side=([^&]+)/);

    var side = match ? match[1] : 'start';

    workspace = Blockly.inject('blocklyDiv', {
        comments: false,
        disable: false,
        collapse: false,
        media: '../media/',
        readOnly: false,
        rtl: rtl,
        scrollbars: true,
        toolbox: toolbox,
        toolboxPosition: side == 'top' || side == 'start' ? 'start' : 'end',
        horizontalLayout: side == 'top' || side == 'bottom',
        sounds: soundsEnabled,
        zoom: {
            controls: true,
            wheel: true,
            startScale: 0.75,
            maxScale: 4,
            minScale: 0.25,
            scaleSpeed: 1.1
        },
        colours: {
            fieldShadow: 'rgba(255, 255, 255, 0.3)',
            dragShadowOpacity: 0.6
        }
    });

    if (sessionStorage) {
        // Restore event logging state.
        var state = sessionStorage.getItem('logEvents');
        logEvents(Boolean(state));

        // Restore flyout event logging state.
        state = sessionStorage.getItem('logFlyoutEvents');
        logFlyoutEvents(Boolean(state));
    }
}

function startWithMaxBlocks(maxNum) {

    console.log(maxNum);

    var soundsEnabled = null;
    if (sessionStorage) {
        // Restore sounds state.
        soundsEnabled = sessionStorage.getItem('soundsEnabled');
        if (soundsEnabled === null) {
            soundsEnabled = true;
        } else {
            soundsEnabled = (soundsEnabled === 'true');
        }
    } else {
        soundsEnabled = true;
    }

    var match = location.search.match(/dir=([^&]+)/);
    var rtl = match && match[1] == 'rtl';
    var toolbox = getToolboxElement();

    match = location.search.match(/side=([^&]+)/);

    var side = match ? match[1] : 'start';

    workspace = Blockly.inject('blocklyDiv', {
        comments: false,
        disable: false,
        collapse: false,
        media: '../media/',
        readOnly: false,
        rtl: rtl,
        scrollbars: true,
        maxBlocks: maxNum,
        toolbox: toolbox,
        toolboxPosition: side == 'top' || side == 'start' ? 'start' : 'end',
        horizontalLayout: side == 'top' || side == 'bottom',
        sounds: soundsEnabled,
        zoom: {
            controls: true,
            wheel: true,
            startScale: 0.75,
            maxScale: 4,
            minScale: 0.25,
            scaleSpeed: 1.1
        },
        colours: {
            fieldShadow: 'rgba(255, 255, 255, 0.3)',
            dragShadowOpacity: 0.6
        }
    });

    if (sessionStorage) {
        // Restore event logging state.
        var state = sessionStorage.getItem('logEvents');
        logEvents(Boolean(state));

        // Restore flyout event logging state.
        state = sessionStorage.getItem('logFlyoutEvents');
        logFlyoutEvents(Boolean(state));
    }
}

function getToolboxElement() {
    var match = location.search.match(/toolbox=([^&]+)/);
    return document.getElementById('toolbox-' + (match ? match[1] : 'categories'));
}

function logEvents(state) {
    if (sessionStorage) {
        sessionStorage.setItem('logEvents', state ? 'checked' : '');
    }
    if (state) {
        workspace.addChangeListener(logger);
    } else {
        workspace.removeChangeListener(logger);
    }
}

function logFlyoutEvents(state) {
    if (sessionStorage) {
        sessionStorage.setItem('logFlyoutEvents', state ? 'checked' : '');
    }
    var flyoutWorkspace = (workspace.flyout_) ? workspace.flyout_.workspace_ :
        workspace.toolbox_.flyout_.workspace_;
    if (state) {
        flyoutWorkspace.addChangeListener(logger);
    } else {
        flyoutWorkspace.removeChangeListener(logger);
    }
}

function logger(e) {
    console.log(e);
}

function parseCode(json) {
    var code = '';
    var jsonArr = json.split('}\n');
    if (jsonArr.length === 1) {
        return JSON.parse(json);
    } else {
        for (var i = 0; i < jsonArr.length; i++) {
            if (i !== jsonArr.length-1) {
                jsonArr[i] = jsonArr[i] + '}';
            }
            code += JSON.parse(jsonArr[i]).code;
        }
        return {code: code, status: false};
    }
}