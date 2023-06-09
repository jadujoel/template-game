import { EcasEvents } from "@netent-tech/ecas-engine"
import { audio } from "./audio"

const triggers = [
  'start',
  'spin',
  'inactive',
  'active',
  'mute',
  'unmute',
  'stop',
  'reverb_on',
  'reverb_off'
] as const

class Game {
  load() {
    // Make ecas respond to game triggers
    triggers.forEach(trigger => add(trigger))

    // Make game respond to ecas events.
    audio.ready.then(ecas => {
      ecas.eventHandler.on(EcasEvents.Sound.Ended, (name: string) => {
        console.log('[game]: SOUND ENDED: ' + name)
      })
    })
  }
}

function add(name: string, ...params: unknown[]) {
  const listener = () => { audio.trigger(name, ...params) }
  document.getElementById(name)?.addEventListener('click', listener)
}
export const game = new Game()
