import fs from 'fs-extra';
import path from 'node:path';
import pc from 'picocolors';
import * as Manifest from '../themes';

const rootDir = process.cwd()

interface ManifestElement {
    name: string
    src: string
    description: string
    wallpaper: string
}

console.log(pc.bold(pc.cyan(`  GEN `)) + " manifests...")
const manifests = (Object.keys(Manifest) as (keyof typeof Manifest)[]).reduce((acc, key) => {
    console.log(pc.bold(pc.green(` SCAN `))  + ` ${key} `)
    return [...acc, {
        name: key,
        src: Manifest[key].cover,
        wallpaper: Manifest[key].skin.wallpaper,
        description: Manifest[key].description
    }]
}, [] as ManifestElement[])

console.log(pc.bgMagenta(` WRITE `) + pc.gray(' dist/manifest.json '))

await fs.ensureDir(path.join(rootDir, '/dist'))
await fs.writeJSON(path.join(rootDir, '/dist', './manifest.json'), manifests, {
    spaces: 2
})
