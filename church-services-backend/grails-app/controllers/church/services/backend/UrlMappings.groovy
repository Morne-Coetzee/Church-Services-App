package church.services.backend

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?" {
            constraints {}
        }
        "/"(view: "/index")
        "500"(view: '/error')
        "404"(view: '/notFound')

        // RESTful mappings
        "/api/church-services"(resources: 'churchServices')
        "/api/church-service-types"(resources: 'churchServiceType')
    }
}