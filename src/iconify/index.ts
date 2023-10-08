// import fs from 'node:fs'
// import path from 'node:path'
import { addCollection } from '@iconify/vue'

export async function downloadAndInstall() {
  const icons = Object.freeze(await fetch('./icons/index.json').then(r => r.json()))
  icons.list.forEach(async (icon: string) => {
    const icons = Object.freeze(await fetch(`./icons/${icon}`).then(r => r.json()))
    addCollection(icons)
  })
}
