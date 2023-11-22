import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
    entries: [
        { builder: "mkdist", input: "./themes/" },
        // @ts-expect-error: See https://github.com/unjs/unbuild/issues/332
        { builder: "mkdist", input: "./themes/", format: "cjs", ext: "cjs" },
    ],
    clean: true,
    declaration: true,
    sourcemap: true,
    // externals: ["vue"],
});
