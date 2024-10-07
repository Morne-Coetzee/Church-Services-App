package church.services.backend

import church.services.backend.ChurchServiceType

class ChurchService {
    Long id
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
        id column: 'id'
        name column: 'name'
        description column: 'description'
        date column: 'date'
        type column: 'type_id'
    }
}