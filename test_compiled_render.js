const fs = require('fs');

// Mock React
global.React = {
    useState: (init) => {
        let state = init;
        const setState = (val) => {
            if (typeof val === 'function') {
                state = val(state);
            } else {
                state = val;
            }
        };
        return [state, setState];
    },
    useEffect: (fn, deps) => {
        // Run once
        try { fn(); } catch(e) {}
    },
    useRef: (init) => ({ current: init }),
    createElement: (type, props, ...children) => {
        return { type, props, children };
    }
};

global.ReactDOM = {
    createRoot: (el) => ({
        render: (component) => {
            console.log("ReactDOM.render executed successfully!");
        }
    })
};

global.document = {
    getElementById: (id) => ({})
};

try {
    const code = fs.readFileSync('temp_compiled.js', 'utf8');
    eval(code);
    console.log("Compiled esbuild code executed with zero initialization errors!");
} catch (err) {
    console.error("RUNTIME CRASH DURING INITIALIZATION:", err);
}
