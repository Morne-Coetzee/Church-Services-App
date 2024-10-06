package church.services.backend

class ChurchServiceType {
    String typeName

    static constraints = {
        typeName nullable: false, blank: false
    }
}