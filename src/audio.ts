import { EcasProviderSingleton as audio } from '@netent-tech/ecas-provider';
import { type IEcasOptions } from '@netent-tech/ecas-engine'
(async (): Promise<void> => {
  const searchParams = new URLSearchParams(window.location.search)
  const loadPath = searchParams.get('ecas-load-path') ?? 'https://jadujoel.github.io/template-sounds/'
  const response = await fetch(`${loadPath}/config.json`)
  const ecasOptions: IEcasOptions = await response.json()
  ecasOptions.soundConfig!.settings!.loadPath = loadPath
  audio.withOptions(ecasOptions).load()
})().catch(console.log)
export { audio }
