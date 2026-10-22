import { useEffect } from 'react'

const PETALS = ['/images/petals/hibiscus.png', '/images/petals/dahlia.png', '/images/petals/rose.png']

const SPAWN_DISTANCE = 26 // px the mouse must travel before another flower appears
const MAX_FLOWERS = 36 // cap so the page stays smooth

const rand = (min: number, max: number) => min + Math.random() * (max - min)

/**
 * Small, slightly blurry flowers drift out behind the mouse and fade away.
 * Skipped for touch screens and for visitors who prefer reduced motion.
 */
export function useFlowerTrail() {
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!finePointer.matches) return

    // Layer that holds the flowers; it never catches clicks
    const layer = document.createElement('div')
    layer.setAttribute('aria-hidden', 'true')
    layer.className = 'flower-trail'
    document.body.appendChild(layer)

    // Load the images once so the first flowers don't pop in late
    PETALS.forEach((src) => {
      new Image().src = src
    })

    let lastX = -Infinity
    let lastY = -Infinity
    let alive = 0

    const spawn = (x: number, y: number) => {
      const flower = document.createElement('img')
      const size = rand(16, 30)
      flower.src = PETALS[Math.floor(Math.random() * PETALS.length)]
      flower.alt = ''
      flower.className = 'flower-trail__petal'
      flower.style.width = `${size}px`
      flower.style.height = `${size}px`
      flower.style.left = `${x - size / 2 + rand(-6, 6)}px`
      flower.style.top = `${y - size / 2 + rand(-6, 6)}px`
      // Brightened and softly glowing so they show up on the dark burgundy background
      flower.style.filter = `blur(${rand(0.4, 1.3).toFixed(1)}px) brightness(1.7) saturate(1.2) drop-shadow(0 0 4px rgba(242, 169, 179, 0.5))`
      layer.appendChild(flower)
      alive += 1

      const spin = rand(-120, 120)
      const animation = flower.animate(
        [
          { transform: 'translate(0, 0) rotate(0deg) scale(1)', opacity: 0.85 },
          {
            transform: `translate(${rand(-18, 18)}px, ${rand(24, 52)}px) rotate(${spin}deg) scale(0.5)`,
            opacity: 0,
          },
        ],
        { duration: rand(900, 1400), easing: 'ease-out' },
      )
      animation.onfinish = () => {
        flower.remove()
        alive -= 1
      }
    }

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || reduceMotion.matches) return
      if (alive >= MAX_FLOWERS) return
      if (Math.hypot(event.clientX - lastX, event.clientY - lastY) < SPAWN_DISTANCE) return
      lastX = event.clientX
      lastY = event.clientY
      spawn(event.clientX, event.clientY)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      layer.remove()
    }
  }, [])
}
