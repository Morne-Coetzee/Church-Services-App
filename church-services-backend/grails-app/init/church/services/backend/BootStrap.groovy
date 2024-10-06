class BootStrap {
    def init = { servletContext ->
        if (!servletContext.initialized) {
            servletContext.addFilter("myFilter", MyFilterClass)
        }
    }

    def destroy = {
    }
}