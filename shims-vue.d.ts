// src/shims-vue.d.ts
declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<Record<string, any>, object, any>
  export default component
}
