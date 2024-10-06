package church.services.backend

import grails.rest.RestfulController

class ChurchServicesController extends RestfulController {
    static responseFormats = ['json', 'xml']

    ChurchServicesController() {
        super(ChurchService)
    }

    def index() {
        respond ChurchService.list()
    }
}