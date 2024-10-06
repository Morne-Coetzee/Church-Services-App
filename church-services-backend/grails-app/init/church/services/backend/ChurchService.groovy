package church.services.backend

import grails.gorm.transactions.Transactional

@Transactional
class ChurchService {
    String name
    String description
    Date date
    ChurchServiceType type

    static constraints = {
        name nullable: false, blank: false
        description nullable: true
        date nullable: false
        type nullable: false
    }

    static mapping = {
        table 'church_service'
    }
}