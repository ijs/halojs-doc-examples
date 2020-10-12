import { doc } from 'halo-utils'
import conf from './app.conf'
import path from 'path'

;(async function() {
    const rootDir = path.resolve(process.cwd(), conf.router.dir)
    const content = await doc.getContent(rootDir)
    await doc.writeContent('./doc.md', content)
    console.log('\x1b[36m%s\x1b[0m', '[Doc] Generate Doc Successfully!'); 
})()
