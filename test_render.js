const fs = require('fs');

// Mock browser Globals
global.React = {
    useState: (init) => [init, (val) => {}],
    useEffect: (fn, deps) => {},
    useRef: (init) => ({ current: init }),
    createElement: (type, props, ...children) => ({ type, props, children })
};

global.ReactDOM = {
    createRoot: (el) => ({
        render: (component) => {
            console.log("Successfully mocked mount! No syntax errors on load.");
        }
    })
};

global.document = {
    getElementById: (id) => ({})
};

// Evaluate the Babel extracted code
try {
    const code = fs.readFileSync('temp_test.js', 'utf8');
    // Strip script-wrapper lines if any
    eval(code);
    console.log("React Component evaluated with zero errors!");
} catch (err) {
    console.error("CRASH IDENTIFIED DURING EVALUATION:", err);
}
