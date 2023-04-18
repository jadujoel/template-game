import { EcasProviderSingleton as audio } from '@netent-tech/ecas-provider';
import { type IEcasOptions } from '@netent-tech/ecas-engine'
(async (): Promise<void> => {
  const searchParams = new URLSearchParams(window.location.search)
  // make sure we can host the sounds locally without needing to run push and wait for github action
  // by editing the url to include the ecas-load-path query param
  const loadPath = searchParams.get('ecas-load-path') ?? 'https://jadujoel.github.io/template-sounds/'
  const response = await fetch(`${loadPath}/config.json`)
  const ecasOptions: IEcasOptions = await response.json()
  ecasOptions.soundConfig!.settings!.loadPath = loadPath
  audio.withOptions(ecasOptions).load()
})().catch(console.log)
export { audio }
