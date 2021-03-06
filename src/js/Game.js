export default class Game {
  init() {
    const canvas = document.querySelector('canvas')

    const draw = () => {
      const ctx = canvas.getContext('2d')

      const lvl = '--\\----.------------------------------'
      let x = 0
      let y = 50 // eslint-disable-line no-magic-numbers
      ctx.beginPath()
      ctx.moveTo(x, y)

      for (const segment of lvl) {
        switch (segment) {
          case '-':
            x += 10
            break
          case '.':
            y += 10
            break
          case '\\':
            x += 10
            y += 10
            break
          default: break
        }
        ctx.lineTo(x, y)
      }

      ctx.stroke()
    }

    const resize = () => {
      // console.log(`${canvas.width}`)
      const ratio = window.innerWidth / window.innerHeight
      canvas.width = 100 * ratio
      canvas.height = 100
    }

    resize()
    window.addEventListener('resize', resize)

    draw()

    const fps = 0
    const loop = () => {
      // console.log('hello from the other side')
      // const tNow = /*window.*/performance.now();
      // const delta = 0 // time since last draw
      // update(delta)

      draw()
    }

    const millisPerSec = 1000
    /* window.*/setInterval(loop, fps > 0 ? millisPerSec / fps : 0)
  }
}