// types/window.d.ts
declare global {
  interface Window {
    hj?: (...args: unknown[]) => void
    _hjSettings?: {
      hjid: number
      hjsv: number
    }
    trackingFunctions?: {
      onLoad: (config: { appId: string }) => void
    }
    Brevo?: Array<[string, Record<string, unknown>]>
    dataLayer?: Record<string, unknown>[]
  }
}

export {}