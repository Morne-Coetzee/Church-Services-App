package church.services.backend

import grails.gorm.transactions.Transactional

@Transactional
class ChurchServiceTypeService {
    ChurchServiceType get(Serializable id) {
        ChurchServiceType.findById(id)
    }

    List<ChurchServiceType> list(Map args) {
        ChurchServiceType.list(args)
    }

    Long count() {
        ChurchServiceType.count()
    }

    void delete(Serializable id) {
        ChurchServiceType.findById(id)?.delete()
    }

    ChurchServiceType save(ChurchServiceType churchServiceType) {
        churchServiceType.save(flush: true)
    }
}