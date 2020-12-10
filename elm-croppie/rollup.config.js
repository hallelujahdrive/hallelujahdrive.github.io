import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import elm from "rollup-plugin-elm";

export default {
    input: "./demo.ts",
    output:  {
        file: "./demo.js",
        format: "iife",
    },
    plugins: [
        commonjs(),
        nodeResolve(),
        elm({
            exclude: ["./elm-stuff/**"],
            compiler: {
                optimize: true,
                debug: false,
            },
        }),
        typescript({
            lib: ["es5", "dom"],
        }),
        terser()
    ]
}