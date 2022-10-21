import { Application } from '@splinetool/runtime'

const canvas = document.getElementById('page-section-home-canvas')
if (canvas) {
    // set 3d
    const app = new Application(canvas)
    app.load('/scene.splinecode')

    // set size follow wrapper
    const onResize = () => {
        const screenWidth = window.innerWidth
        const wrapper = canvas.parentElement
        // wrapper.style.backgroundColor = '#000'

        // update size
        // if (wrapper) {
        //     canvas.width = wrapper.clientWidth
        //     canvas.height = wrapper.clientHeight
        // }

        // update
        if (screenWidth < 836) {
            app.canvas.style.display = 'none'
        } else {
            app.canvas.style.display = 'block'
        }

        // app.setSize(canvas.width, canvas.height)
        // app.emitEvent('resize')
    }
    window.addEventListener('resize', onResize)
    window.addEventListener('DOMContentLoaded', () => {
        onResize()
    })
}
