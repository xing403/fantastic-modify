<script setup lang="ts">
import { useQRCode } from '@vueuse/integrations/useQRCode'
import type { QRCodeToDataURLOptions } from 'qrcode'

const props = defineProps<{
  text: string
  type?: 'image/png' | 'image/jpeg' | 'image/webp'
  quality?: number
  margin?: number
  scale?: number
  width?: number
  dark?: string
  light?: string
  level?: 'low' | 'medium' | 'quartile' | 'high' | 'L' | 'M' | 'Q' | 'H'
  download?: boolean
}>()
const config: QRCodeToDataURLOptions = {
  type: props.type ?? 'image/jpeg',
  margin: props.margin ?? 4,
  width: props.width,
  scale: props.scale ?? 4,
  rendererOpts: {
    quality: props.quality ?? 0.5,
  },
  color: {
    dark: props.dark ?? '#000000ff',
    light: props.light ?? '#ffffffff',
  },
  QRCodeErrorCorrectionLevel: props.level ?? 'L',
}
const text = toRef(props, 'text')
const download = toRef(props, 'download')
const code = useQRCode(text, config)
function handleDownloadQRCode() {
  const url = code.value
  const a = document.createElement('a')
  a.download = 'QRCode.png'
  a.href = url
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
</script>

<template>
  <div flex="~ col gap-1 justify-center">
    <div class="qr-code">
      <el-image :src="code" fit="fill" :lazy="true" />
    </div>
    <el-button v-if="download" class="download" w-8em type="primary" size="default" @click="handleDownloadQRCode">
      下载二维码
    </el-button>
  </div>
</template>
