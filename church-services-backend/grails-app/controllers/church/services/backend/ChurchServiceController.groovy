package church.services.backend

import grails.rest.RestfulController

class ChurchServicesController extends RestfulController<ChurchService> {
    static responseFormats = ['json', 'xml']
    ChurchServiceService churchServiceService

    ChurchServicesController() {
        super(ChurchService)
    }

    def index() {
        try {
            def churchServices = churchServiceService.getAllChurchServices()
            if (churchServices) {
                respond churchServices.collect { service ->
                    [
                        id: service.id,
                        name: service.name,
                        description: service.description,
                        date: service.date.format("yyyy-MM-dd'T'HH:mm:ss.SSS"),
                        type_id: service.type.id
                    ]
                }, [formats: ['json']]
            } else {
                respond status: 404, message: "No church services found"
            }
        } catch (Exception e) {
            log.error("Error fetching church services", e)
            respond status: 500, message: "Error fetching church services"
        }
    }
}