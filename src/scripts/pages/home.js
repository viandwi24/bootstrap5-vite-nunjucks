import { Application } from '@splinetool/runtime'

const canvas = document.getElementById('page-section-home-canvas')
if (canvas) {
    // set size follow wrapper
    const wrapper = canvas.parentElement
    if (wrapper) {
        canvas.width = wrapper.clientWidth
        canvas.height = wrapper.clientHeight
    }

    // set 3d
    const app = new Application(canvas)
    app.load('/scene.splinecode')
}
