import { Application } from '@splinetool/runtime'

const canvas = document.getElementById('page-section-about-canvas')
if (canvas) {
    // set 3d
    const app = new Application(canvas)
    app.load('/scene_2.splinecode')
    // app.setZoom(2)

    // set size follow wrapper
    const onResize = () => {
        const screenWidth = window.innerWidth
        const wrapper = canvas.parentElement
        if (wrapper) {
            canvas.width = wrapper.clientWidth
            canvas.height = wrapper.clientHeight
        }
        if (screenWidth < 836) {
            app.canvas.style.display = 'none'
        } else {
            app.canvas.style.display = 'block'
        }
    }
    window.addEventListener('resize', onResize)
}
