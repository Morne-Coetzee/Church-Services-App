package church.services.backend

import grails.rest.RestfulController

class ChurchServiceTypeController extends RestfulController<ChurchServiceType> {
    static responseFormats = ['json', 'xml']

    ChurchServiceTypeController() {
        super(ChurchServiceType)
    }
}